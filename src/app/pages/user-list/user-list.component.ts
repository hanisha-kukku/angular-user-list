import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: any[] = [];
  isLoading = false;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.isLoading = true; // show spinner before fetching
    this.api.getUsers().subscribe({
      next: data => {
        this.users = data;
        this.isLoading = false; // hide spinner on success
      },
      error: () => {
        this.isLoading = false; // hide spinner on error
      }
    });
  }

  goToPosts(userId: number) {
    this.router.navigate(['/posts', userId]);
  }
}
