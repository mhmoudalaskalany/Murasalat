import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage) {}

  storeObject(data: {}): any {
    for (const key of Object.keys(data)) {
      this.storage.set(key, data[key]);
    }
    return this.storage.ready();
  }

  getItem(name: string) {
    return from(this.storage.get(name));
  }

  getToken() {
    return from(this.storage.get('token'));
  }

  getUserId() {
    return from(this.storage.get('userId'));
  }

  setItem(key: string, value: string) {
    return from(this.storage.set(key, value));
  }

  getUserData() {
    return this.getItem('nameEn').pipe(
      mergeMap(nameEn => {
        return this.getItem('nameAr').pipe(map(nameAr => ({ nameEn, nameAr })));
      })
    );
  }

  clearAllData() {
    return from(this.storage.clear());
  }
}
