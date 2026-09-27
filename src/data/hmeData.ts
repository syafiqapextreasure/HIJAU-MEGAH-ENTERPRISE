import { ServiceItem, PortfolioItem, FaqItem } from '../types';

export const CONTACT_INFO = {
  COMPANY_NAME: 'HIJAU MEGAH ENTERPRISE',
  SHORT_NAME: 'HME',
  TAGLINE: 'Construction | Landscape | Homestay',
  DISPLAY_PHONE: '+60 19-599 5868',
  WHATSAPP_NUMBER: '60195995868',
  WHATSAPP_URL: 'https://wa.me/60195995868',
  TEL_URL: 'tel:+60195995868',
  DEFAULT_PREFILLED_MESSAGE: 'Salam HME, saya berminat untuk mendapatkan maklumat dan sebut harga bagi projek saya.',
  OPERATION_HOURS: 'Isnin – Sabtu (8:00 Pagi – 6:00 Petang)',
  SERVICE_FOCUS: 'Pembinaan, Pembaikan & Penyelenggaraan Hartanah',
};

export function getWhatsAppUrl(message?: string): string {
  const text = message || CONTACT_INFO.DEFAULT_PREFILLED_MESSAGE;
  return `https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getLandskapWhatsAppUrl(details?: string): string {
  const text = details 
    ? `Salam HME, saya berminat untuk membuat pertanyaan perkhidmatan Landskap & Penjagaan Kawasan:\n\n${details}`
    : `Salam HME, saya berminat untuk membuat pertanyaan dan perbincangan mengenai servis Landskap & Penjagaan Kawasan bagi hartanah saya.`;
  return `https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getHomestayWhatsAppUrl(form?: {
  name?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  notes?: string;
}): string {
  if (!form || (!form.name && !form.checkIn)) {
    return `https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${encodeURIComponent(
      'Salam HME, saya ingin menyemak ketersediaan dan maklumat lanjut bagi Homestay Apartmen di Cameron Highlands.'
    )}`;
  }

  const lines = [
    `Salam HME, saya ingin membuat pertanyaan tempahan Homestay Apartmen di Cameron Highlands:`,
    ``,
    `*Nama:* ${form.name?.trim() || 'Pelanggan'}`,
    `*Tarikh Daftar Masuk (Check-in):* ${form.checkIn?.trim() || 'Akan dimaklumkan'}`,
    `*Tarikh Daftar Keluar (Check-out):* ${form.checkOut?.trim() || 'Akan dimaklumkan'}`,
    `*Bilangan Tetamu:* ${form.guests?.trim() || 'Akan dimaklumkan'}`,
    form.notes?.trim() ? `*Pertanyaan / Permintaan Khas:* ${form.notes.trim()}` : null,
    ``,
    `Mohon maklumat ketersediaan tarikh dan foto unit sebenar. Terima kasih.`
  ].filter(Boolean).join('\n');

  return `https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}

export const LANDSCAPE_SERVICES = [
  {
    title: 'Penyusunan & Rekaan Taman',
    desc: 'Perancangan susun atur taman kediaman atau komersial mengikut ruang dan pencahayaan tapak bagi mewujudkan persekitaran yang tenang dan segar.',
    points: ['Pemilihan tumbuhan tropika tahan cuaca', 'Susun atur pokok renek & hiasan', 'Penyediaan laluan pejalan kaki ringkas']
  },
  {
    title: 'Penanaman Pokok & Rumput',
    desc: 'Khidmat penanaman rumput hijau segar, pokok hiasan, pokok palma renek dan tanaman berbunga dengan kaedah tanah bersesuaian.',
    points: ['Penanaman rumput padang atau hiasan', 'Penanaman pokok palma & renek', 'Penyediaan tanah hitam & baja asas']
  },
  {
    title: 'Penjagaan & Pemotongan Rumput',
    desc: 'Penyelenggaraan berkala kawasan luar merangkumi pemotongan rumput, pemangkasan dahan semak, pembersihan daun kering dan kemasan sempadan laman.',
    points: ['Pemotongan & meratakan rumput', 'Pemangkasan dahan ranting', 'Pembersihan sisa taman secara teratur']
  },
  {
    title: 'Penyelenggaraan Kawasan Komersial',
    desc: 'Khidmat penjagaan lanskap luar bagi premis perniagaan, pejabat atau kawasan lapang untuk mengekalkan imej premis yang sentiasa rapi.',
    points: ['Jadual selenggara mengikut keperluan', 'Kawalan kebersihan kawasan lapang', 'Perbincangan skop mengikut bajet']
  }
];

export const HOMESTAY_HIGHLIGHTS = {
  LOCATION: 'Cameron Highlands, Pahang, Malaysia',
  SETTING: 'Apartmen percutian dalam suasana pergunungan yang sejuk, nyaman dan segar dikelilingi kehijauan bukit.'
};


export const SERVICES: ServiceItem[] = [
  {
    id: 'bumbung',
    title: 'Bumbung & Atap',
    shortDesc: 'Pemasangan atap zink dan metal deck, pembaikan kerangka kekuda bumbung, penggantian perabung serta penyelesaian masalah kebocoran.',
    fullDesc: 'Menyediakan khidmat menyeluruh bagi kerja atap kediaman dan premis, merangkumi pembinaan kerangka kayu atau besi, pemasangan kepingan atap zink / metal deck, pemasangan flashing kalis air, serta baik pulih kebocoran atap.',
    image: '/images/servis/servis-bumbung.webp',
    features: [
      'Pemasangan kepingan atap zink / metal deck',
      'Pembaikan dan penggantian kekuda bumbung',
      'Pemasangan flashing, talang air & perabung',
      'Kerja mengatasi atap bocor dan kemasan siling'
    ],
    ctaMessage: 'Salam HME, saya ingin bincang mengenai servis Bumbung & pembaikan atap bagi rumah/premis saya.'
  },
  {
    id: 'besi',
    title: 'Besi & Kimpalan',
    shortDesc: 'Fabrikasi dan kimpalan struktur besi kukuh, tiang sokongan, kerangka teduhan, awning, dan pemasangan jaring pelindung.',
    fullDesc: 'Kerja-kerja kimpalan dan fabrikasi besi di tapak projek mengikut spesifikasi yang diperlukan, termasuk pembinaan tiang tapak struktur, kerangka pelindung serbaguna, dan pemasangan jaring teduhan.',
    image: '/images/servis/servis-besi.webp',
    features: [
      'Fabrikasi tiang & kerangka besi tapak',
      'Kerja kimpalan struktur kukuh',
      'Pemasangan struktur awning & peneduh',
      'Kerangka khas untuk aktiviti pertanian/perniagaan'
    ],
    ctaMessage: 'Salam HME, saya berminat untuk mendapatkan sebut harga kerja Besi & Kimpalan.'
  },
  {
    id: 'cat',
    title: 'Mengecat Bangunan',
    shortDesc: 'Khidmat mengecat luaran dan dalaman rumah kediaman, dinding teres, dan premis perniagaan dengan cat tahan cuaca yang kemas.',
    fullDesc: 'Membaharui penampilan hartanah anda dengan teknik mengecat yang rapi. Kami melaksanakan persiapan permukaan dinding, sapuan primer, dan lapisan cat berkualiti tinggi untuk ketahanan daripada panas dan hujan tropika.',
    image: '/images/servis/servis-cat.webp',
    features: [
      'Pengecatan dinding luar rumah kediaman',
      'Pengecatan dalaman bilik & ruang tamu',
      'Persiapan permukaan dinding & sapuan primer',
      'Pilihan warna moden kemasan charcoal & off-white'
    ],
    ctaMessage: 'Salam HME, saya ingin bertanyakan mengenai servis Mengecat Bangunan.'
  },
  {
    id: 'jalan',
    title: 'Jalan & Tar',
    shortDesc: 'Penurapan tar premix, penampalan jalan berlubang (potholes), penyediaan asas batu kelikir, dan kerja memampat permukaan jalan.',
    fullDesc: 'Menyediakan perkhidmatan kerja turapan jalan tar panas (premix) untuk laluan masuk rumah, jalan kampung, tapak perniagaan, mahupun penampalan kerosakan jalan dengan jentera pemadat jalan yang bersesuaian.',
    image: '/images/servis/servis-jalan.webp',
    features: [
      'Penurapan jalan tar premix panas',
      'Kerja menampal lubang jalan (patching)',
      'Penyediaan & pemadatan asas batu kelikir',
      'Laluan masuk rumah persendirian & jalan kampung'
    ],
    ctaMessage: 'Salam HME, saya ingin sebut harga bagi kerja penurapan Jalan & Tar.'
  },
  {
    id: 'dapur',
    title: 'Dapur, Jubin & Sinki',
    shortDesc: 'Pembaikan tapak konkrit meja sinki, pemasangan jubin baharu, penyelesaian masalah paip sinki, dan kemasan kawasan basah.',
    fullDesc: 'Khidmat pembaikan dan renovasi setempat bagi kawasan dapur dan sinki. Menangani masalah jubin pecah atau tanggal, meja konkrit rosak, kebocoran air di bawah sinki, serta kemasan semula permukaan jubin yang bersih.',
    image: '/images/servis/servis-dapur.webp',
    features: [
      'Pembaikan tapak konkrit meja dapur & sinki',
      'Pemasangan dan penggantian jubin (tiles)',
      'Penyambungan paip air dan saluran sisa',
      'Kemasan silikon kalis air sekeliling sinki'
    ],
    ctaMessage: 'Salam HME, saya ingin maklumat bagi pembaikan Dapur, Jubin & Sinki.'
  },
  {
    id: 'longkang',
    title: 'Longkang & Saliran',
    shortDesc: 'Pemasangan longkang konkrit U-drain, penggalian parit saliran air hujan, dan perancangan aliran keluar bagi mengelakkan takungan air.',
    fullDesc: 'Pemasangan sistem saliran longkang konkrit precast (U-drain) di persekitaran bangunan untuk memastikan aliran air hujan lancar, mengelakkan tanah runtuh atau mendap, serta mengurangkan risiko banjir kilat setempat.',
    image: '/images/servis/servis-longkang.webp',
    features: [
      'Pemasangan parit konkrit U-drain pelbagai saiz',
      'Penggalian parit tanah & penyediaan asas konkrit',
      'Penyambungan ke saliran utama',
      'Pencegahan takungan air di tepi bangunan'
    ],
    ctaMessage: 'Salam HME, saya berminat dengan perkhidmatan pemasangan Longkang & Saliran.'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'bumbung-02',
    code: 'HME-02',
    title: 'Kerangka Kayu Bumbung di Tapak',
    category: 'bumbung',
    categoryLabel: 'Bumbung',
    caption: 'Struktur kayu dan kasau bumbung sedang disusun sebelum pemasangan kepingan atap.',
    imageSrc: '/images/portfolio/hme-02.webp',
    webpSrc: '/images/portfolio/hme-02.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'besi-03',
    code: 'HME-03',
    title: 'Penyediaan Struktur Besi Tapak Terbuka',
    category: 'besi',
    categoryLabel: 'Besi & Kimpalan',
    caption: 'Kerja mendirikan dan menyusun rangka besi di kawasan tapak terbuka bersama pasukan kerja.',
    imageSrc: '/images/portfolio/hme-03.webp',
    webpSrc: '/images/portfolio/hme-03.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'besi-04',
    code: 'HME-04',
    title: 'Kimpalan Kerangka Besi di Tapak',
    category: 'besi',
    categoryLabel: 'Besi & Kimpalan',
    caption: 'Penyambungan rangka besi dan kerja kimpalan di tapak sebelum struktur dilengkapkan.',
    imageSrc: '/images/portfolio/hme-04.webp',
    webpSrc: '/images/portfolio/hme-04.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'besi-05',
    code: 'HME-05',
    title: 'Struktur Besi & Jaring Teduhan Siap',
    category: 'besi',
    categoryLabel: 'Besi & Kimpalan',
    caption: 'Kerangka besi telah dipasang bersama jaring teduhan untuk kawasan kerja luar.',
    imageSrc: '/images/portfolio/hme-05.webp',
    webpSrc: '/images/portfolio/hme-05.webp',
    status: 'Siap'
  },
  {
    id: 'cat-06',
    code: 'HME-06',
    title: 'Mengecat Dinding Luar Bahagian Hadapan',
    category: 'cat',
    categoryLabel: 'Mengecat Bangunan',
    caption: 'Kerja mengecat dinding luar bahagian hadapan rumah menggunakan tona kelabu gelap.',
    imageSrc: '/images/portfolio/hme-06.webp',
    webpSrc: '/images/portfolio/hme-06.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'cat-07',
    code: 'HME-07',
    title: 'Mengecat Dinding Sisi Rumah',
    category: 'cat',
    categoryLabel: 'Mengecat Bangunan',
    caption: 'Kemasan cat dinding sisi rumah sedang dilaksanakan bagi menyeragamkan warna luaran bangunan.',
    imageSrc: '/images/portfolio/hme-07.webp',
    webpSrc: '/images/portfolio/hme-07.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'jalan-08',
    code: 'HME-08',
    title: 'Pemadatan Tampalan Tar Jalan',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Tampalan tar baharu sedang dipadatkan menggunakan mesin compactor untuk permukaan jalan yang lebih rata.',
    imageSrc: '/images/portfolio/hme-08.webp',
    webpSrc: '/images/portfolio/hme-08.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'jalan-09',
    code: 'HME-09',
    title: 'Bahan Premix Tar Diturunkan Dari Lori',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Bahan premix tar dan batu sedang diturunkan dari lori untuk kerja pembaikan permukaan jalan.',
    imageSrc: '/images/portfolio/hme-09.webp',
    webpSrc: '/images/portfolio/hme-09.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'dapur-10',
    code: 'HME-10',
    title: 'Pembaikan Kaunter Sinki Konkrit',
    category: 'dapur',
    categoryLabel: 'Dapur & Sinki',
    caption: 'Kaunter sinki konkrit lama dibuka dan dibersihkan sebagai persediaan kerja pembaikan.',
    imageSrc: '/images/portfolio/hme-10.webp',
    webpSrc: '/images/portfolio/hme-10.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'dapur-11',
    code: 'HME-11',
    title: 'Pemasangan Semula Jubin Kaunter Sinki',
    category: 'dapur',
    categoryLabel: 'Dapur & Sinki',
    caption: 'Kerja pemasangan semula jubin dan kemasan kawasan sinki dapur sedang dijalankan.',
    imageSrc: '/images/portfolio/hme-11.webp',
    webpSrc: '/images/portfolio/hme-11.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'jalan-12',
    code: 'HME-12',
    title: 'Memampatkan Tar Dengan Mesin Compactor',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Mesin compactor digunakan untuk memadatkan tampalan tar pada bahagian jalan yang rosak.',
    imageSrc: '/images/portfolio/hme-12.webp',
    webpSrc: '/images/portfolio/hme-12.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'jalan-13',
    code: 'HME-13',
    title: 'Jalan Tar Baharu Melalui Kawasan Hijau',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Laluan jalan baharu siap diturap merentasi kawasan hijau dan kebun.',
    imageSrc: '/images/portfolio/hme-13.webp',
    webpSrc: '/images/portfolio/hme-13.webp',
    status: 'Siap'
  },
  {
    id: 'jalan-14',
    code: 'HME-14',
    title: 'Laluan Jalan Kampung Selesai Diturap',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Permukaan jalan kampung siap diturap dengan kemasan tar yang kemas dan sekata.',
    imageSrc: '/images/portfolio/hme-14.webp',
    webpSrc: '/images/portfolio/hme-14.webp',
    status: 'Siap'
  },
  {
    id: 'jalan-15',
    code: 'HME-15',
    title: 'Penyediaan Batu Asas Jalan Dengan Roller',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Batu asas jalan sedang diratakan dan dipadatkan menggunakan roller sebelum kerja turapan.',
    imageSrc: '/images/portfolio/hme-15.webp',
    webpSrc: '/images/portfolio/hme-15.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'jalan-16',
    code: 'HME-16',
    title: 'Penghantaran Batu Asas Jalan',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Lori menurunkan batu asas di kawasan laluan sebagai persediaan pembinaan jalan.',
    imageSrc: '/images/portfolio/hme-16.webp',
    webpSrc: '/images/portfolio/hme-16.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'jalan-17',
    code: 'HME-17',
    title: 'Jalan Tar Siap di Kawasan Kelapa Sawit',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Jalan tar siap diturap di laluan ladang dengan permukaan yang kemas dan rata.',
    imageSrc: '/images/portfolio/hme-17.webp',
    webpSrc: '/images/portfolio/hme-17.webp',
    status: 'Siap'
  },
  {
    id: 'longkang-18',
    code: 'HME-18',
    title: 'Pemasangan Longkang U-Drain di Tapak',
    category: 'longkang',
    categoryLabel: 'Longkang',
    caption: 'Longkang konkrit U-drain dipasang dalam parit tanah bagi menguruskan aliran air di tepi bangunan.',
    imageSrc: '/images/portfolio/hme-18.webp',
    webpSrc: '/images/portfolio/hme-18.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'bumbung-19',
    code: 'HME-19',
    title: 'Pemasangan Kepingan Atap Merah',
    category: 'bumbung',
    categoryLabel: 'Bumbung',
    caption: 'Kepingan atap logam merah sedang dinaikkan dan dipasang pada struktur bumbung.',
    imageSrc: '/images/portfolio/hme-19.webp',
    webpSrc: '/images/portfolio/hme-19.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'jalan-20',
    code: 'HME-20',
    title: 'Tampalan Tar Bahagian Bahu Jalan',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Kerja tampalan tar dilakukan pada bahagian bahu jalan berhampiran kawasan takungan air.',
    imageSrc: '/images/portfolio/hme-20.webp',
    webpSrc: '/images/portfolio/hme-20.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'bumbung-21',
    code: 'HME-21',
    title: 'Kerja Kerangka Bumbung Pada Bangunan Biru',
    category: 'bumbung',
    categoryLabel: 'Bumbung',
    caption: 'Pekerja menyiapkan kerangka kayu bumbung dan persediaan pemasangan atap di atas bangunan.',
    imageSrc: '/images/portfolio/hme-21.webp',
    webpSrc: '/images/portfolio/hme-21.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'bumbung-22',
    code: 'HME-22',
    title: 'Pemasangan Atap Logam Merah',
    category: 'bumbung',
    categoryLabel: 'Bumbung',
    caption: 'Atap logam merah sedang dipasang dan diskru pada rangka bumbung sedia ada.',
    imageSrc: '/images/portfolio/hme-22.webp',
    webpSrc: '/images/portfolio/hme-22.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'bumbung-23',
    code: 'HME-23',
    title: 'Kerja Siling dan Struktur Dalaman Bumbung',
    category: 'bumbung',
    categoryLabel: 'Bumbung',
    caption: 'Kerja dalaman melibatkan rangka bumbung, siling dan persediaan kemasan ruang.',
    imageSrc: '/images/portfolio/hme-23.webp',
    webpSrc: '/images/portfolio/hme-23.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'bumbung-24',
    code: 'HME-24',
    title: 'Pemasangan Rangka Siling Dalaman',
    category: 'bumbung',
    categoryLabel: 'Bumbung',
    caption: 'Pekerja memasang rangka siling dan kemasan dalaman di bawah struktur bumbung.',
    imageSrc: '/images/portfolio/hme-24.webp',
    webpSrc: '/images/portfolio/hme-24.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'bumbung-25',
    code: 'HME-25',
    title: 'Kerangka Bumbung Dalaman Siap Dibuka',
    category: 'bumbung',
    categoryLabel: 'Bumbung',
    caption: 'Ruang dalaman menunjukkan kerangka bumbung dan laluan kerja siling yang sedang disiapkan.',
    imageSrc: '/images/portfolio/hme-25.webp',
    webpSrc: '/images/portfolio/hme-25.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'bumbung-26',
    code: 'HME-26',
    title: 'Kemasan Flashing Bumbung Logam',
    category: 'bumbung',
    categoryLabel: 'Bumbung',
    caption: 'Kerja memasang kepingan flashing logam pada sambungan bumbung untuk kemasan dan perlindungan air.',
    imageSrc: '/images/portfolio/hme-26.webp',
    webpSrc: '/images/portfolio/hme-26.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'bumbung-27',
    code: 'HME-27',
    title: 'Kerangka Kayu Bumbung Dari Sudut Sisi',
    category: 'bumbung',
    categoryLabel: 'Bumbung',
    caption: 'Pandangan sisi struktur kayu bumbung sebelum pemasangan penuh kepingan atap.',
    imageSrc: '/images/portfolio/hme-27.webp',
    webpSrc: '/images/portfolio/hme-27.webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'bumbung-28',
    code: 'HME-28',
    title: 'Atap Logam Merah Siap Dipasang',
    category: 'bumbung',
    categoryLabel: 'Bumbung',
    caption: 'Permukaan atap logam merah siap dipasang dengan susunan kepingan yang kemas.',
    imageSrc: '/images/portfolio/hme-28.webp',
    webpSrc: '/images/portfolio/hme-28.webp',
    status: 'Siap'
  }
];

export const ORDERED_PORTFOLIO_ITEMS: PortfolioItem[] = [...PORTFOLIO_ITEMS].sort((a, b) => {
  const statusOrder: Record<PortfolioItem['status'], number> = {
    'Sedang Berjalan': 0,
    Siap: 1,
  };

  return statusOrder[a.status] - statusOrder[b.status];
});

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Hubungi & Kongsi Foto Tapak',
    desc: 'Hantarkan mesej WhatsApp bersama gambar bahagian yang memerlukan kerja pembaikan atau binaan untuk semakan awal pihak HME.'
  },
  {
    step: '02',
    title: 'Perbincangan Skop & Anggaran',
    desc: 'Kami akan meneliti keperluan anda, mencadangkan penyelesaian praktikal, serta berbincang mengenai skop kerja dan anggaran kos.'
  },
  {
    step: '03',
    title: 'Pelaksanaan Kerja Kemas',
    desc: 'Kerja-kerja dimulakan mengikut jadual yang dipersetujui dengan menitikberatkan kekemasan, ketelitian, dan keselamatan tapak.'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Bagaimanakah cara untuk saya meminta sebut harga projek daripada HME?',
    answer: 'Anda boleh terus menekan butang WhatsApp di laman ini atau hubungi kami di talian +60 19-599 5868. Nyatakan jenis kerja (cth: bumbung bocor, turap tar, pasang longkang, kimpalan besi) beserta anggaran lokasi projek anda.'
  },
  {
    question: 'Bolehkah saya menghantar gambar atau video kawasan yang rosak melalui WhatsApp?',
    answer: 'Ya, amat digalakkan. Menghantar gambar bahagian bumbung, kawasan dapur/sinki, atau lubang jalan memudahkan pihak kami memahami keadaan tapak sebelum berbincang lanjut.'
  },
  {
    question: 'Apakah jenis kerja yang dikendalikan oleh Hijau Megah Enterprise?',
    answer: 'HME memfokuskan kepada kerja-kerja praktikal pembinaan, pembaikan dan penyelenggaraan hartanah, khususnya kerja atap/bumbung, struktur besi & kimpalan, mengecat bangunan, penurapan jalan tar/premix, pembaikan sinki & jubin dapur, serta pemasangan longkang saliran. Bidang Landskap dan Homestay turut dibuka bagi perbincangan mengikut keperluan pelanggan.'
  },
  {
    question: 'Berapa lamakah tempoh anggaran sesuatu kerja pembaikan disiapkan?',
    answer: 'Tempoh masa bergantung kepada keluasan, tahap kerosakan dan cuaca tempatan (terutamanya bagi kerja luaran seperti tar, bumbung dan cat). Kami akan membincangkan jadual yang realistik sebelum kerja dimulakan.'
  }
];
