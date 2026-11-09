import { Component } from '@angular/core';
import { PortalDataService } from '../shared/portal-data.service';

@Component({
  standalone: false,
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {
  member = this.portalData.getMember();
  benefits = this.portalData.getBenefits();
  deductible = {
    individual: 1500,
    spent: 620,
    outOfPocketMaximum: 6000,
    outOfPocketSpent: 1240
  };

  constructor(private readonly portalData: PortalDataService) {}

  get deductibleProgress(): number {
    return Math.round(
      (this.deductible.spent / this.deductible.individual) * 100
    );
  }

  get outOfPocketProgress(): number {
    return Math.round(
      (this.deductible.outOfPocketSpent /
        this.deductible.outOfPocketMaximum) *
        100
    );
  }
}
