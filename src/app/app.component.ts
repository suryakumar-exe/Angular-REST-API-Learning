import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private http:HttpClient){

  }
  posts:any=[]
  loadPosts(){
    this.http.get("https://jsonplaceholder.typicode.com/users")
    .subscribe((posts:any[])=>
    this.posts = posts
    )
  }
}
