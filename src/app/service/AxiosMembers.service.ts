import { Injectable } from '@angular/core';
import axios, { AxiosHeaders } from 'axios';
import { Members } from '../interfaces/members.interface ';

@Injectable({
  providedIn: 'root',
})
export class AxiosMembersService {
  urlmembers: string =    'https://horda-a5c2f-default-rtdb.firebaseio.com/members.json';
  urlmembersroot: string = 'https://horda-a5c2f-default-rtdb.firebaseio.com/members';
  constructor() {}

  getAll() {
    return axios
      .get(this.urlmembers)
      .then((res) => {
        return res.data;
      }).catch((error) => {
        console.log(error);
      });
  }

  get(key$:string){
    let url = `${this.urlmembersroot}/${key$}.json`;
    return axios.get(url).then(resp => {
      console.log(resp, 'get');
      return resp.data;
    }).catch((error) =>{
      console.log(error);
    });
  }

  post(members: Members) {
    let body = JSON.stringify(members);
    let headers = new AxiosHeaders({
      'Content-Type': 'application/json'
    });

    return axios.post(this.urlmembers, body, { headers }).then((resp) => {
        console.log(resp);
        return resp;
      }).catch((error) => {
        console.log(error);
      });
  }
  put(members:Members, key$:string){
    let body = JSON.stringify(members);
    let headers = new AxiosHeaders({
      'Content-Type': 'application/json'
    });
    let url = `${this.urlmembersroot}/${key$}.json`;
    return axios.put(url, body, {headers}).then(resp =>{
      console.log(resp)
      return resp;
    }).catch((error) =>{
      console.log(error);
    });

  }
  delete(key$:string){
    let url = `${this.urlmembersroot}/${key$}.json`;
    return axios.delete(url).then(resp => {
      console.log(resp);
      return resp;
    }).catch((error) => {
      console.log(error);
    });
  }
}
