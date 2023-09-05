import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  email = '' as string;
  password = '' as string;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
}
