import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //Seleção de elementos
 const todoForm = document.querySelector("#todo-form");
 const todoInput = document.querySelector("#todo-input");
 const todoList= document.querySelector("#todo-list");
 const editForm = document.querySelector("#edit-form");
 const editInput = document.querySelector("#edit-input");
 const cancelEditBtn = document.querySelector("#cancel-edit-btn");

 //Funções

 //Eventos

 todoForm?.addEventListener("submit", (e) =>{
   e.preventDefault();
   console.log("Form works!")
 })

  }
}
