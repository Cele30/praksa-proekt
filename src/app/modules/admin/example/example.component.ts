import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent {
    taskComplete = false;
    /**
     * Constructor
     */
    constructor() {
    }

    toggleCompleted(): void {
        this.taskComplete = !this.taskComplete;
    }
}
