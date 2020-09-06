import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ContainerComponent } from './container/container.component';
import { from } from 'rxjs';
import { LendComponent } from './lend/lend.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    ContainerComponent,
    LendComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
