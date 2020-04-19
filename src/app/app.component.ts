import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public in: string
  public out: string

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe() {

    const str1: string = this.in;


    const str2: string = str1.replace(/\n/g, '');
    const str3: string = str2.replace(/ /g, '');
    const str4: string = JSON.stringify( { body: str3 } );

    this.out = str4;
  }

}
