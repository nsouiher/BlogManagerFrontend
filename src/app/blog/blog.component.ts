import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs:any;
 
  constructor(private blogservice:BlogService) {
   
   }

  ngOnInit() {
    this.getAllQuestion();
  }

  getAllQuestion() {
    this.blogservice.getAllBlogs().subscribe(data => {
      console.log(data);
      this.blogs=data;
      data.forEach(element => {
        console.log(element.id)
        
      });
    }
    );
  }
  deleteBlog(id:any){
    this.blogservice.deleteBlog(id).subscribe(data=>{
      console.log(data);
    })
  }
  
}
