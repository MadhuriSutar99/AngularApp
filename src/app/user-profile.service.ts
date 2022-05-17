import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor() {

  }

  getAddress() {

    let Addr =
    {
      area: "Baner",
      pincode: 112233,
      locality: "Tower"
    }
    return Addr;

  }

  getCompanyName() {
    return "T-Systems";
  }
}
