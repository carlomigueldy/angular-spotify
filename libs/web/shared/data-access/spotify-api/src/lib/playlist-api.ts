import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '@angular-spotify/web/shared/app-config';

@Injectable({ providedIn: 'root' })
export class PlaylistApiService {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) {}

  getAll() {
    return this.http.get<SpotifyApi.ListOfCurrentUsersPlaylistsResponse>(
      `${this.appConfig.baseURL}/me/playlists`
    );
  }

  getById(playlistId: string) {
    if (!playlistId) {
      throw new Error('Playlist Id is required');
    }
    return this.http.get<SpotifyApi.PlaylistObjectFull>(
      `${this.appConfig.baseURL}/me/playlist/${playlistId}`
    );
  }
}
