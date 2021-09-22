import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'project2',
    templateUrl: './project2.component.html',
    encapsulation: ViewEncapsulation.None
})

export class Project2Component {
    users = ['Praksa', 'Test', 'John'];
    files = [
        {
          name: 'webdesign.pdf',
          updated: new Date('2/20/16'),
        },
        {
          name: 'newlogo.png',
          updated: new Date('1/18/16'),
        },
      ];
    constructor() { }
}
