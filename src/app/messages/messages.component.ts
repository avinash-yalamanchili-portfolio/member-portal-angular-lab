import { Component } from '@angular/core';
import {
  MessageCategory,
  MessageFilter,
  SecureMessage
} from '../shared/portal.models';
import { PortalDataService } from '../shared/portal-data.service';

@Component({
  standalone: false,
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  filters: MessageFilter[] = ['All', 'Unread', 'Sent'];
  categories: MessageCategory[] = ['Claims', 'Benefits', 'Account'];
  selectedFilter: MessageFilter = 'All';
  searchTerm = '';
  messages = this.portalData.getMessages();

  showComposer = false;
  composeSubject = '';
  composeBody = '';
  composeCategory: MessageCategory = 'Account';
  confirmationMessage = '';

  constructor(private readonly portalData: PortalDataService) {}

  get filteredMessages(): SecureMessage[] {
    const search = this.searchTerm.trim().toLowerCase();

    return this.messages.filter((message) => {
      const matchesFilter =
        this.selectedFilter === 'All' ||
        (this.selectedFilter === 'Unread' &&
          message.folder === 'Inbox' &&
          !message.isRead) ||
        (this.selectedFilter === 'Sent' && message.folder === 'Sent');
      const matchesSearch =
        search.length === 0 ||
        message.subject.toLowerCase().includes(search) ||
        message.sender.toLowerCase().includes(search) ||
        message.preview.toLowerCase().includes(search);

      return matchesFilter && matchesSearch;
    });
  }

  get unreadCount(): number {
    return this.messages.filter(
      (message) => message.folder === 'Inbox' && !message.isRead
    ).length;
  }

  selectFilter(filter: MessageFilter): void {
    this.selectedFilter = filter;
  }

  toggleComposer(): void {
    this.showComposer = !this.showComposer;
    this.confirmationMessage = '';
  }

  sendMessage(): void {
    const subject = this.composeSubject.trim();
    const body = this.composeBody.trim();
    if (!subject || !body) {
      return;
    }

    this.portalData.sendMessage(subject, body, this.composeCategory);
    this.messages = this.portalData.getMessages();
    this.composeSubject = '';
    this.composeBody = '';
    this.composeCategory = 'Account';
    this.showComposer = false;
    this.selectedFilter = 'Sent';
    this.confirmationMessage = 'Your demo message was added to Sent messages.';
  }
}
