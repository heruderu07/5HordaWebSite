import { Injectable } from "@angular/core";
import axios from "axios";
import { Console } from "console";

@Injectable({
  providedIn: 'root'
})

export class AxiosService{
  urltasks:string = "https://horda-a5c2f-default-rtdb.firebaseio.com/tasks.json";
  urltaskroot: string = "https://horda-a5c2f-default-rtdb.firebaseio.com/tasks";
  constructor(){

  }
  get(){
    return axios.get(this.urltasks).then( res =>{
      console.log(res.data)
      return res.data;
    }).catch((error) => {console.log(error);
    })
  }
}
