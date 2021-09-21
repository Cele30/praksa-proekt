import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProjectComponent } from 'app/modules/admin/project/project.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTab, MatTabBody, MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatInputModule} from '@angular/material/input';



const exampleRoutes: Route[] = [
    {
        path: '',
        component: ProjectComponent
    }
];

@NgModule({
    declarations: [
        ProjectComponent
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MatIconModule,
        MatTabsModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatDividerModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatInputModule
    ]
})
export class ProjectModule {
}
