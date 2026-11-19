import { Pipe, PipeTransform } from '@angular/core';
import { Medication } from '../shared/portal.models';
@Pipe({ name: 'medicationRenewalCount', standalone: false })
export class MedicationRenewalCountPipe implements PipeTransform { transform(medications: Medication[]): number { return medications.filter((item) => item.status === 'Renewal needed').length; } }
