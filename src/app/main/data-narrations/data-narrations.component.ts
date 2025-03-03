import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { hasFlag } from 'country-flag-icons'

@Component({
  selector: 'app-data-narrations',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './data-narrations.component.html',
  styleUrl: './data-narrations.component.css'
})
export class DataNarrationsComponent {
  countryConditions = [
    {
      countryCode: hasFlag('CN') === true,
      image: 'CN',
      country: 'China',
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
  ];
}
