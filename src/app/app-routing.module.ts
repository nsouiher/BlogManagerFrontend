import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogFormComponent } from './blog-form/blog-form.component';


const routes: Routes = [

    {
      path:'blogs',
      component:BlogComponent
    },
    
    {
      path:'newBlog',
      component:BlogFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
