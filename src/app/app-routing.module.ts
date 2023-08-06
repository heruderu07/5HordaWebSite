import { MembersComponent } from './components/members/members.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: 'members', component: MembersComponent},
{path: 'task-manager', component: TaskManagerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
