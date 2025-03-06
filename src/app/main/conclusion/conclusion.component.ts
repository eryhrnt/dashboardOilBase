import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-conclusion',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './conclusion.component.html',
  styleUrl: './conclusion.component.css'
})
export class ConclusionComponent implements OnInit {
  conclusionItem = [
    {
      conclusion: ['Keseimbangan pasokan dan permintaan base oil di Asia diperkirakan akan semakin ketat dalam beberapa bulan ke depan, dipicu oleh penutupan refinery permanen, program pemeliharaan, dan ketidakpastian geopolitik.',
        'Harga cenderung stabil hingga menguat, tetapi potensi pengetatan pasokan dapat memengaruhi dinamika harga di masa mendatang.',
        'Ekspansi kapasitas oleh ExxonMobil dan produsen lain mungkin akan membantu meredakan tekanan pasokan dalam jangka panjang.',
      ]
    }
  ];
  constructor() { }
  ngOnInit(): void {
  }
}
