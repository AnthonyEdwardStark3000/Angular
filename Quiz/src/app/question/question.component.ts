import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionsService } from './../service/questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name: String | undefined;
  public questionList: any = [];
  public currentQuestion : number = 0;
  public points : number = 0;
  counter:number = 60;
  correctAnswer: number =0;
  inCorrectAnswer: number =0;
  interval$: any;
  progress:string="0";
  isQuizCompleted:Boolean =false;
  constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions()
  {
    this.questionService.getQuestionJson().subscribe(res=>{
      // console.log(res.questions);
      this.questionList = res.questions;
    });
  }
  nextQuestion(){

      this.currentQuestion ++;

  }
  previousQuestion(){
    this.currentQuestion --;
  }
  answer(Questionno: number, option: any){
    if(Questionno === this.questionList.length)
    {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if(option.correct)
    {
      this.points += 10;
      this.correctAnswer ++;
      setTimeout(() => {
        this.currentQuestion ++;
        this.resetCounter();
        this.getProgressPercentage();
      }, 1000);
    }
    else{
      setTimeout(() => {
        this.currentQuestion ++;
        this.inCorrectAnswer++;
        this.getProgressPercentage();
      }, 1000);
      this.points -=10;

    }
  }
  startCounter(){
    this.interval$ = interval(1000).subscribe(val=>{
      this.counter--;
      if(this.counter == 0)
      {
        this.currentQuestion++;
        this.counter = 60;
        this.points -=10;
      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },600000)
  }
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter =0;
  }
  resetCounter(){
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0";
  }
  getProgressPercentage(){
    this.progress =((this.currentQuestion/this.questionList.length)*100).toString();
    // alert(this.progress);
    return this.progress;
  }
}
