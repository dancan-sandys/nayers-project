import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donating',
  templateUrl: './donating.component.html',
  styleUrls: ['./donating.component.scss']
})
export class DonatingComponent implements OnInit {

  amount = "Ksh. 100000";

  constructor() { }

  ngOnInit(): void {
  }

}
