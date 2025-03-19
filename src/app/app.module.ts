import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEnZA from '@angular/common/locales/en-ZA';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './productPage/productPage.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';

// Register the locale data
registerLocaleData(localeEnZA);

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductPageComponent,
    EditProductComponent,
    ReactiveFormsModule,
    AddProductComponent
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-ZA' }, // Set the locale ID
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'ZAR' } // Set the default currency code
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
