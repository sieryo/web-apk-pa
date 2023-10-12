"use client";

import React from "react";

const AnggaranDasarPage = () => {
  const datas = [
    {
      pasal: 1,
      title: "nama dan kedudukan",
      paragraf: [
        "Persatuan dan kelompok yang dimaksud adalah wadah perkumpulan yang selanjutnya disebut PUNGUAN dan etnis Batak marga PANGGABEAN (Lumbanratus, Simorangkir, Lumbansianggian) yang berdomisili dan bertempat tinggal di kota Bandung, Cimahi dan sekitarnya, yang selanjutnya disebut Punguan Si Raja Panggabean (Lumbanratus, Simorangkir, Lumansianggian) Boru Bere Ibebere Bandung Cimahi dan sekitarnya. Selanjutnya dapat disingkat dan disebut dengan <b>PSP-BBI.</b>",
        "PUNGUAN berkedudukan di kota BANDUNG, Jawa Barat.",
      ],
    },
    {
      pasal: 2,
      title: "landasan, azas, tujuan",
      paragraf: [
        "Punguan PSP-BBI ini berlandaskan Pancasila dengan niai-nilai luhur yang terkandung di dalamnya;",
        "Punguan PSP-BBI didirikan atas dasar tolong-menolong secara kekeluargaan di dalam azas DALIHAN NA TOLU dengan menjungjung kasih dan solidaritas antar sesama serta persatuan dan kesatuan diantara keluarga menurut adat istiadat budaya etnis Batak dan tidak mengandung unsur politik;",
        "Punguan PSP-BBI bertujuan demi terwujudnya suatu ikatan yang tidak dapat dipisahkan diantara keluarga besar marga PANGGABEAN (Lumbanratus, Simorangkir, Lumbansianggian) dalam mengemban persatuan dan persaudaraan yang kuat, kokoh, beriman, berbudaya, damai dan sejahtera.",
      ],
    },
    {
      pasal: 3,
      title: "kegiatan",
      paragraf: [
        "Kegiatan Punguan PSP-BBI adalah untuk mencapai suatu tujuan bersama yang meliputi kegiatan sosisal budaya, adat istiadat, keagamaan, mengembangkan nilai-nilai budaya etnis Batak sesuai perkembangan zaman;",
        "Untuk menunjang kegiatan seperti dimaksud ayat (1) Pasal ini, maka Punguan PSP-BBI juga melakukan pengumpulan dana para anggota.",
      ],
    },

    {
      pasal: 4,
      title: "keanggotaan",
      paragraf: [
        "Anggota Punguan PSP-BBI ialah semua keturunan (pomparan) SI RAJA PANGGABEAN (Lumbanratus, Simorangkir, Lumbansianggian) Boru Bere  Ibebere yang telah maupun yang belum berumah tangga (berkeluarga) dan telah terdaftar serta berdomisili/bertempat tinggal di wilayah Bandung Raya (Bandung, Cimahi dan sekitarnya).",
        "Anggota dari parsadaan/pertangiangan na marama ama, secara otomatis adalah anggota dari Punguan PSP-BBI",
      ],
    },
    {
      pasal: 5,
      title: "struktur organisasi dan kepengurusan",
      paragraf: [
        "Demi tercapainya efisiensi dan efektifitas kerja dalam pelaksanaan tugas dan pelayanan kepada anggota, struktur organisasi disusun satu tingkat dengan ujung tombak adalah parsadaan/partangiangan na marama-ama (Lumbanratus, Simorangkir, Lumbansianggian);",
        `Adapun susunan pengurus Punguan PSP-BBI dan selanjutnya disebut PENGURUS HARIAN, terdiri dari :
        
          <ul class="flex flex-col gap-2 mt-3 text-justify">
            <li>(a) Ketua Umum : 1 (satu) orang </li>
            <li>(b) Ketua – I : 1 (satu) orang</li>

            <li>(c) Ketua – II : 1 (satu) orang</li>
            <li>(d) Ketua – III : 1 (satu) orang</li>
            <li>(e) Sekretaris : 1 (satu) orang</li>
            <li>(f) Bendahara : 1 (satu) orang</li>
          </ul>
       
      `,
        "Untuk kelancaran komunikasi dan pelaksanaan program kerja, maka pengurus harian diberi wewenang menunjuk dan menetapkan koordinator yang dianggap perlu, dimana pembagian, komposisi dan tugas-tugasnya akan ditetapkan oleh pengurus harian dalam suatu keputusan dan merupakan bagian yang tidak terpisahkan dengan Anggaran Dasar ini;",
        "Ketua Umum Punguan PSP-BBI, dipilih dan diatur secara bergantian diantara na marama ama (Lumbanratus, Simorangkir, Lumbansianggian);",
        "Masa kerja Pengurus Harian, seperti dimaksud ayat (2) sampai dengan ayat (4) Pasal ini, adalah selama kurun waktu 3 (tiga) tahun, terhitung mulai saat dilantik pada rapat Umum Anggota yang bersamaan pada saat Pesta Partangiangan PUNGUAN PSP-BBI (lihat ayat (1) Pasal 8 Anggaran Rumah Tangga);",
        "6 (enam) bulan sebelum berakhir masa kerja Pengurus Harian, seperti dimaksud ayat (5) Pasal ini maka Pengurus Harian sudah harus menunjuk Ketua Panitia Pesta berikutnya, melalui Surat Keputusan yang ditandatangani oleh Ketua Umum dan Sekretaris.",
      ],
    },
    {
      pasal: 6,
      title: "penasehat",
      paragraf: [
        "Penasehat Punguan PSP-BBI terpilih dari yang mewakili dongan tubu na marama ama yaitu Lumbanratus, Simorangkir, Lumbansianggian.",
        "Penasehat seperti dimaksud ayat (1) adalah mantan ketua umum yang sudah selesai masa jabatanya, ditambah dengan anggota Punguan PSP-BBI yang dituakan, dianggap cakap memahami pelaksanaan adat istiadat etnis Batak atau sosial  kemasyarakatan lainnya dengan baik.",
        "Penasehat yang dimaksud dalam ayat (2) disebut dewan penasehat ",
        "Pada saat pelaksanaan kegiatannya Dewan Penasehat memilih Ketua dan Anggota Dewan Penasehat.",
        "Masa kerja Dewan Penasehat adalah sama dengan masa kerja Pengurus Harian yaitu selama kurun waktu (3) tahun.",
      ],
    },
    {
      pasal: 7,
      title: "sumber keuangan",
      paragraf: [
        `Sumber keuangan PUNGUAN diperoleh dari : 
        <ul class="flex flex-col gap-2 mt-3 text-justify">
            <li>(a) Iuran bulanan/tahunan dari anggota </li>
            <li>(b) Hasil lelang pada saat pesta partangiangan</li>
            <li>(c) Sumbangan sukarela dan atau sumber-sumber lainnya yang diperoleh secara syah, tidak mengikat dan tidak melanggar peraturan/perundang-undangan yang berlaku. </li>
          </ul>
        `,
      ],
    },
    {
      pasal: 8,
      title: "rapat",
      paragraf: [
        `Rapat yang dapat dilaksanakan oleh PUNGUAN, ialah : 
          <ul class="flex flex-col gap-2 mt-3 text-justify">
            <li>(a) Rapat Umum Anggota </li>
            <li>(b) Rapat Pengurus Harian</li>
            <li>(c) Rapat Dewan Penasehat </li>
          </ul>
      `,
        "Rapat dimaksud ayat (1) Pasal ini adalah untuk kelancaran program kerja Punguan PSP-BBI dan setiap pelaksanaan rapat tersebut akan diatur lebih lanjut dalam Anggaran Rumah Tangga dimana Notulen Hasil Rapat harus terdokumentasi dengan baik.",
      ],
    },
    {
      pasal: 9,
      title: "perubahan anggaran dasar dan anggaran rumah tangga",
      paragraf: [
        "Perubahan Anggaran Dasar dan Anggaran Rumah Tangga hanya dapat dilakukan apabila dikehendaki oleh para anggota Punguan dan disetujui oleh Penasehat",
        "Perubahan dimaksud ayat (1) Pasal ini akan diputuskan dan disyahkan dalam Rapat Umum Anggota.",
      ],
    },
    {
      pasal: 10,
      title: "penutup",
      paragraf: [
        "Segala sesuatunya yang belum jelas diatur dalam Anggaran Dasar ini, akan diatur dalam Anggaran Rumah Tangga dan atau Keputusan Pengurus Harian;",
        "Segala Keputusan Pengurus Harian yang dimaksud pada ayat (1) Pasal ini harus terlebih dahulu dimusyawarahkandalah Rapat Pengurus Harian bersama Penasehat dan menjadi satu kesatuan yang tidak dapat dipisahkan dari Anggaran Dasar dan Anggaran Rumah Tangga.",
      ],
    },
  ];

  return (
    <div>
      <div>
        <div>
          <h1 className="uppercase block text-center font-bold text-2xl">
            Anggaran dasar
          </h1>
          <div className="pt-7">
            {datas.map((data) => (
              <div key={data.title}>
                <h3 className="capitalize font-bold pb-3 text-md text-center block">
                  Pasal {data.pasal}
                </h3>
                <div>
                  <h2 className="uppercase text-lg font-bold text-center block">
                    {data.title}
                  </h2>
                </div>
                <div>
                  {data.paragraf.map((para, index) => (
                    <div key={index} className="flex p-2 gap-2">
                      <div>{`${"(" + ++index + ")"}`}</div>
                      <div className="">
                        <div
                          className="text-justify"
                          dangerouslySetInnerHTML={{ __html: para }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnggaranDasarPage;
