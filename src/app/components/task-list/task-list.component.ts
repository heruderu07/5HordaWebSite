import { AxiosTaskService } from '../../service/AxiosTask.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  data: any = {};
  constructor(private service: AxiosTaskService) {}

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
