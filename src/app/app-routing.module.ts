import { RegisterComponent } from './components/register/register.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MembersComponent } from './components/members/members.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: 'members', component: MembersComponent},
{path: 'task-manager/:id', component: TaskManagerComponent},
{path: 'task-list', component: TaskListComponent},
{path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
