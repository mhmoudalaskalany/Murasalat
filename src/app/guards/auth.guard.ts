import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/core/storage/storage.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private storage: StorageService, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.storage.getToken().pipe(
      take(1),
      map(
        token => {
          if (token === null) {
            this.router.navigate(['/login']);
            return false;
          } else {
            return true;
          }
        },
        error => {
          this.router.navigate(['/login']);
          return false;
        }
      )
    );
    // .subscribe(token => {
    //     if (token === null) {
    //       this.router.navigate(['/login']);
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }, error => {
    //     this.router.navigate(['/login']);
    //     return false;
    //   });
    // .then(result => {
    //   if (result == null) {
    //     this.router.navigate(['/login']);
    //     return false;
    //   } else {
    //     return true;
    //   }
    // })
    // .catch(() => {
    //   this.router.navigate(['/login']);
    //   return false;
    // });
  }
}
