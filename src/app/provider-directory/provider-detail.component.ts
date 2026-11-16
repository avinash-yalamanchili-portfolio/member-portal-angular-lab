import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientStorageService } from '../shared/client-storage.service';
import { PortalDataService } from '../shared/portal-data.service';
import { DirectoryProvider } from '../shared/portal.models';

@Component({
  standalone: false,
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrl: './provider-detail.component.scss'
})
export class ProviderDetailComponent {
  private readonly favoritesKey = 'memberPortal.directory.favoriteProviders';
  readonly provider: DirectoryProvider | undefined;
  favoriteIds: string[];

  constructor(route: ActivatedRoute, portalData: PortalDataService, private readonly storage: ClientStorageService) {
    this.provider = portalData.getProviderById(route.snapshot.paramMap.get('id') ?? '');
    this.favoriteIds = storage.get<string[]>(this.favoritesKey, []);
  }

  get isFavorite(): boolean {
    return !!this.provider && this.favoriteIds.includes(this.provider.id);
  }

  toggleFavorite(): void {
    if (!this.provider) return;
    this.favoriteIds = this.isFavorite
      ? this.favoriteIds.filter((id) => id !== this.provider?.id)
      : [...this.favoriteIds, this.provider.id];
    this.storage.set(this.favoritesKey, this.favoriteIds);
  }
}
