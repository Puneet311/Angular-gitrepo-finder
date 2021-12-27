import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  isDark:boolean=false
  constructor(private http:HttpClient) { }
  url=`https://api.github.com/users/`

  getUserDetails(userName:string){
    return this.http.get(this.url+userName)
  }

  getRepros(repoUrl:string){
    return this.http.get(repoUrl)
  }
  changeDarkTrue(){
    this.isDark=true
  }
  changeDarkFalse(){
    this.isDark=false
  }
}
