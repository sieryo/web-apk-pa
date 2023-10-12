"use client";

import React from "react";

const AnggaranRumahTanggaPage = () => {
  const datas = [
    {
      pasal: 1,
      title: "kegiatan",
      paragraf: [
        "Melaksanakan kegiatan sosial dengan tata krama adat dan budaya etnis Batak guna  memenuhi kebutuhan atau permintaan anggota;",
        "Mewujudkan persaudaraan yang kokoh dan erat diantara seluruh anggota dan keluarga untuk saling membantu daan tolong menolong baik dalam sukacita mauun dukacita;",
        "Melestarikan adat-istiadat dan nilai budaya etnis Batak sesuai ddengan perkembangan lingkungan, zaman dan sesuai pula dengan kebudayaan nasional;",
        "Melakukan kegiatan sosial dengan mengumpulkan dana, berupa iuran anggota, sumbangan sukarela, lelang dan sumber-sumber lainnya;",
        "Melakukan kegiatan keagamaan yang diakui oleh Pemerintahan Republik Indonesia;",
        "Melaksanakan pertemuan dan arisan keluarga (PUNGUAN, na marama-ama, sektor, wilayah) termasuk didalamnya arisan Namar sahuta Sian Bona Pasogit;",
        "Melakukan permbinaan bagi generasi muda (naposobulung ni PUNGUAN), yang berkaitan dengan adat istiadat etnis Batak secara umum, khususnya dibidang informasi ketenagakerjaan;",
        "Semua kegitaan seperti dimaksud ayat (6)  Pasal ini, tidak menyimpang dari Anggaran Dasar",
      ],
    },
    {
      pasal: 2,
      title: "keanggotaan",
      paragraf: [
        "Anggota biasa	: Semua anggota keluarga marga PANGGABEAN (Lumbanratus, Simorangkir, Lumbansianggian) termasuk didalamnya Boru – Bere – Ibebere maupun kaum muda-mudi (Naposobulung) yang telah terdaftar dan telah memenuhi kewajibannya;",
        "Anggota kehormatan 	: Selain marga (pomparan) PANGGABEAN yang dianggap telah berjasa dan memberikan kontribusi kepada PUNGUAN yang pengankatannya dilakukan oleh Penasehat atas saran Pengurus Harian; dimana anggota kehormatan mendapatkan layanan kepada anggota marga (pomparan) PANGGABEAN;",
        "Pendaftaran anggota seperti dimaksud pada ayat (1) dan ayat (2) Pasal ini dapat dilakukan dengan system 2 (dua) arah, pengurus (PUNGUAN maupun na marama-ama) mendatangi anggota baru atau sebaliknya;",
        "Keanggotaan akan berakhir karena atas permintaan sendiri atau pindahan dari wilayah Punguan atau menunggal dunia.",
      ],
    },
    {
      pasal: 3,
      title: "kewajiban anggota",
      paragraf: [
        "Mengindahkan dan melaksanakan semua ketentuan dan keputusan yang berlaku dalam PUNGUAN;",
        "Membayar dan memenuhi kewajiban berupa iuran anggota yang besarnya akan ditentukan dengan Keputusan Pengurus Harian;",
        "Membayar tok-tok ripe dan sumbangan lainnya, bilamana PUNGUAN akan melakukan sesuatu kegiatan (contoh PESTA PERTANGIANGAN, PESTA NATAL);",
        "Berupaya dan selalu berusaha untuk menghandiri serta selalu berbartisipasi dalan setiap kegiatan PUNGUAN;",
        "Melaporkan kepada Pengurus apabila pindah alamat (dalam maupun luar kota) maupun kejadian dukacita atau sukacita.",
      ],
    },

    {
      pasal: 4,
      title: "hak hak anggota",
      paragraf: [
        "Anggota yang sakit, opname dirumah sakit Bandung, Cimahi; mendapat layanan kunjungan dari Pengurus Harian maupun dari parsadaan na marama-ama;",
        "Anggota yang mendapat musibah (bencana alam, kebakaran) akan mendapat layanan dukungan do’a dan kunjungan dari PUNGUAN;",
        `Anggota yang mendapat dukacita atau meninggal dunia (anggota, anak anggota, tanggungan, orang tua), PUNGUAN wajib melaksanakan : 
          <ul>
            <li>(a)	Kunjungan dan pangarapotan atau martonggo raja; </li>
            <li>(b) Bantuan uang duka;</li>

            <li>(c) Take and lijst (inteken lijst) yang dikoordinir oleh parsadaan na marama-ama;</li>
            <li>(d) Pangapulion atau mamanghulingi;</li>
          </ul>
        `,
        `Sukacita (mangain, mangadati, pesta perkawinan)
          <ul class="flex flex-col gap-2 mt-3 text-justify">
            <li>(a) Anggota memberitahukannya kepada PUNGUAN. </li>
            <li>(b) PUNGUAN wajib memberi bantuan pemikiran tenaga untuk persiapan dan pelaksanaannya (adat na hombar tu ulaon i).</li>
            <li>(c) Undangan pangolihon anak (PANGGABEAN), PUNGUAN menerima udangan tanpa isi amplop, PUNGUAN bersama anggota yang diundang dan hadir memberi tumpak kepada hasuhuton.</li>
            <li>(d)	Undangan pamuli boru (PANGGABEAN), PUNGUAN menerima undangan dengan isi amplop, PUNGUAN memberikan 1 (satu) lembar ulos herbang kepada pengantin.</li>
            <li>(e) Undangan pangolihon anak atau pamulihon boru, dari (BORU BERE IBEBERE), PUNGUAN menerima undangan dengan isi amplop, PUNGUAN memberikan 1 (satu) lembar ulos herbang kepada pengantin.</li>
          </ul>
        `,
        "Apabila hasuhuton (PANGGABEAN) yang berasal dari luar wilayah PUNGUAN akan melaksanakan kegiatan atau acara perkawinan (pangolihon anak atau pamuli boru) di wilayah PUNGUAN, maka hasuhuton wajib melaksanakan seperti yang tertera pada ayat (4) Pasal ini serta diharapkan memberi ucapan terimakasih kepada PUNGUAN dan parsadaan na marama-ama; ",
        "Bentuk dan besar-berasan seperti dimaksud pada ayat (1) sampai ayat (4) Pasal ini, akan ditetapkan dan ditentukan dalam Surat Keputusan Pengurus Harian.",
      ],
    },
    {
      pasal: 5,
      title: "pemilihan dan pelantikan pengurus",
      paragraf: [
        `Kriteria Ketua Umum : 
          <ul>
            <li>(a) Adalah anggota PUNGUAN yang telah menjadi anggota PUNGUAN untuk minimal selama kurun waktu 3 (tiga) tahun berturut-turut tanpa terputus </li>
            <li>(b) Aktif dan dinilai telah berkontribusi kepada PUNGUAN;</li>
            <li>(c) Cakap, loyal kepada PUNGUAN, mempunyai pengetahuan yang cukup tentang adat-istiadat atau budaya etnis Batak serta dianggap telah pantas untuk menjadi Ketua Umum PUNGUAN;</li>
            <li>(d)	Mendapat dukungan dari anggota PUNGUAN;</li>
          </ul>
        `,
        "Apabila hahadoli atau anggidoli belum bersedia atau belum memiliki calon untuk menjadi Ketua Umum pada periode yang telah ditentukan, maka mekanismenya dibahas bersama antara Pengurus Harian dengan penasehat untuk selanjutnya bertindak sebagai formatur dan sekaligus menunjuk atau menetapkan personal sebagai Ketua Umum;",
        `Pelantikan Pengurus Harian (baru), dilaksanakan pada Pesta Partangiangan PUNGUAN yang sekaligus merupakat Rapat Umum Anggota, oleh Penasehat Punguan, dengaan diawali terlebih dahulu:

        <ul class="flex flex-col gap-2 mt-3 text-justify">
        <li>(a)	Serah terima dari Pengurus Harian yang lama kepada Pengurus Harian yang baru</li>
        <li>(b)	Menyatakan masa kepengurusan Pengurus Harian yang lama telah berakhir.</li>
        </ul>
        `,
      ],
    },
    {
      pasal: 6,
      title: "kewajiban pengurus",
      paragraf: [
        "Pengurus Harian selalu dan senantiasa memperhatikan kelangsungan PUNGUAN, memelihara/menjaga kekompakan dan keharmonisan kerja antara sesama pengurus;",
        "Memperhatikan kepentingan anggota PUNGUA, memberikan bantuan atau sumbangan tenaga, pikiran, moril maupun materil sesuai dengan Anggaran Dasar dan Anggaran Rumah Tangga;",
        "Mempertanggungjawabkan pelaksanaan tugas kepada Penasehat minimal 1 (satu) kali dalam 1 (satu) tahun; ",
        "Menerima saran-saran dan masukan lainnya untuk kepentingan kelancaran tugas Pengurus;",
        "Melaksanakan penagihan dan atau pengumpulan uang dari anggota (iuran, sisa kewajiban, tok-tok ripe, lelang);",
        `Melaksanakan “take and lijst” (inteken lijst) kepada anggota PUNGUAN, apabila keuangan PUNGUAN dalam kondisi “sedang sakit” dengan terlebih dahulu mendapat persetujuan dari PENASEHAT melalui Rapat Penasehat (lihat ayat (3) Pasal 8 Anggaran Rumah Tangga);`,
        `Mencatat setiap transaksi keuangan dengan baik yang disertai dengan bukti-bukti yang syah dan dapat dipertanggungjawabkan;`,
        `Menyampaikan laporan pertangungjawaban secara tertulis (laporan kegiatan dan keuangan) kepada anggota, sesaat menjelang berakhirnya masa kepengurusan.`,
      ],
    },
    {
      pasal: 7,
      title: "hak hak pengurus",
      paragraf: [
        `Pengurus Harian Berhak menerima jambar (harta atau ulos atau hepeng) pada atau dari suatu kegiatan adat;`,
        `“Menegor” anggota yang lalai melunasi kewajibannya kepada PUNGUAN;`,
        `Mengusulkan pemberhentian keanggotaan kepada Penasehat, apabila ada anggota PUNGUAN yang bertindak laku kurang manusiawi kepada sesama anggota PUNGUAN yag dapat dianggap telah merugikan nama baik PUNGUAN (pengecualian dari ayat (4) Pasal 2 Anggaran Rumah Tangga ini).`,
      ],
    },
    {
      pasal: 8,
      title: "rapat rapat",
      paragraf: [
        `Rapat Umum Anggota merupakan perwujudan kedaulatan anggta dan adalah merupakan rapat tertinggi dari PUNGUAN. Rapat ini dilaaksanakan 1 (satu) kali dalam kurun waktu 3 (tiga) tahun yaitu pada saat Pesta Partangiangan PUNGUAN;`,
        `Rapat Pengurus Harian, ialah rapat yang diselenggarakan secara internal oleh Pengurus Harian, diadakan minimal 1 (satu) kali dalam 6 (enam) bulan;`,
        `Rapat Penasehat, adalah rapat pertemuan yang diadakan oleh Penasehat bersama wakil (Boru atau Bere atau Ibebere) seperti dimaksud ayat (3) Pasal 6 Anggaran dasar. Sesuai dengan fungsinya, rapat Penasehat dilakukan 1 (satu) kali dalam 1 (satu) tahun dengan atau tanpa Pengurus Harian. Dalam keadaan tertentu dapat dilakukan sesuai dengan urgensinya;`,
        `Rapat Pleno, ialah rapat penjelasan dan pertanggungjawaban suatu panitia (missalnya Panitia Pesta Partangiangan) yang dihadiri oleh Pengurus Harian Penasehat dan wakil dari parsadaan na marama-ama.`,
      ],
    },
    {
      pasal: 9,
      title: "kekayaan punguan",
      paragraf: [
        `Harta benda PUNGUAN, terdiri dari : 
        <ul class="flex flex-col gap-2 mt-3 text-justify">
        <li>(a)	Barang-barang inventaris PUNGUAN;</li>
        <li>(b) Dokumen-dokumen lainnya yang dianggap punya nilai;</li>
        <li>(c) Jambar hepeng untuk PUNGUAN yang diterima pada atau dari suatu kegiatan adat (termasuk didalamnya ucapan terimakasih, seperti yang tercantum pada ayat (5) Pasal 4 Anggaran Rumah Tangga ini);</li>
        <li>(d) Khusus ulos herbang yang diterima PUNGUAN pada atau dari suatu acara adat, maka ulos herbang tersebut menjadi millik si penerima (hasahatan ni ulos herbang)</li>
        </ul>
        `,
        `Uang yang menjadi kekayaan PUNGUAN adalah yang bersumber dari : 
        <ul class="flex flex-col gap-2 mt-3 text-justify">
        <li>(a) Iuran anggota PUNGUAN;</li>
        <li>(b) Yang diterima seperti yang dimaksud pada ayat (4) Pasal 4 Anggaran Rumah Tangga ini;</li>
        <li>(c) Hasil lelang, donasi atau yang lainnya yang diperoleh pada saat pesta Partangiangan (yang dilimpahkan oleh Panitia Pesta Pertangiangan kepada Pengurus), seperti dimaksud pada ayat (5) dan ayat (6) Pasal 6 Anggaran Rumah Tangga ini.</li>
        </ul>
        `,
      ],
    },
    {
      pasal: 10,
      title: "lain lain",
      paragraf: [
        "Hal-hal lain yang diatur dalam URAIAN TUGAS PENGURUS, PROGRAM KERJA maupun dalam bentuk SURAT KEPUTUSAN PENGURUS adalah dalam rangka untuk memudahkan pelaksanaan tugas PENGURUS HARIAN;",
        "Semua yang diatur dan ditetapkan seperti ayat (1) Pasal ini, adalah bagian yang tidak terpisah dari Anggaran Rumah Tangga ini serta mempunyai kekuatan yang sama.",
      ],
    },
  ];

  return (
    <div>
      <div>
        <div>
          <h1 className="uppercase block text-center font-bold text-2xl">
            Anggaran Rumah Tangga
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

export default AnggaranRumahTanggaPage;
