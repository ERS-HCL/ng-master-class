import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DogService } from './dog.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [DogService]
})
export class DataServicesModule {}
