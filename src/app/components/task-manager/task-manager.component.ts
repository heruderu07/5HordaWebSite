import { AxiosService } from '../../service/Axios.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
})
export class TaskManagerComponent implements OnInit {
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

  constructor(
    private service: AxiosService,
    /* private ActivedRouter: ActivatedRoute */
  ) {
   /*  this.ActivedRouter.params.subscribe((resp: any) => {
      console.log(resp.id);
      this.service.get(resp.id).then((res: any) => {
        this.dataTask = res;
      });
    }); */
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
    console.log(this.dataTask)
  }

  put() {}
}
