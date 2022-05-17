import { Injectable } from '@angular/core';
import { UserProfileService } from './user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class BaseConfigService {

  constructor(private userserve: UserProfileService) {
    let user = this.userserve.getAddress();
    console.log(user);

  }
  url = "www.welcome.com";
}
