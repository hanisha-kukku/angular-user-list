import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  post: any;
  author: any;
  comments: any[] = [];
  isLoading = false;
  userId: number | null = null;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {}

  ngOnInit() {
    const postId = +this.route.snapshot.paramMap.get('postId')!;
    this.isLoading = true;

    this.api.getPost(postId).subscribe({
      next: post => {
        this.post = post;

        this.api.getUser(post.userId).subscribe(user => this.author = user);
        this.api.getComments(postId).subscribe(comments => {
          this.comments = comments;
          this.isLoading = false;
        });
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goBackToPosts() {
    if (this.userId) {
      this.router.navigate(['/posts', this.userId]);
    } else {
      this.router.navigate(['/']); // fallback
    }
  }
}
