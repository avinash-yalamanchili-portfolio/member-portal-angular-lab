import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Member Portal Angular Lab';
  lesson = 'Day 2 · Components and template binding';

  member = {
    name: 'Jordan Lee',
    memberId: 'LAB-1001',
    planName: 'Sample Health Plan'
  };

  showDetails = true;
  statusMessage = 'The component supplied this data to the template.';

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
    this.statusMessage = this.showDetails
      ? 'Member details are visible.'
      : 'Member details are hidden.';
  }
}
