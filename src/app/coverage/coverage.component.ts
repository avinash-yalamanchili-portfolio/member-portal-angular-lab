import { Component } from '@angular/core';
import { ClientStorageService } from '../shared/client-storage.service';
import { PortalDataService } from '../shared/portal-data.service';
import { CoveredMember } from '../shared/portal.models';

type CardSide = 'front' | 'back';

@Component({
  standalone: false,
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrl: './coverage.component.scss'
})
export class CoverageComponent {
  private readonly selectedMemberKey = 'memberPortal.coverage.selectedMember';
  private readonly cardSideKey = 'memberPortal.coverage.cardSide';

  readonly members = this.portalData.getCoveredMembers();
  selectedMemberId = this.getInitialMemberId();
  cardSide: CardSide = this.storage.get<CardSide>(this.cardSideKey, 'front');
  actionMessage = '';

  constructor(
    private readonly portalData: PortalDataService,
    private readonly storage: ClientStorageService
  ) {}

  get selectedMember(): CoveredMember {
    return this.members.find((member) => member.id === this.selectedMemberId) ?? this.members[0];
  }

  selectMember(memberId: string): void {
    if (!this.members.some((member) => member.id === memberId)) {
      return;
    }

    this.selectedMemberId = memberId;
    this.cardSide = 'front';
    this.actionMessage = '';
    this.storage.set(this.selectedMemberKey, memberId);
    this.storage.set(this.cardSideKey, this.cardSide);
  }

  showCardSide(side: CardSide): void {
    this.cardSide = side;
    this.storage.set(this.cardSideKey, side);
  }

  async copyMemberId(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.selectedMember.memberId);
      this.actionMessage = 'Member ID copied.';
    } catch {
      this.actionMessage = `Member ID: ${this.selectedMember.memberId}`;
    }
  }

  printCard(): void {
    window.print();
  }

  private getInitialMemberId(): string {
    const savedId = this.storage.get(this.selectedMemberKey, this.members[0]?.id ?? '');
    return this.members.some((member) => member.id === savedId)
      ? savedId
      : this.members[0]?.id ?? '';
  }
}
