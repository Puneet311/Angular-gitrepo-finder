import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/sevices/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any
  userName:string=''
  errorMsg:any
  constructor(
    public githubService:GithubService,
    private ref:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  handleFind(){
    this.githubService.getUserDetails(this.userName).subscribe(
      (user:any)=>{
        this.user=user
        this.errorMsg=''
        this.ref.detectChanges()
      },
      (error:any)=>{
        this.errorMsg="user Not Found"
        this.user=''
        this.ref.detectChanges()

      }
    )
  }
  resetSearch(){
    this.userName=''
    this.user=''
    // this.ref.detectChanges()

  }

}
