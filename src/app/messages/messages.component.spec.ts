import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesComponent],
      imports: [CommonModule, FormsModule, RouterModule.forRoot([])]
    }).compileComponents();
  });

  it('should render the inbox and unread count', () => {
    const fixture = TestBed.createComponent(MessagesComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.message-list li').length).toBe(3);
    expect(fixture.componentInstance.messages.filter((message) => !message.isRead).length).toBe(2);
  });

  it('should filter unread messages', () => {
    const fixture = TestBed.createComponent(MessagesComponent);
    fixture.componentInstance.selectFilter('Unread');

    expect(fixture.componentInstance.filteredMessages.length).toBe(2);
  });

  it('should compose a sent message', () => {
    const fixture = TestBed.createComponent(MessagesComponent);
    fixture.componentInstance.composeSubject = 'Demo question';
    fixture.componentInstance.composeBody = 'This is a synthetic message.';
    fixture.componentInstance.sendMessage();

    expect(fixture.componentInstance.selectedFilter).toBe('Sent');
    expect(fixture.componentInstance.filteredMessages[0].subject).toBe('Demo question');
  });
});
