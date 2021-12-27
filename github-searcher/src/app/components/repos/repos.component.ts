import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { GithubService } from 'src/app/sevices/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl: any;
  repos: any[] = [];
  constructor(
    public githubService: GithubService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.repoUrl) {
      this.githubService.getRepros(this.repoUrl).subscribe(
        (repos: any) => {
          this.repos = repos;
          this.ref.detectChanges();
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
}
