import { AxiosService } from './../../service/Axios.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
})
export class TaskManagerComponent implements OnInit {

  data: any = {};
  dataTask:Task={
    map: '',
    players:'',
    requirements: '',
    observation: ''
  };



  constructor(private service: AxiosService, private ActivedRouter: ActivatedRoute) {
    this.ActivedRouter.params.subscribe((resp:any) => {
      console.log(resp.id);
      this.service.get(resp.id).then((res:any) => {
        this.dataTask = res;

      })
    })
  }

  ngOnInit(): void {
    //Http Requests
    this.service.getAll().then((resp) => {
      this.data = resp;
    });



    //Seleção de elementos
    const todoForm = document.querySelector('#todo-form');
    const todoInput = document.querySelector('#todo-input');
    const todoList = document.querySelector('#todo-list');
    const editForm = document.querySelector('#edit-form');
    const editInput = document.querySelector('#edit-input');
    const cancelEditBtn = document.querySelector('#cancel-edit-btn');
    const todoIcon = document.querySelector('.finish-todo');

    //Funções
    //Eventos
    todoIcon?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Icone todo works!');
    });



    document.addEventListener('click', (e) => {
      const targetEl = e.target as Element;
      const parentEl = targetEl.closest('div');

      if (targetEl.classList.contains('finish-todo')) {
        if (parentEl != null) {
          parentEl.classList.toggle('done');
        }
      }
    });

  }
//Http Requests
  post(){
    this.service.post(this.dataTask);
    }

  put(){}



  }
