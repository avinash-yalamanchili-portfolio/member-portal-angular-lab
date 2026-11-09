export type ClaimStatus = 'Processed' | 'In review' | 'Denied';
export type ClaimFilter = 'All' | ClaimStatus;

export interface MemberProfile {
  firstName: string;
  fullName: string;
  memberId: string;
  planName: string;
  coverageStatus: 'Active' | 'Inactive';
  effectiveDate: string;
}

export interface DashboardSummary {
  label: string;
  value: string;
  description: string;
  route: string;
}

export interface MemberActivity {
  title: string;
  description: string;
  date: string;
  status: 'Complete' | 'Available' | 'New';
}

export interface Claim {
  id: string;
  provider: string;
  serviceDate: string;
  processedDate?: string;
  service: string;
  status: ClaimStatus;
  billedAmount: number;
  allowedAmount: number;
  planPaid: number;
  memberResponsibility: number;
  referenceNumber: string;
}

export interface BenefitCategory {
  id: string;
  name: string;
  description: string;
  inNetwork: string;
  outOfNetwork: string;
  services: string[];
}
