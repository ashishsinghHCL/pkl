import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menu:string[] = [
    'Haryana Steeles',
    'Bengaluru bulls',
    'UP Yodha',
    'Tamil Thalivas',
    'Dabang Delhi',
    'Puneri paltan',
    'U Mumba',
  ];
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.ds.getData('teams').subscribe( (data:any) => {
      // console.log(data);
      this.menu = data;
    })
  }

}
