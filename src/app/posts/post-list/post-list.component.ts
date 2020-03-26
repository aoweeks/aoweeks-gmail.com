import { Component } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
  posts = [
    {title: 'First Post', content: 'This is the first post\'s comment'},
    {title: 'Second Post', content: 'This is the second post\'s comment'},
    {title: 'Third Post', content: 'This is the third post\'s comment'}
  ]
};
