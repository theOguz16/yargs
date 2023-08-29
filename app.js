const yargs = require("yargs");
const kisi = require("./kisi");

yargs.version("1.5.3");

//Kişi ekle komutu
yargs.command({
  command: "ekle",
  desc: "yeni kişi ekleme",
  builder: {
    isim: {
      desc: "eklenecek kişi adı",
      demandOption: true,
      type: "string",
    },
    isim: {
      desc: "eklenecek kişi telefonu",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    kisi.kisiEkle(argv.isim, argv.tel);
  },
});
yargs.command({
  command: "sil",
  desc: "kişi silme",
  builder: {
    isim: {
      desc: "silinecek kişi adı",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    kisi.kisiSil(argv.isim);
  },
});
yargs.command({
  command: "listele",
  desc: "rehberi listeler",
  builder: {},
  handler(argv) {
    kisi.kisiListele();
  },
});
yargs.command({
  command: "goster",
  desc: "kisiyi gösterir",
  isim: {
    desc: "listenelecek kişi adı",
    demandOption: true,
    type: "string",
  },
  handler(argv) {
    kisi.kisiGoster(argv.isim);
  },
});

yargs.parse();
