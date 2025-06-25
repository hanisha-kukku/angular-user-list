import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent {
  posts: any[] = [];
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    const userId = +this.route.snapshot.paramMap.get('userId')!;
    this.isLoading = true;

    this.api.getPostsByUser(userId).subscribe({
      next: data => {
        this.posts = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  goToPost(postId: number) {
    this.router.navigate(['/post', postId]);
  }
  
  goHome() {
    this.router.navigate(['/']);
  }
}
