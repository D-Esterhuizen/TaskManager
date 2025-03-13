import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashboardComponent
{
  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;
  ToDay: Date = new Date();

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  ngOnInit()
  {
    this.Designation = 'Team Leader';
    this.Username = 'Njabulo Ndlovu';
    this.NoOfTeamMembers = 15;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 25;
    this.UpComingProjects = 0.5;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 39225;
    this.AvailableFunds = 62985;
    

    this.Clients = [//heres where the clients is bound
      'Poontang Patrol',
      'Jerkmate ',
      'Gooners Pty Ltd',
    ];

   

    for (var i = 2025; i >= 2015; i--)
    {
      this.Years.push(i);
    }//this makes yeasrs in a list for every year since 2015
  }


}
