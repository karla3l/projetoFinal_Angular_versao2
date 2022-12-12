import { Componente003Component } from './componente003/componente003.component';
import { Componente002Component } from './componente002/componente002.component';
import { Componente004Component } from "./componente004/componente004.component";
import { Componente005Component } from "./componente005/componente005.component";
import { Componente006Component } from "./componente006/componente006.component";


import { AlunosComponent } from './alunos/alunos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog'
import {DialogDataExampleComponent, DialogDataExampleDialogComponent} from './dialog/dialog.component';
import { NotaModule } from './nota.module';
//import { NotaModule } from './nota';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DashbordComponent} from "./dashboard/dashboard.component";
import { MenulateralComponent } from "./menulateral/menulateral.component";
//import { MenulateralComponent} from "./menulateralmenulateral.component";
import { Componente001Component } from "./componente001/componente001.component";
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    declarations: [
        AppComponent,
        AlunosComponent,
        DialogDataExampleComponent,
        DialogDataExampleDialogComponent,
        DashbordComponent,
        MenulateralComponent,
        Componente001Component,
        Componente002Component,
        Componente003Component,
        Componente004Component,
        Componente005Component,
        Componente006Component,


    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatTableModule,
        MatDialogModule,
        NotaModule,
        MatToolbarModule,
        MatButtonModule,
        HttpClientModule,
        MatGridListModule,

    ]
})
export class AppModule { }
