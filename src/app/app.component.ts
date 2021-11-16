import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ["h1 { color: red; }"]
})
export class AppComponent implements OnInit{
  title = 'student-list';
  name: string = "";
  display: boolean = true;
  subject: any = null;
  
  clicked():void{
    this.title = "Fred's student-list";
  }
  clicks():void{
    this.title = "Parth's personal button";
  }
  ngOnInit(): void{
    console.debug("this is a debug message");
  }
}
