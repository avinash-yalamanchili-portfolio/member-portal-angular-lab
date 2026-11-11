import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SecureMessage } from '../shared/portal.models';
import { PortalDataService } from '../shared/portal-data.service';

@Component({
  standalone: false,
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrl: './message-detail.component.scss'
})
export class MessageDetailComponent {
  message?: SecureMessage;

  constructor(
    route: ActivatedRoute,
    portalData: PortalDataService
  ) {
    const messageId = route.snapshot.paramMap.get('id') ?? '';
    portalData.markMessageRead(messageId);
    this.message = portalData.getMessageById(messageId);
  }
}
