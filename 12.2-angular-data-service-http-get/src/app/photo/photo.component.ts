import { LocalizedString } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  // photo passed in from app-photo tag of app.component
  @Input() photo:any;
  // photo base url
  @Input() baseUrl:string = '';
    // upvotedEvent bound in app-photo tag, will trigger a function in app,component
  @Output() upvotedEvent = new EventEmitter<string>();
  // counter of upvotes on this photo
  votes:number = 0;

  constructor() {
  }

  // bound in photo.component template to click of Upvote! button
  upvote(title:string):void{
    console.log(title);
    this.votes+=1;
    this.upvotedEvent.emit(title);
  }

  ngOnInit() {
    this.photo.displayurl = this.baseUrl + this.photo.imageurl;
    console.log("displayUrl is "+this.photo.displayurl)
  }

}
