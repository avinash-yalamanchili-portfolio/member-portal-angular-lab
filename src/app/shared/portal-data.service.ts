import { Injectable } from '@angular/core';
import {
  BenefitCategory,
  Claim,
  DashboardSummary,
  MemberActivity,
  MemberProfile
} from './portal.models';

@Injectable({ providedIn: 'root' })
export class PortalDataService {
  private readonly member: MemberProfile = {
    firstName: 'Member',
    fullName: 'Demo Member',
    memberId: 'DEMO-MEMBER-001',
    planName: 'Essential Plus',
    coverageStatus: 'Active',
    effectiveDate: 'January 1, 2026'
  };

  private readonly claims: Claim[] = [
    {
      id: 'DEMO-CLM-001',
      provider: 'Example Primary Care',
      serviceDate: 'Oct 12, 2026',
      processedDate: 'Oct 27, 2026',
      service: 'Office visit',
      status: 'Processed',
      billedAmount: 265,
      allowedAmount: 180,
      planPaid: 145,
      memberResponsibility: 35,
      referenceNumber: 'DEMO-REF-001'
    },
    {
      id: 'DEMO-CLM-002',
      provider: 'Example Diagnostic Center',
      serviceDate: 'Sep 28, 2026',
      processedDate: 'Oct 18, 2026',
      service: 'Laboratory services',
      status: 'Processed',
      billedAmount: 480,
      allowedAmount: 310,
      planPaid: 258,
      memberResponsibility: 52,
      referenceNumber: 'DEMO-REF-002'
    },
    {
      id: 'DEMO-CLM-003',
      provider: 'Example Imaging Center',
      serviceDate: 'Sep 19, 2026',
      service: 'Diagnostic imaging',
      status: 'In review',
      billedAmount: 740,
      allowedAmount: 0,
      planPaid: 0,
      memberResponsibility: 0,
      referenceNumber: 'DEMO-REF-003'
    },
    {
      id: 'DEMO-CLM-004',
      provider: 'Example Urgent Care',
      serviceDate: 'Aug 30, 2026',
      processedDate: 'Sep 11, 2026',
      service: 'Urgent care visit',
      status: 'Denied',
      billedAmount: 395,
      allowedAmount: 0,
      planPaid: 0,
      memberResponsibility: 395,
      referenceNumber: 'DEMO-REF-004'
    }
  ];

  private readonly benefits: BenefitCategory[] = [
    {
      id: 'primary-care',
      name: 'Primary care',
      description: 'Routine visits, preventive care, and ongoing health support.',
      inNetwork: '$25 copay',
      outOfNetwork: '40% after deductible',
      services: ['Annual wellness visit', 'Primary care visit', 'Preventive screenings']
    },
    {
      id: 'specialist-care',
      name: 'Specialist care',
      description: 'Care from an in-network medical specialist.',
      inNetwork: '$45 copay',
      outOfNetwork: '50% after deductible',
      services: ['Specialist consultation', 'Follow-up visit', 'Outpatient treatment']
    },
    {
      id: 'urgent-care',
      name: 'Urgent care',
      description: 'Treatment for non-emergency illnesses and injuries.',
      inNetwork: '$60 copay',
      outOfNetwork: '50% after deductible',
      services: ['Illness evaluation', 'Minor injury treatment', 'Basic diagnostic testing']
    },
    {
      id: 'prescriptions',
      name: 'Prescription drugs',
      description: 'Retail and mail-order medication coverage.',
      inNetwork: '$15–$75 copay',
      outOfNetwork: 'Not covered',
      services: ['Generic drugs', 'Preferred brand drugs', 'Specialty medications']
    }
  ];

  getMember(): MemberProfile {
    return { ...this.member };
  }

  getClaims(): Claim[] {
    return this.claims.map((claim) => ({ ...claim }));
  }

  getClaimById(id: string): Claim | undefined {
    const claim = this.claims.find((item) => item.id === id);
    return claim ? { ...claim } : undefined;
  }

  getBenefits(): BenefitCategory[] {
    return this.benefits.map((benefit) => ({
      ...benefit,
      services: [...benefit.services]
    }));
  }

  getDashboardSummaries(): DashboardSummary[] {
    return [
      { label: 'Claims', value: String(this.claims.length), description: 'View claim history', route: '/claims' },
      { label: 'Messages', value: '2', description: 'Unread messages', route: '/overview' },
      { label: 'Benefits', value: String(this.benefits.length), description: 'Coverage categories', route: '/benefits' }
    ];
  }

  getRecentActivity(): MemberActivity[] {
    return [
      { title: 'Claim processed', description: 'Demo office visit claim', date: 'Oct 27, 2026', status: 'Complete' },
      { title: 'Explanation of benefits', description: 'A new document is ready to view', date: 'Oct 24, 2026', status: 'Available' },
      { title: 'Secure message', description: 'You have a new account message', date: 'Oct 21, 2026', status: 'New' }
    ];
  }
}
