import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

toDo: ToDo[] = 
[
  {task: "Wash towels", completed: false},
  {task: "Vacuum and dry basement after it flooded during the storm on 8-3", completed: true},
  {task: "relax", completed: false},
  {task: "exercise", completed: true},
  {task: "complete this lab", completed: false},
] 

addTask(form:NgForm):void
{
  //make a new object
  let newTask:ToDo = 
  {
    task: form.form.value.task,
    completed: form.form.value.completed
  };
  this.toDo.push(newTask);
}

completeTask(index:number):void
{
  this.toDo.splice(index,1);


 

}




}