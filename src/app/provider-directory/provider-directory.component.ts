import { Component } from '@angular/core';
import { ClientStorageService } from '../shared/client-storage.service';
import { PortalDataService } from '../shared/portal-data.service';
import { DirectoryProvider } from '../shared/portal.models';

@Component({
  standalone: false,
  selector: 'app-provider-directory',
  templateUrl: './provider-directory.component.html',
  styleUrl: './provider-directory.component.scss'
})
export class ProviderDirectoryComponent {
  private readonly favoritesKey = 'memberPortal.directory.favoriteProviders';
  readonly providers = this.portalData.getProviders();
  readonly specialties = ['All specialties', ...new Set(this.providers.map((provider) => provider.specialty))];

  searchTerm = '';
  selectedSpecialty = 'All specialties';
  inNetworkOnly = true;
  acceptingOnly = false;
  telehealthOnly = false;
  favoritesOnly = false;
  favoriteIds = this.storage.get<string[]>(this.favoritesKey, []);

  constructor(
    private readonly portalData: PortalDataService,
    private readonly storage: ClientStorageService
  ) {}

  get filteredProviders(): DirectoryProvider[] {
    const query = this.searchTerm.trim().toLowerCase();
    return this.providers
      .filter((provider) => {
        const matchesSearch = !query || [provider.name, provider.specialty, provider.location.cityStateZip, ...provider.languages]
          .some((value) => value.toLowerCase().includes(query));
        const matchesSpecialty = this.selectedSpecialty === 'All specialties' || provider.specialty === this.selectedSpecialty;
        return matchesSearch
          && matchesSpecialty
          && (!this.inNetworkOnly || provider.networkStatus === 'In network')
          && (!this.acceptingOnly || provider.acceptingNewPatients)
          && (!this.telehealthOnly || provider.telehealthAvailable)
          && (!this.favoritesOnly || this.isFavorite(provider.id));
      })
      .sort((first, second) => first.location.distanceMiles - second.location.distanceMiles);
  }

  isFavorite(providerId: string): boolean {
    return this.favoriteIds.includes(providerId);
  }

  toggleFavorite(providerId: string): void {
    this.favoriteIds = this.isFavorite(providerId)
      ? this.favoriteIds.filter((id) => id !== providerId)
      : [...this.favoriteIds, providerId];
    this.storage.set(this.favoritesKey, this.favoriteIds);
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedSpecialty = 'All specialties';
    this.inNetworkOnly = true;
    this.acceptingOnly = false;
    this.telehealthOnly = false;
    this.favoritesOnly = false;
  }
}
