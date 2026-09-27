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
  SETTING: 'Apartmen percutian dalam suasana pergunungan yang sejuk, nyaman dan segar dikelilingi kehijauan bukit.',
  NOTE: 'Setiap imej yang dipaparkan adalah konsep ilustrasi AI. Sila hubungi HME di WhatsApp untuk mendapatkan maklumat unit sebenar, ketersediaan tarikh dan sebut harga kadar sewaan.'
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
  // Bumbung (4 items)
  {
    id: 'bumbung-122302',
    code: '122302',
    title: 'Pemasangan Kerangka Kayu Bumbung',
    category: 'bumbung',
    categoryLabel: 'Bumbung',
    caption: 'Kerja pemasangan kerangka kayu bumbung dan kasau di tapak projek.',
    imageSrc: '/images/portfolio/image(20260927-122302).webp',
    webpSrc: '/images/portfolio/image(20260927-122302).webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'bumbung-122314',
    code: '122314',
    title: 'Struktur Kerangka Kayu Kasau',
    category: 'bumbung',
    categoryLabel: 'Bumbung',
    caption: 'Pemeriksaan struktur kayu kasau dan kerangka bumbung sebelum kepingan atap dipasang.',
    imageSrc: '/images/portfolio/image(20260927-122314).webp',
    webpSrc: '/images/portfolio/image(20260927-122314).webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'bumbung-122415',
    code: '122415',
    title: 'Pemasangan Atap Zink Merah',
    category: 'bumbung',
    categoryLabel: 'Bumbung',
    caption: 'Kerja menaikkan dan memasang kepingan atap zink merah di atas bumbung bangunan.',
    imageSrc: '/images/portfolio/image(20260927-122415).webp',
    webpSrc: '/images/portfolio/image(20260927-122415).webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'bumbung-122429',
    code: '122429',
    title: 'Kemasan Atap Bumbung Logam Merah',
    category: 'bumbung',
    categoryLabel: 'Bumbung',
    caption: 'Pemasangan atap bumbung logam merah yang telah siap dipasang dengan rapi.',
    imageSrc: '/images/portfolio/image(20260927-122429).webp',
    webpSrc: '/images/portfolio/image(20260927-122429).webp',
    status: 'Siap'
  },

  // Besi & Kimpalan (3 items)
  {
    id: 'besi-122320',
    code: '122320',
    title: 'Pengukuran Tiang Besi Tapak',
    category: 'besi',
    categoryLabel: 'Besi & Kimpalan',
    caption: 'Kerja pengukuran dan mendirikan tiang besi tapak struktur bersama pekerja.',
    imageSrc: '/images/portfolio/image(20260927-122320).webp',
    webpSrc: '/images/portfolio/image(20260927-122320).webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'besi-122325',
    code: '122325',
    title: 'Kimpalan & Kerangka Besi di Tapak',
    category: 'besi',
    categoryLabel: 'Besi & Kimpalan',
    caption: 'Penyambungan dan kerja kimpalan kerangka besi di tapak menggunakan peralatan kimpalan.',
    imageSrc: '/images/portfolio/image(20260927-122325).webp',
    webpSrc: '/images/portfolio/image(20260927-122325).webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'besi-122328',
    code: '122328',
    title: 'Kerangka Besi & Jaring Teduhan',
    category: 'besi',
    categoryLabel: 'Besi & Kimpalan',
    caption: 'Kerangka besi siap dipasang bersama jaring teduhan pelindung di kawasan terbuka.',
    imageSrc: '/images/portfolio/image(20260927-122328).webp',
    webpSrc: '/images/portfolio/image(20260927-122328).webp',
    status: 'Siap'
  },

  // Mengecat (2 items)
  {
    id: 'cat-122333',
    code: '122333',
    title: 'Mengecat Dinding Luar Charcoal',
    category: 'cat',
    categoryLabel: 'Mengecat Bangunan',
    caption: 'Kerja mengecat dinding luar rumah menggunakan cat kelabu arang (charcoal) dengan roller.',
    imageSrc: '/images/portfolio/image(20260927-122333).webp',
    webpSrc: '/images/portfolio/image(20260927-122333).webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'cat-122335',
    code: '122335',
    title: 'Kemasan Cat Dinding Luaran Rumah Teres',
    category: 'cat',
    categoryLabel: 'Mengecat Bangunan',
    caption: 'Kemasan mengecat bahagian luar dinding rumah teres dalam tona kelabu dan putih.',
    imageSrc: '/images/portfolio/image(20260927-122335).webp',
    webpSrc: '/images/portfolio/image(20260927-122335).webp',
    status: 'Sedang Berjalan'
  },

  // Jalan & Tar (7 items)
  {
    id: 'jalan-122337',
    code: '122337',
    title: 'Penurunan Tar Premix Panas',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Kerja menurunkan tar premix panas daripada lori ke tapak pembaikan jalan.',
    imageSrc: '/images/portfolio/image(20260927-122337).webp',
    webpSrc: '/images/portfolio/image(20260927-122337).webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'jalan-122340',
    code: '122340',
    title: 'Menampal Tar Jalan Berlubang',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Kerja menampal dan meratakan tar pada bahagian permukaan jalan yang berlubang.',
    imageSrc: '/images/portfolio/image(20260927-122340).webp',
    webpSrc: '/images/portfolio/image(20260927-122340).webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'jalan-122344',
    code: '122344',
    title: 'Memampatkan Tar Jalan dengan Mesin Compactor',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Kerja memampatkan tar tampalan menggunakan mesin compactor bergetar.',
    imageSrc: '/images/portfolio/image(20260927-122344).webp',
    webpSrc: '/images/portfolio/image(20260927-122344).webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'jalan-122349',
    code: '122349',
    title: 'Laluan Jalan Tar Lurus Siap Diturap',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Laluan jalan tar lurus yang telah siap diturap dengan kemas di kawasan kejiranan.',
    imageSrc: '/images/portfolio/image(20260927-122349).webp',
    webpSrc: '/images/portfolio/image(20260927-122349).webp',
    status: 'Siap'
  },
  {
    id: 'jalan-122355',
    code: '122355',
    title: 'Laluan Jalan Tar Selekoh Siap Diturap',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Laluan jalan tar di bahagian selekoh yang telah siap diturap dan diratakan.',
    imageSrc: '/images/portfolio/image(20260927-122355).webp',
    webpSrc: '/images/portfolio/image(20260927-122355).webp',
    status: 'Siap'
  },
  {
    id: 'jalan-122359',
    code: '122359',
    title: 'Jalan Tar Kawasan Perkampungan',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Permukaan jalan tar kawasan perkampungan yang siap diturap di antara deretan pokok.',
    imageSrc: '/images/portfolio/image(20260927-122359).webp',
    webpSrc: '/images/portfolio/image(20260927-122359).webp',
    status: 'Siap'
  },
  {
    id: 'jalan-122401',
    code: '122401',
    title: 'Meratakan Batu Asas Jalan dengan Roller',
    category: 'jalan',
    categoryLabel: 'Jalan & Tar',
    caption: 'Kerja memampat dan meratakan batu asas jalan dengan mesin penggelek kuning.',
    imageSrc: '/images/portfolio/image(20260927-122401).webp',
    webpSrc: '/images/portfolio/image(20260927-122401).webp',
    status: 'Sedang Berjalan'
  },

  // Dapur, Jubin & Sinki (2 items)
  {
    id: 'dapur-122346',
    code: '122346',
    title: 'Pembaikan Tapak Sinki Konkrit',
    category: 'dapur',
    categoryLabel: 'Dapur, Jubin & Sinki',
    caption: 'Pembaikan kawasan sinki dan penyingkiran jubin konkrit lama yang rosak.',
    imageSrc: '/images/portfolio/image(20260927-122346).webp',
    webpSrc: '/images/portfolio/image(20260927-122346).webp',
    status: 'Sedang Berjalan'
  },
  {
    id: 'dapur-122505',
    code: '122505',
    title: 'Pemasangan Semula Jubin Kawasan Sinki',
    category: 'dapur',
    categoryLabel: 'Dapur, Jubin & Sinki',
    caption: 'Kerja kemasan dan pemasangan semula jubin di sekeliling sinki dapur.',
    imageSrc: '/images/portfolio/image(20260927-122505).webp',
    webpSrc: '/images/portfolio/image(20260927-122505).webp',
    status: 'Sedang Berjalan'
  },

  // Longkang (1 item)
  {
    id: 'longkang-122405',
    code: '122405',
    title: 'Pemasangan Longkang Konkrit U-Drain',
    category: 'longkang',
    categoryLabel: 'Longkang',
    caption: 'Pemasangan longkang konkrit U-drain di dalam parit tanah sisi bangunan untuk aliran air.',
    imageSrc: '/images/portfolio/image(20260927-122405).webp',
    webpSrc: '/images/portfolio/image(20260927-122405).webp',
    status: 'Sedang Berjalan'
  }
];

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
