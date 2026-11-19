import { Injectable } from '@angular/core';
import {
  BenefitCategory,
  CareAppointment,
  Claim,
  CoveredMember,
  DirectoryProvider,
  DashboardSummary,
  MemberActivity,
  MemberProfile,
  Medication,
  MessageCategory,
  PriorAuthorization,
  SecureMessage
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

  private readonly coveredMembers: CoveredMember[] = [
    {
      id: 'DEMO-PERSON-001',
      displayName: 'Demo Member',
      relationship: 'Subscriber',
      memberId: 'DEMO-MEMBER-001',
      groupNumber: 'DEMO-GROUP-100',
      planName: 'Essential Plus',
      coverageStatus: 'Active',
      effectiveDate: 'January 1, 2026',
      primaryCareProvider: 'Example Primary Care',
      rxBin: 'DEMO01',
      rxPcn: 'EXAMPLE',
      rxGroup: 'DEMO-RX-01'
    },
    {
      id: 'DEMO-PERSON-002',
      displayName: 'Demo Dependent',
      relationship: 'Dependent',
      memberId: 'DEMO-MEMBER-002',
      groupNumber: 'DEMO-GROUP-100',
      planName: 'Essential Plus',
      coverageStatus: 'Active',
      effectiveDate: 'January 1, 2026',
      primaryCareProvider: 'Example Family Practice',
      rxBin: 'DEMO01',
      rxPcn: 'EXAMPLE',
      rxGroup: 'DEMO-RX-01'
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

  private readonly messages: SecureMessage[] = [
    {
      id: 'DEMO-MSG-001',
      subject: 'Claim review completed',
      preview: 'A recent demo claim has finished processing.',
      body: 'The review of demo claim DEMO-CLM-001 is complete. Open the Claims workspace to review the processing summary and cost breakdown.',
      sender: 'Example Member Services',
      receivedDate: 'Nov 10, 2026',
      category: 'Claims',
      folder: 'Inbox',
      isRead: false,
      priority: 'Important'
    },
    {
      id: 'DEMO-MSG-002',
      subject: 'Plan document available',
      preview: 'Your example plan summary is ready to view.',
      body: 'An updated example plan summary is available. Visit the Benefits workspace to review coverage categories and annual cost progress.',
      sender: 'Example Plan Support',
      receivedDate: 'Nov 8, 2026',
      category: 'Benefits',
      folder: 'Inbox',
      isRead: false,
      priority: 'Normal'
    },
    {
      id: 'DEMO-MSG-003',
      subject: 'Account preferences saved',
      preview: 'Your demo communication preferences were updated.',
      body: 'The communication preferences for this demo account were saved successfully. No further action is required.',
      sender: 'Example Account Services',
      receivedDate: 'Nov 5, 2026',
      category: 'Account',
      folder: 'Inbox',
      isRead: true,
      priority: 'Normal'
    }
  ];

  private readonly authorizations: PriorAuthorization[] = [
    {
      id: 'DEMO-AUTH-001',
      memberName: 'Demo Member',
      service: 'Diagnostic MRI',
      serviceCategory: 'Advanced imaging',
      requestingProvider: 'Example Primary Care',
      serviceLocation: 'Example Imaging Center',
      requestedDate: 'Nov 2, 2026',
      lastUpdatedDate: 'Nov 6, 2026',
      decisionTargetDate: 'Nov 16, 2026',
      status: 'Approved',
      priority: 'Standard',
      referenceNumber: 'DEMO-AUTH-REF-001',
      nextStep: 'Contact the service location to discuss scheduling.',
      timeline: [
        { label: 'Request received', date: 'Nov 2, 2026', description: 'The authorization request was received for review.', complete: true },
        { label: 'Clinical review', date: 'Nov 4, 2026', description: 'The submitted information was reviewed.', complete: true },
        { label: 'Decision issued', date: 'Nov 6, 2026', description: 'The requested service was approved.', complete: true }
      ]
    },
    {
      id: 'DEMO-AUTH-002',
      memberName: 'Demo Dependent',
      service: 'Outpatient physical therapy',
      serviceCategory: 'Rehabilitation',
      requestingProvider: 'Example Family Practice',
      serviceLocation: 'Example Rehabilitation Center',
      requestedDate: 'Nov 10, 2026',
      lastUpdatedDate: 'Nov 13, 2026',
      decisionTargetDate: 'Nov 24, 2026',
      status: 'In review',
      priority: 'Standard',
      referenceNumber: 'DEMO-AUTH-REF-002',
      nextStep: 'No action is needed while the clinical review is in progress.',
      timeline: [
        { label: 'Request received', date: 'Nov 10, 2026', description: 'The authorization request was received for review.', complete: true },
        { label: 'Clinical review', date: 'In progress', description: 'A clinical reviewer is evaluating the submitted information.', complete: false },
        { label: 'Decision', date: 'Pending', description: 'A decision has not been issued.', complete: false }
      ]
    },
    {
      id: 'DEMO-AUTH-003',
      memberName: 'Demo Member',
      service: 'Specialty medication',
      serviceCategory: 'Pharmacy',
      requestingProvider: 'Example Specialty Clinic',
      serviceLocation: 'Example Specialty Pharmacy',
      requestedDate: 'Nov 8, 2026',
      lastUpdatedDate: 'Nov 14, 2026',
      decisionTargetDate: 'Nov 21, 2026',
      status: 'Information needed',
      priority: 'Expedited',
      referenceNumber: 'DEMO-AUTH-REF-003',
      nextStep: 'The requesting provider must submit the additional clinical information listed in the notice.',
      timeline: [
        { label: 'Request received', date: 'Nov 8, 2026', description: 'The expedited request was received.', complete: true },
        { label: 'Information requested', date: 'Nov 14, 2026', description: 'Additional clinical information was requested from the provider.', complete: true },
        { label: 'Review resumes', date: 'Pending', description: 'Review will continue when the requested information is received.', complete: false }
      ]
    },
    {
      id: 'DEMO-AUTH-004',
      memberName: 'Demo Member',
      service: 'Sleep study',
      serviceCategory: 'Diagnostic services',
      requestingProvider: 'Example Primary Care',
      serviceLocation: 'Example Sleep Center',
      requestedDate: 'Oct 22, 2026',
      lastUpdatedDate: 'Oct 29, 2026',
      decisionTargetDate: 'Nov 5, 2026',
      status: 'Denied',
      priority: 'Standard',
      referenceNumber: 'DEMO-AUTH-REF-004',
      nextStep: 'Review the decision notice for appeal rights and available alternatives.',
      timeline: [
        { label: 'Request received', date: 'Oct 22, 2026', description: 'The authorization request was received.', complete: true },
        { label: 'Clinical review', date: 'Oct 27, 2026', description: 'The clinical review was completed.', complete: true },
        { label: 'Decision issued', date: 'Oct 29, 2026', description: 'The request did not meet the applicable coverage criteria.', complete: true }
      ]
    }
  ];

  private readonly providers: DirectoryProvider[] = [
    {
      id: 'DEMO-PROVIDER-001',
      name: 'Example Primary Care',
      specialty: 'Primary care',
      networkStatus: 'In network',
      acceptingNewPatients: true,
      telehealthAvailable: true,
      languages: ['English', 'Spanish'],
      location: { addressLine: '100 Example Avenue', cityStateZip: 'Demo City, CA 90001', phone: '(555) 010-1001', distanceMiles: 2.4 },
      officeHours: 'Monday–Friday, 8:00 AM–5:00 PM',
      accessibility: ['Wheelchair accessible', 'Accessible parking']
    },
    {
      id: 'DEMO-PROVIDER-002',
      name: 'Example Family Practice',
      specialty: 'Family medicine',
      networkStatus: 'In network',
      acceptingNewPatients: true,
      telehealthAvailable: false,
      languages: ['English', 'Hindi', 'Telugu'],
      location: { addressLine: '200 Sample Street', cityStateZip: 'Demo City, CA 90002', phone: '(555) 010-1002', distanceMiles: 4.1 },
      officeHours: 'Monday–Saturday, 9:00 AM–6:00 PM',
      accessibility: ['Wheelchair accessible']
    },
    {
      id: 'DEMO-PROVIDER-003',
      name: 'Example Cardiology Group',
      specialty: 'Cardiology',
      networkStatus: 'In network',
      acceptingNewPatients: false,
      telehealthAvailable: true,
      languages: ['English', 'Spanish', 'Mandarin'],
      location: { addressLine: '300 Demonstration Road', cityStateZip: 'Sample Hills, CA 90003', phone: '(555) 010-1003', distanceMiles: 7.8 },
      officeHours: 'Monday–Friday, 8:30 AM–4:30 PM',
      accessibility: ['Wheelchair accessible', 'Accessible exam rooms']
    },
    {
      id: 'DEMO-PROVIDER-004',
      name: 'Example Behavioral Health',
      specialty: 'Behavioral health',
      networkStatus: 'In network',
      acceptingNewPatients: true,
      telehealthAvailable: true,
      languages: ['English', 'Spanish'],
      location: { addressLine: '400 Sample Plaza', cityStateZip: 'Sample Hills, CA 90004', phone: '(555) 010-1004', distanceMiles: 9.3 },
      officeHours: 'Monday–Friday, 7:00 AM–7:00 PM',
      accessibility: ['Wheelchair accessible', 'Remote appointments']
    },
    {
      id: 'DEMO-PROVIDER-005',
      name: 'Example Orthopedic Center',
      specialty: 'Orthopedics',
      networkStatus: 'Out of network',
      acceptingNewPatients: true,
      telehealthAvailable: false,
      languages: ['English'],
      location: { addressLine: '500 Example Boulevard', cityStateZip: 'Demo City, CA 90005', phone: '(555) 010-1005', distanceMiles: 11.6 },
      officeHours: 'Monday–Friday, 8:00 AM–5:00 PM',
      accessibility: ['Wheelchair accessible', 'Accessible parking']
    }
  ];

  private readonly appointments: CareAppointment[] = [
    {
      id: 'DEMO-APT-001', memberName: 'Demo Member', providerName: 'Example Primary Care',
      specialty: 'Primary care', appointmentType: 'Office visit', date: 'Nov 24, 2026', time: '9:30 AM',
      status: 'Upcoming', location: '100 Example Avenue, Demo City, CA 90001', phone: '(555) 010-1001',
      reason: 'Annual wellness visit', confirmationCode: 'DEMO-CONF-2401', checkInOpens: 'Nov 22, 2026',
      checklist: [
        { id: 'insurance-card', label: 'Verify insurance card', description: 'Review the digital ID card before the visit.', required: true },
        { id: 'medications', label: 'Review medication list', description: 'Confirm current prescriptions and supplements.', required: true },
        { id: 'questions', label: 'Prepare questions', description: 'Add topics you want to discuss with the provider.', required: false }
      ]
    },
    {
      id: 'DEMO-APT-002', memberName: 'Demo Dependent', providerName: 'Example Family Practice',
      specialty: 'Family medicine', appointmentType: 'Video visit', date: 'Dec 3, 2026', time: '2:00 PM',
      status: 'Upcoming', location: 'Secure video visit', phone: '(555) 010-1002', reason: 'Follow-up visit',
      confirmationCode: 'DEMO-CONF-2402', checkInOpens: 'Dec 3, 2026 at 1:45 PM',
      checklist: [
        { id: 'device', label: 'Test camera and microphone', description: 'Use a supported browser and allow device access.', required: true },
        { id: 'medications', label: 'Review medication list', description: 'Confirm current prescriptions.', required: true }
      ]
    },
    {
      id: 'DEMO-APT-003', memberName: 'Demo Member', providerName: 'Example Diagnostic Center',
      specialty: 'Laboratory services', appointmentType: 'Lab visit', date: 'Oct 18, 2026', time: '8:15 AM',
      status: 'Completed', location: '250 Sample Plaza, Demo City, CA 90002', phone: '(555) 010-1010',
      reason: 'Routine laboratory testing', confirmationCode: 'DEMO-CONF-2390', checkInOpens: 'Completed', checklist: []
    }
  ];

  private readonly medications: Medication[] = [
    {
      id: 'DEMO-RX-001', memberName: 'Demo Member', name: 'Example Medication A', strength: '10 mg',
      directions: 'Take one tablet by mouth once daily.', prescriber: 'Example Primary Care',
      pharmacy: 'Example Community Pharmacy', status: 'Active', refillsRemaining: 2,
      lastFilledDate: 'Oct 30, 2026', nextRefillDate: 'Nov 29, 2026', supplyDays: 30,
      warnings: ['Take at the same time each day.', 'Contact the prescriber before stopping this medication.']
    },
    {
      id: 'DEMO-RX-002', memberName: 'Demo Member', name: 'Example Medication B', strength: '25 mg',
      directions: 'Take one tablet with food in the evening.', prescriber: 'Example Specialty Clinic',
      pharmacy: 'Example Mail Pharmacy', status: 'Renewal needed', refillsRemaining: 0,
      lastFilledDate: 'Oct 16, 2026', nextRefillDate: 'Nov 20, 2026', supplyDays: 30,
      warnings: ['Take with food.', 'A new prescription is required for the next fill.']
    },
    {
      id: 'DEMO-RX-003', memberName: 'Demo Dependent', name: 'Example Medication C', strength: '5 mg',
      directions: 'Take one tablet as directed.', prescriber: 'Example Family Practice',
      pharmacy: 'Example Community Pharmacy', status: 'Active', refillsRemaining: 4,
      lastFilledDate: 'Nov 8, 2026', nextRefillDate: 'Dec 8, 2026', supplyDays: 30,
      warnings: ['Keep out of reach of children.']
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

  getCoveredMembers(): CoveredMember[] {
    return this.coveredMembers.map((member) => ({ ...member }));
  }

  getMessages(): SecureMessage[] {
    return this.messages.map((message) => ({ ...message }));
  }

  getAuthorizations(): PriorAuthorization[] {
    return this.authorizations.map((authorization) => ({
      ...authorization,
      timeline: authorization.timeline.map((event) => ({ ...event }))
    }));
  }

  getAuthorizationById(id: string): PriorAuthorization | undefined {
    const authorization = this.authorizations.find((item) => item.id === id);
    return authorization
      ? { ...authorization, timeline: authorization.timeline.map((event) => ({ ...event })) }
      : undefined;
  }

  getProviders(): DirectoryProvider[] {
    return this.providers.map((provider) => ({
      ...provider,
      languages: [...provider.languages],
      accessibility: [...provider.accessibility],
      location: { ...provider.location }
    }));
  }

  getProviderById(id: string): DirectoryProvider | undefined {
    const provider = this.providers.find((item) => item.id === id);
    return provider
      ? { ...provider, languages: [...provider.languages], accessibility: [...provider.accessibility], location: { ...provider.location } }
      : undefined;
  }

  getAppointments(): CareAppointment[] {
    return this.appointments.map((appointment) => ({
      ...appointment,
      checklist: appointment.checklist.map((item) => ({ ...item }))
    }));
  }

  getAppointmentById(id: string): CareAppointment | undefined {
    const appointment = this.appointments.find((item) => item.id === id);
    return appointment ? { ...appointment, checklist: appointment.checklist.map((item) => ({ ...item })) } : undefined;
  }

  getMedications(): Medication[] {
    return this.medications.map((medication) => ({ ...medication, warnings: [...medication.warnings] }));
  }

  getMedicationById(id: string): Medication | undefined {
    const medication = this.medications.find((item) => item.id === id);
    return medication ? { ...medication, warnings: [...medication.warnings] } : undefined;
  }

  getMessageById(id: string): SecureMessage | undefined {
    const message = this.messages.find((item) => item.id === id);
    return message ? { ...message } : undefined;
  }

  getUnreadMessageCount(): number {
    return this.messages.filter(
      (message) => message.folder === 'Inbox' && !message.isRead
    ).length;
  }

  markMessageRead(id: string): void {
    const message = this.messages.find((item) => item.id === id);
    if (message && message.folder === 'Inbox') {
      message.isRead = true;
    }
  }

  sendMessage(
    subject: string,
    body: string,
    category: MessageCategory
  ): SecureMessage {
    const message: SecureMessage = {
      id: `DEMO-MSG-${String(this.messages.length + 1).padStart(3, '0')}`,
      subject,
      preview: body.slice(0, 90),
      body,
      sender: 'You',
      receivedDate: 'Just now',
      category,
      folder: 'Sent',
      isRead: true,
      priority: 'Normal'
    };

    this.messages.unshift(message);
    return { ...message };
  }

  getDashboardSummaries(): DashboardSummary[] {
    return [
      { label: 'Coverage', value: String(this.coveredMembers.length), description: 'Covered members', route: '/coverage' },
      { label: 'Claims', value: String(this.claims.length), description: 'View claim history', route: '/claims' },
      { label: 'Authorizations', value: String(this.authorizations.length), description: 'Track care requests', route: '/authorizations' },
      { label: 'Find care', value: String(this.providers.filter((provider) => provider.networkStatus === 'In network').length), description: 'In-network options', route: '/find-care' },
      { label: 'Appointments', value: String(this.appointments.filter((appointment) => appointment.status === 'Upcoming').length), description: 'Upcoming visits', route: '/appointments' },
      { label: 'Medications', value: String(this.medications.filter((medication) => medication.status !== 'Inactive').length), description: 'Active prescriptions', route: '/medications' },
      { label: 'Messages', value: String(this.getUnreadMessageCount()), description: 'Unread messages', route: '/messages' },
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
