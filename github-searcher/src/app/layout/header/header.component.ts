import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/sevices/auth.service';
import { GithubService } from 'src/app/sevices/github.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email:any=''
  constructor(
    private auth:AuthService,
    private router:Router,
    private toastr:ToastrService,
    public githubService:GithubService
  ) { 
    auth.getUser().subscribe((user)=>{
      this.email = user?.email
    })
  }

  ngOnInit(): void {
  }

  async handleSingOut(){
    try{
      const res =await this.auth.signOut();
      this.router.navigateByUrl('/signin')
      this.toastr.info("Login Again to continue")
      this.email=''
    }
    catch(error){
      this.toastr.error('Somthing is wrong')
    }
  }
  changeDark(event:any){
    this.githubService.isDark=event.target.checked
  }

}
