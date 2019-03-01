import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/❤️_180716_0013.jpg';
  userName: string = 'Kirkpol Tawonkangwal';
  userPost: string = 'Programmer, Develop';
  
  constructor() { }

  ngOnInit() {
  }

}
