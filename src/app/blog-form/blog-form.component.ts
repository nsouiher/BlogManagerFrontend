import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BlogService } from '../services/blog-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  addForm: FormGroup;
  titleFormControl: FormControl;
  contentFormControl: FormControl;
  createdAtFormControl: FormControl;
  ownerFormControl: FormControl;
  constructor(private blogservice: BlogService) {
    this.titleFormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
    this.contentFormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
    this.createdAtFormControl = new FormControl('');
    this.ownerFormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);

    this.addForm = new FormGroup({
      title: this.titleFormControl,
      content: this.contentFormControl,
      createdAt: this.createdAtFormControl,
      owner: this.ownerFormControl
    });
  }

  ngOnInit() {
    this.createdAtFormControl.setValue(formatDate(new Date(), 'yyyy-MM-ddTHH:MM:ss.sss', 'fr-FR'))
  }
  
  createBlog(form: FormGroup) {
    console.log(form.value);
    this.blogservice.createBlog(form.value).subscribe(data => {
      Swal.fire('', "Blog successfully created", 'success');
    });    
  }

}
