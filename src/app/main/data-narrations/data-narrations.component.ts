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
        'Masalah Keuangan Internal: Isu keuangan serius di sektor properti dan konstruksi, serta sengketa perdagangan dengan AS, berdampak signifikan pada prospek pertumbuhan ekonomi dan hubungan perdagangan.',
        'Tarif Impor: Presiden AS memberlakukan tarif 10% pada semua impor dari China mulai 1 Februari 2025, dan China membalas dengan tarif pada barang-barang AS, termasuk batu bara, LNG, minyak mentah, dan alat pertanian.',
        'Ketersediaan Grup I: Kekhawatiran akan ketersediaan base oil Grup I, terutama bright stock, yang sulit digantikan dan pasokannya semakin menipis akibat penutupan refinery dan program pemeliharaan.',
        'Pemeliharaan Refinery Sinopec: Sinopec berencana melakukan pemeliharaan selama dua bulan di Refinery Gaoqiao (Grup I dan II) mulai Maret 2025, yang dapat memengaruhi pasokan domestik.'
      ]
    },
    {
      countryCode: hasFlag('ID') === true,
      image: 'ID',
      country: 'Indonesia',
      condition: [
        'Pemeliharaan Refinery Pertamina: Refinery Grup I milik Pertamina di Cilacap masih menjalani pemeliharaan dari pertengahan Januari hingga akhir Februari 2025, yang kemudian mengurangi volume ekspor yang berasal dari Indonesia.',
        'Ketatnya Pasokan: Pemeliharaan ini kemudian semakin memperketat pasokan base oil Grup I di kawasan Asia Tenggara.',
      ]
    },
    {
      countryCode: hasFlag('KR') === true,
      image: 'KR',
      country: 'Korea Selatan',
      condition: [
        'Pemeliharaan Refinery GS Caltex: GS Caltex memulai pemeliharaan refinery Grup II/III di Yeosu pada akhir Februari, yang diperkirakan akan mengurangi pasokan Grup II dari Korea Selatan.',
        'Permintaan Grup III: Permintaan Grup III meningkat setelah liburan Tahun Baru Imlek, dengan pembeli kembali ke pasar untuk kembali mengisi stok.'
      ]
    },
    {
      countryCode: hasFlag('IN') === true,
      image: 'IN',
      country: 'India',
      condition: [
        'Kenaikan Harga Impor: Harga impor base oil di India meningkat karena pasokan yang ketat dan peningkatan permintaan. Impor Grup I SN150 naik $5/ton, sementara bright stock naik $10-15/ton.',
        'Pemeliharaan Refinery Domestik: Pemeliharaan di dua refinery domestik dalam beberapa minggu ke depan diperkirakan akan mengurangi ketersediaan base oil Grup I dan II.'
      ]
    },
    {
      countryCode: hasFlag('TH') === true,
      image: 'TH',
      country: 'Thailand',
      condition: [
        'Pemeliharaan Refinery IRPC: Refinery Grup I milik IRPC di Thailand dijadwalkan melakukan pemeliharaan selama 10 hari pada Mei 2025, yang mungkin bertepatan dengan peningkatan permintaan musiman.',
      ]
    },
    {
      countryCode: hasFlag('JP') === true,
      image: 'JP',
      country: 'Jepang',
      condition: [
        'Kondisi Pasokan Grup I: Pasokan Grup I tetap ketat setelah penutupan refinery milik Idemitsu Kosan di Chiba akibat kebakaran pada pertengahan 2024. Pemeliharaan di unit dari Cosmo Oil dan Eneos juga mempengaruhi pasokan. Semua penutupan ini menyusul penutupan permanen dua pabrik Eneos Group I selama tiga tahun terakhir.',
      ]
    },
    {
      countryCode: hasFlag('SA') === true,
      image: 'SA',
      country: 'Arab Saudi',
      condition: [
        'Pemeliharaan Refinery Luberef: Luberef akan menutup refinery Grup I dan II di Yanbu untuk pemeliharaan pada kuartal kedua atau ketiga 2025.',
      ]
    },
    {
      countryCode: hasFlag('BH') === true,
      image: 'BH',
      country: 'Bahrain',
      condition: [
        'Pemeliharaan Refinery Bapco: Bapco berencana melakukan pemeliharaan selama 45 hari di fasilitas Grup III di Sitra mulai Maret 2025.',
      ]
    },
    {
      countryCode: hasFlag('SG') === true,
      image: 'SG',
      country: 'Singapore',
      condition: [
        'ExxonMobil berencana menambah kapasitas produksi Grup II melalui proyek Singapore Resid Upgrade. Perusahaan ini akan memproduksi lebih dari satu juta ton per tahun base stock performa tinggi Grup II, termasuk produk baru EHC340 Max (pengganti bright stock dalam kategori Grup II). Proyek ini juga akan memperkenalkan produk EHC 120 ke pasar Asia Pasifik.',
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
      colors: ['#72195A', '#F7BF71'],
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
        height: 500,
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
        offsetY: -2,
        style: {
          fontSize: '16px',
          fontFamily: 'Poppins',
          colors: ['#FFF', '#4C1036']
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

