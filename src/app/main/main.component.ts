import { Component } from '@angular/core';
import { MarketDemandComponent } from './market-demand/market-demand.component';
import { DataNarrationsComponent } from './data-narrations/data-narrations.component';
import { PriceTrendComponent } from "./price-trend/price-trend.component";
import { ConclusionComponent } from "./conclusion/conclusion.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MarketDemandComponent, DataNarrationsComponent, PriceTrendComponent, ConclusionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
