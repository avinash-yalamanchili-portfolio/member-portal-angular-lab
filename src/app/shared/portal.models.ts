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

export type CoverageStatus = 'Active' | 'Inactive';

export interface CoveredMember {
  id: string;
  displayName: string;
  relationship: 'Subscriber' | 'Dependent';
  memberId: string;
  groupNumber: string;
  planName: string;
  coverageStatus: CoverageStatus;
  effectiveDate: string;
  primaryCareProvider: string;
  rxBin: string;
  rxPcn: string;
  rxGroup: string;
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

export type MessageCategory = 'Claims' | 'Benefits' | 'Account';
export type MessageFolder = 'Inbox' | 'Sent';
export type MessageFilter = 'All' | 'Unread' | 'Sent';

export interface SecureMessage {
  id: string;
  subject: string;
  preview: string;
  body: string;
  sender: string;
  receivedDate: string;
  category: MessageCategory;
  folder: MessageFolder;
  isRead: boolean;
  priority: 'Normal' | 'Important';
}

export type AuthorizationStatus =
  | 'Submitted'
  | 'In review'
  | 'Information needed'
  | 'Approved'
  | 'Denied';

export type AuthorizationFilter = 'All' | AuthorizationStatus;

export interface AuthorizationTimelineEvent {
  label: string;
  date: string;
  description: string;
  complete: boolean;
}

export interface PriorAuthorization {
  id: string;
  memberName: string;
  service: string;
  serviceCategory: string;
  requestingProvider: string;
  serviceLocation: string;
  requestedDate: string;
  lastUpdatedDate: string;
  decisionTargetDate: string;
  status: AuthorizationStatus;
  priority: 'Standard' | 'Expedited';
  referenceNumber: string;
  nextStep: string;
  timeline: AuthorizationTimelineEvent[];
}

export type NetworkStatus = 'In network' | 'Out of network';

export interface ProviderLocation {
  addressLine: string;
  cityStateZip: string;
  phone: string;
  distanceMiles: number;
}

export interface DirectoryProvider {
  id: string;
  name: string;
  specialty: string;
  networkStatus: NetworkStatus;
  acceptingNewPatients: boolean;
  telehealthAvailable: boolean;
  languages: string[];
  location: ProviderLocation;
  officeHours: string;
  accessibility: string[];
}

export type AppointmentStatus = 'Upcoming' | 'Completed' | 'Cancelled';
export type AppointmentType = 'Office visit' | 'Video visit' | 'Lab visit';

export interface AppointmentChecklistItem {
  id: string;
  label: string;
  description: string;
  required: boolean;
}

export interface CareAppointment {
  id: string;
  memberName: string;
  providerName: string;
  specialty: string;
  appointmentType: AppointmentType;
  date: string;
  time: string;
  status: AppointmentStatus;
  location: string;
  phone: string;
  reason: string;
  confirmationCode: string;
  checkInOpens: string;
  checklist: AppointmentChecklistItem[];
}

export type MedicationStatus = 'Active' | 'Renewal needed' | 'Inactive';

export interface Medication {
  id: string;
  memberName: string;
  name: string;
  strength: string;
  directions: string;
  prescriber: string;
  pharmacy: string;
  status: MedicationStatus;
  refillsRemaining: number;
  lastFilledDate: string;
  nextRefillDate: string;
  supplyDays: number;
  warnings: string[];
}
