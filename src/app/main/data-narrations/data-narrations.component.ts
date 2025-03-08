import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { hasFlag } from 'country-flag-icons'
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIcon } from '@angular/material/icon';
import { ApexChart } from 'ng-apexcharts';

@Component({
  selector: 'app-data-narrations',
  standalone: true,
  imports: [MatTabsModule, NgApexchartsModule, MatIcon],
  templateUrl: './data-narrations.component.html',
  styleUrl: './data-narrations.component.css'
})

export class DataNarrationsComponent implements OnInit {
  //Condition Data
  countryConditions = [
    {
      countryCode: hasFlag('CN') === true,
      image: 'CN',
      country: 'Cina',
      condition: [
        'Masalah keuangan di sektor properti dan konstruksi serta sengketa perdagangan dengan AS menghambat pertumbuhan ekonomi.',
        'TAS memberlakukan tarif 10% pada impor China mulai 1 Februari 2025, dan China membalas dengan tarif pada barang AS.',
        'Kekhawatiran ketersediaan base oil Grup I, terutama bright stock, semakin menipis akibat penutupan refinery dan pemeliharaan.',
        'Pemeliharaan refinery Sinopec di Gaoqiao mulai Maret 2025 dapat memengaruhi pasokan domestik.'
      ]
    },
    {
      countryCode: hasFlag('ID') === true,
      image: 'ID',
      country: 'Indonesia',
      condition: [
        'Pemeliharaan refinery Grup I Pertamina di Cilacap mengurangi volume ekspor.',
        'Pemeliharaan ini memperketat pasokan base oil Grup I di Asia Tenggara.',
      ]
    },
    {
      countryCode: hasFlag('KR') === true,
      image: 'KR',
      country: 'Korea Selatan',
      condition: [
        'Pemeliharaan refinery GS Caltex di Yeosu mengurangi pasokan Grup II.',
        'Permintaan Grup III meningkat pasca-Tahun Baru Imlek.'
      ]
    },
    {
      countryCode: hasFlag('IN') === true,
      image: 'IN',
      country: 'India',
      condition: [
        'Harga impor base oil naik karena pasokan ketat dan permintaan meningkat.',
        'Pemeliharaan refinery domestik diperkirakan mengurangi ketersediaan base oil Grup I dan II.'
      ]
    },
    {
      countryCode: hasFlag('TH') === true,
      image: 'TH',
      country: 'Thailand',
      condition: [
        'Pemeliharaan refinery IRPC di Thailand pada Mei 2025 dapat bertepatan dengan peningkatan permintaan musiman.',
      ]
    },
    {
      countryCode: hasFlag('JP') === true,
      image: 'JP',
      country: 'Jepang',
      condition: [
        'Pasokan Grup I tetap ketat setelah penutupan refinery Idemitsu Kosan dan pemeliharaan di unit Cosmo Oil dan Eneos.',
      ]
    },
    {
      countryCode: hasFlag('SA') === true,
      image: 'SA',
      country: 'Arab Saudi',
      condition: [
        'Pemeliharaan refinery Luberef di Yanbu dijadwalkan pada kuartal kedua atau ketiga 2025.',
      ]
    },
    {
      countryCode: hasFlag('BH') === true,
      image: 'BH',
      country: 'Bahrain',
      condition: [
        'Pemeliharaan refinery Bapco di Sitra selama 45 hari mulai Maret 2025.',
      ]
    },
    {
      countryCode: hasFlag('SG') === true,
      image: 'SG',
      country: 'Singapore',
      condition: [
        'ExxonMobil akan meningkatkan kapasitas produksi Grup II melalui proyek Singapore Resid Upgrade, termasuk produk baru EHC340 Max dan EHC 120.',
      ]
    },
  ];

  //Chart Database
  public chartOptions: any;

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    this.chartOptions = {
      colors: ['#2E0CCA', '#A8CA0C'],
      series: [
        {
          name: 'Ex-Tank Singapore',
          data: [800, 1060, 1360, 860, 1090, 1040, 1070, 970],
        },
        {
          name: 'FOB Asia',
          data: [670, 910, 1210, 730, 965],
        },
      ],
      chart: {
        type: 'bar',
        height: 388,
        fontFamily: 'Poppins',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top'
          },
          borderRadius: 2.5,
          borderRadiusApplication: 'right',
          barHeight: '75%'
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -20,
        offsetY: -1,
        style: {
          fontSize: '12px',
          fontFamily: 'Poppins',
          colors: ['#FFF', '#000']
        }
      },
      xaxis: {
        categories: ['SN 150', 'SN 500', 'Brightstock', '150N', '500N', '4 cST', '6 cST', '8 cST'],
      },
      grid: {
        row: {
          colors: ['#C6D8FF', '#FFF',]
        },
        column: {
          colors: ['#FFF', '#C6D8FF',]
        }
      },
    }
  }
}

