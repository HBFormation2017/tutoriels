import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateCharacterComponent } from '../create-character/create-character.component';


@NgModule({
    declarations: [
        CreateCharacterComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: '', component: CreateCharacterComponent }
        ])
    ]
})

export class CreateCharacterModule {}