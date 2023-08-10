import { Injectable } from '@angular/core';
import axios, { AxiosHeaders } from 'axios';
import { Task } from './../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  urltasks: string =    'https://horda-a5c2f-default-rtdb.firebaseio.com/tasks.json';
  urltaskroot: string = 'https://horda-a5c2f-default-rtdb.firebaseio.com/tasks';
  constructor() {}

  getAll() {
    return axios
      .get(this.urltasks)
      .then((res) => {
        return res.data;
      }).catch((error) => {
        console.log(error);
      });
  }

  get(key$:string){
    let url = `${this.urltaskroot}/${key$}.json`;
    return axios.get(url).then(resp => {
      console.log(resp, 'get');
      return resp.data;
    }).catch((error) =>{
      console.log(error);
    });
  }

  post(task: Task) {
    let body = JSON.stringify(task);
    //antes estava Headers, alterei para AxiosHeaders pq o headers em baixo estava apontando erro
    let headers = new AxiosHeaders({
      'Content-Type': 'application/json'
    });

    return axios.post(this.urltasks, body, { headers }).then((resp) => {
        console.log(resp);
        return resp;
      }).catch((error) => {
        console.log(error);
      });
  }
  put(task:Task, key$:string){
    let body = JSON.stringify(task);
    let headers = new AxiosHeaders({
      'Content-Type': 'application/json'
    });
    let url = `${this.urltaskroot}/${key$}.json`;
    return axios.put(url, body, {headers}).then(resp =>{
      console.log(resp)
      return resp;
    }).catch((error) =>{
      console.log(error);
    });

  }
}
