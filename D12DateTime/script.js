let simdi=new Date(); // simdiki tarih - saat 

// Get Methods
sonuc=simdi;
sonuc=simdi.getDate(); // gun bilgisi doner
sonuc=simdi.getDay(); // 0 : pazar, 6 : cumarts'tesi
sonuc=simdi.getFullYear(); // yil
sonuc=simdi.getHours(); // saat

// Set Methods
//simdi.setFullYear(2025);
simdi.setMonth(7); // 0 Ocak 1 Subat
simdi.setDate(15);

sonuc=simdi;

let dogumTarihi=new Date(1990, 5, 15);
sonuc=simdi.getFullYear-dogumTarihi.getFullYear;

let milisecond=simdi-dogumTarihi;
let saniye=milisecond/1000;
let dakika=saniye/60
let saat=saniye/60;
let gun=saat/24;

sonuc=gun;

console.log(typeof sonuc);
console.log(sonuc);