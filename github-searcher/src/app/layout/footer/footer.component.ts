import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/sevices/github.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public githubService:GithubService
  ) { }

  ngOnInit(): void {
  }

}
