1.Refreshed the basics like what is component , how to create it and so on
2.Component interaction :-
    * component1 => variable (parent)
    * component2 => need the variable of component 1 (child)
    methods available for doing this 
     * parent to child using @input decorator
     * child to parent using @output decorator
     * child to parent using @output decorator , event emitter (when there is an event)

     *********** Using @input from parent to child ************* 
     app.comp.ts => message: string ="Message from"
     app.comp.html => <app-child component name [any variableParent]="message"></app-child component name>
     child.comp.ts => import {Input} from core
                   => @Input() any variableParent:string; //(same as the one app.comp in html)
                   => child.comp.html {{any variableParent}}

     *********** Using @input from child to parent ************* 

      # child - parent using @ViewChild decorator
      # child - parent using @Output Decorator and Event emitter (when there is an event)

      1. using @ViewChild decorator
       * create variable in child component and assign value  
            =>   childMessage: string ="From child to parent i.e app-component";
      * in parent component here app.comp.ts import ViewChild , AfterViewInit from @angular/core
        import the child component
        use @ViewChild(childComponentName) anyVariablename: any;
          this property will be loaded after ViewInit
   ngAfterViewInit()
    {
      console.log(this.anyVariablename);      
    }

     ********** using @Output and event emitter ****************
     import Output , EventEmitter at child component
