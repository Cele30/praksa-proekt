import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


const exampleRoutes: Route[] = [
    {
        path: '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent,
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule
    ]
})
export class ExampleModule {
}
