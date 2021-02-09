import { MaskModule } from './modules/mask.module';
import { FooterComponent } from './pages/main/footer/footer.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { CadastroBeneficiarioComponent } from './pages/views/cadastro-beneficiario/cadastro-beneficiario.component';
import { MaterialModule } from './modules/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    CadastroBeneficiarioComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    MaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
