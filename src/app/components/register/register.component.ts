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
    //cuidado aqui!
/*     const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken'); */
  }
  post() {
    this.service.post(this.dataMembers);
    console.log(this.dataMembers);
    this.dataMembers = {
      login: '',
      password: '',
      nome: '',
      telefone: ''
    }
    }
}
