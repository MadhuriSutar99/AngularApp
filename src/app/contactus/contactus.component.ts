import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
myapidata:any;
  constructor(private contactus:HttpClient)
   {
   contactus.get("https://reqres.in/api/users?page=2") 
   .subscribe(
     (mydata)=>this.myapidata=mydata
   )
  }

  ngOnInit(): void {
  }

}
