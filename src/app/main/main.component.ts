import { Component } from '@angular/core';
import { MarketDemandComponent } from './market-demand/market-demand.component';
import { DataNarrationsComponent } from './data-narrations/data-narrations.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MarketDemandComponent, DataNarrationsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
