import { Component } from '@angular/core';

interface DashboardSummary {
  label: string;
  value: string;
  description: string;
}

interface MemberActivity {
  title: string;
  description: string;
  date: string;
  status: 'Complete' | 'Available' | 'New';
}

@Component({
  standalone: false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  member = {
    firstName: 'Jordan',
    fullName: 'Jordan Lee',
    memberId: 'MP-1001',
    planName: 'Essential Plus',
    coverageStatus: 'Active',
    effectiveDate: 'January 1, 2026'
  };

  summaries: DashboardSummary[] = [
    { label: 'Claims', value: '3', description: '1 recently processed' },
    { label: 'Messages', value: '2', description: 'Unread messages' },
    { label: 'Benefits', value: '12', description: 'Covered services available' }
  ];

  recentActivity: MemberActivity[] = [
    {
      title: 'Claim processed',
      description: 'Office visit claim ending in 1842',
      date: 'Oct 27, 2026',
      status: 'Complete'
    },
    {
      title: 'Explanation of benefits',
      description: 'A new document is ready to view',
      date: 'Oct 24, 2026',
      status: 'Available'
    },
    {
      title: 'Secure message',
      description: 'You have a new account message',
      date: 'Oct 21, 2026',
      status: 'New'
    }
  ];

  showMemberDetails = true;

  toggleMemberDetails(): void {
    this.showMemberDetails = !this.showMemberDetails;
  }
}
