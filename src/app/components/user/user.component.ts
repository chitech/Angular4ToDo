import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  favorite: any[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {

   }

  addFavorite(favorite) {
    this.favorite.unshift(favorite);
    return false;
  }

 deleteHobby(hobby) {
   for (let i =0; i < this.favorite.length; i++){
     if(this.favorite[i] == hobby){
       this.favorite.splice(i, 1);
     }
   }
 }

 toggleEdit() {
   this.isEdit = !this.isEdit; //if its true will set it to false and vice versa
 }
  ngOnInit() {
    this.name = "John Doe";
    this.age = 43;
    this.email = 'john@ada.com';
    this.address= {
      street: '20 Main st',
      city: 'Chicago',
      state: 'IL',
      zip: 606911
  }
  this.favorite = ['Riding Bike', 'Attending art events', 'star gazing'];

}
}

//Address Model can be placed in another file and imported for global usage
interface Address {
  street:string,
  city: string,
  state: string,
  zip: number
}

