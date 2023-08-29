const fs = require("fs");

const kisiEkle = function (isim, tel) {
  console.log("isim: ", isim + " tel no: " + tel);
  const kisiler = dosyadanKisileriOku();

  const ayniIsimliler = kisiler.filter((kisi) => {
    return kisi.isim === isim;
  });

  if (ayniIsimliler.length === 0) {
    kisiler.push({
      isim: isim,
      tel: tel,
    });
    dosyayaKisileriYaz(kisiler);
  } else {
    console.log(isim + " isimli kayıt zaten var");
  }
};

const dosyayaKisileriYaz = function (kisiler) {
  const jsonData = JSON.stringify(kisiler);
  fs.writeFileSync("kisiler.json", jsonData);
};

const dosyadanKisileriOku = function () {
  try {
    const dataBuffer = fs.readFileSync("kisiler.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const kisiSil = function (isim) {
  console.log("silinecek kişi " + isim);

  const kisiler = dosyadanKisileriOku();
  const dosyayaTekrarYazilacakKisiler = kisiler.filter((kisi) => {
    return kisi.isim !== isim;
  });

  if (kisiler.length > dosyayaTekrarYazilacakKisiler.length) {
    console.log("kişi bulundu ve silindi");
    dosyayaKisileriYaz(dosyayaTekrarYazilacakKisiler);
  } else {
    console.log("böyle bir kişi yok");
  }
};
const kisiGoster = function (isim) {
  console.log("gösterilecek kişi " + isim);

  const kisiler = dosyadanKisileriOku();
  const bulunanKisi = kisiler.find((kisi) => {
    return kisi.isim === isim;
  });
  if (bulunanKisi) {
    console.log("kişi tel no:" + bulunanKisi.tel);
  } else {
    console.log("böyle bir kişi yok");
  }
};
const kisiListele = function () {
  console.log("rehber gösterilecek ");

  const kisiler = dosyadanKisileriOku();
  kisiler.forEach((kisi) => {
    console.log("isim: " + kisi.isim + " tel no: " + kisi.tel);
  });
};

module.exports = {
  kisiEkle: kisiEkle,
  kisiSil: kisiSil,
  kisiGoster: kisiGoster,
  kisiListele: kisiListele,
};
