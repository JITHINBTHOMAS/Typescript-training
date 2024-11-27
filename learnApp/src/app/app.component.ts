import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnApp #build by @jithinbthomas' +new Date().getUTCFullYear();
  x: number = 10
  y: number = 12
  result:number =0
  
  public product():number{
    return this.x*this.y
  }

  h:number=0
  public fact(x:number):number{
    if(x==1 ||x==0)
      return 1;
    return this.fact(x-1)*x
  }
  public fact1(x:string){
    this.h = Number.parseInt(x)
    if(this.h==1 ||this.h==0)
      this.result= 1;
    this.result = this.fact(this.h-1)*this.h
  }

}
