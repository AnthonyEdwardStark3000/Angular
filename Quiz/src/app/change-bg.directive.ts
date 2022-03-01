import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() isCorrect: Boolean = false;
  constructor(private ef: ElementRef, private render: Renderer2) { }
  @HostListener('click') answer(){
    if(this.isCorrect)
    {
        this.render.setStyle(this.ef.nativeElement,'background','green');
        this.render.setStyle(this.ef.nativeElement,'color','#fff');
        this.render.setStyle(this.ef.nativeElement,'border','2px solid grey');
    }
    else
    {
      this.render.setStyle(this.ef.nativeElement,'background','red');
      this.render.setStyle(this.ef.nativeElement,'color','#fff');
      this.render.setStyle(this.ef.nativeElement,'border','2px solid grey');
    }
  }
}
