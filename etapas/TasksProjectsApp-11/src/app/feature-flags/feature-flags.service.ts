import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  config: any = null;
  configUrl = `${API_URL}/features/flags`;

  constructor(private _http: HttpClient) {}

  loadConfig() {
    return this._http.get<any>(this.configUrl).pipe(
      tap((data) => {
        this.config = data;
        console.log('FeatureFlagsService loadConfig:',this.config);        
      })
    );
  }

  isFeatureEnabled(key: string) {
    console.log('FeatureFlagsService isFeatureEnabled:',this.config);        

    if (this.config && this.config[key]) {
      return this.config[key];
    }
    return false;
  }
}
