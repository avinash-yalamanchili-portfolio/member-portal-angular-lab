# Care journey workflows

The appointments and medications features model connected member actions without calling production services or storing protected information.

## Appointment preparation

1. A member filters upcoming, completed, or cancelled visits.
2. The appointment detail displays the visit channel, location, confirmation code, and online check-in timing.
3. Preparation items can be completed independently and remain available after a refresh.
4. Attendance confirmation is stored locally so the interaction behaves like a real workflow during a demo.

## Prescription management

1. Household prescriptions can be filtered by member and lifecycle status.
2. Renewal warnings distinguish a prescription with zero refills from a standard refill.
3. Members can enable a refill reminder from the list without navigating away.
4. Eligible prescriptions accept a refill request and persist the submitted state locally.

All fixtures use clearly labeled synthetic identities and reference numbers. Browser storage contains only demo interaction state.
