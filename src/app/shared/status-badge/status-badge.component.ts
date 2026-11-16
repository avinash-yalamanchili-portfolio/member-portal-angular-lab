import { Component, Input } from '@angular/core';

export type StatusTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

@Component({
  standalone: false,
  selector: 'app-status-badge',
  template: '<span class="badge" [class]="\'badge \' + tone"><ng-content></ng-content>{{ label }}</span>',
  styleUrl: './status-badge.component.scss'
})
export class StatusBadgeComponent {
  @Input() label = '';
  @Input() tone: StatusTone = 'neutral';
}
