import { Component, OnInit } from '@angular/core';
import { AxiosMembersService } from 'src/app/service/AxiosMembers.service';
import { Members } from 'src/app/interfaces/members.interface ';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  dataMembers: Members = {
    login: '',
    password: '',
    nome: '',
    telefone: ''
  }

  constructor(private service: AxiosMembersService,) {}

  ngOnInit(): void {

  }
  post() {

  if (!this.dataMembers.login){
    return alert("Campo username em branco")
  }
  if (!this.dataMembers.nome){
    return alert("Campo nome em branco")
  }

  if (!this.dataMembers.password){
    return alert("Campo password em branco")
  }

  if (!this.dataMembers.telefone){
    return alert("Campo telefone em branco")
  }



    this.service.post(this.dataMembers);
    this.dataMembers = {
      login: '',
      password: '',
      nome: '',
      telefone: ''
    }
    }
}
