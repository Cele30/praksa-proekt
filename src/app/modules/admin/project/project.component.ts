import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ProjectComponent {
    constructor() { console.log('da'); }
}
