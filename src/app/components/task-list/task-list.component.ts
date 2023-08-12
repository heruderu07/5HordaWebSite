import { AxiosService } from '../../service/Axios.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  data: any = {};
  constructor(private service: AxiosService) {}

  ngOnInit(): void {
    this.service.getAll().then((resp) => {
      this.data = resp;
      console.log(this.data);
    });
  }

  delete(id: any) {
    this.service.delete(id).then((resp) => {
      this.ngOnInit();
    });
  }
}
