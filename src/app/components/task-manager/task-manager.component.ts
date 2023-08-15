import { AxiosService } from '../../service/Axios.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
})
export class TaskManagerComponent implements OnInit {

  router: Router;
  data: any = {};
  dataTask: Task = {
    map: '',
    player1: '',
    player2: '',
    player3: '',
    requirement1: '',
    requirement2: '',
    requirement3: '',
    date: '',
  };
  buttonControlPostOrPut = true;
  id: string = ''; //Used to manipulate buttonControlPostOrPut});


  constructor(
    private service: AxiosService,
    private ActivedRouter: ActivatedRoute,
    router: Router
    ){
    this.router = router;
    this.ActivedRouter.params.subscribe((resp: any) => {
      console.log(resp.id);
      this.id=resp.id;
      if (resp.id == 'new') { //manipulando dados através da rota http usando o id que consta no final da rota no caso 'new'
        this.buttonControlPostOrPut;
      } else {
        this.buttonControlPostOrPut = false;
        this.service.get(resp.id).then((res: any) => {
          this.dataTask = res;
        });
      }
    });
  }

  ngOnInit(): void {
    //Http Requests
    this.service.getAll().then((resp) => {
      this.data = resp;
    });
  }

  //Http Requests
  post() {
    this.service.post(this.dataTask);
    console.log(this.dataTask);
    this.dataTask = {
    map: '',
    player1: '',
    player2: '',
    player3: '',
    requirement1: '',
    requirement2: '',
    requirement3: '',
    date: '',
    }

  }

  put() {
    this.service.put(this.dataTask, this.id);
    this.router.navigate(['/task-list']);
    this.ngOnInit();
  }

  delete() {
    this.service.delete(this.id);
  }

}
