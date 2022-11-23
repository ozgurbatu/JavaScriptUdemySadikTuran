let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";

// 1- url kaç karakterlidir?

let sonuc;

sonuc = url.length;

// 2- kursAdi kaç kelimeden oluşmaktadır?
sonuc = kursAdi.split(" ").length;

// 3- url https ile mi başlıyor?

sonuc = url.startsWith("https");

sonuc ? console.log("evet basliyor") : console.log("hayir baslamiyor");


// 4- kursAdi içerisinde Eğitimi kelimesi var mı?

if (kursAdi.indexOf("Eğitimi") > -1) {
    console.log("evet var");
} else {
    console.log("hayir yok");
}

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.

// https://www.sadikturan.com/komple-web-gelistirme-kursu

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ","-");
kursAdi = kursAdi.replace("ş","s").replace("ı","i");

sonuc = `${url}/${kursAdi}`;

console.log(sonuc);