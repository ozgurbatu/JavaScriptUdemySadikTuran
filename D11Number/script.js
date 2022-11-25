let sonuc;

sonuc=10;

sonuc="10";

sonuc=Number(sonuc)

sonuc=parseInt("10.6");

sonuc=parseFloat("10.6");

sonuc=parseInt("10a");

sonuc=parseInt("a10"); // NaN

sonuc=isNaN("10a");

let sayi =15.12354698;

sonuc=sayi.toPrecision(5); // butun sayi uzerinden 5 basamakli bir sayi donderiyor

sonuc=sayi.toFixed(5); // ondalik sayida 5 basamak alir

sonuc=Math.round(2.4); // 2

sonuc=Math.round(2.6); //3

sonuc=Math.ceil(2.3); // kendisinden buyuk olan rakama yuvarlar

sonuc=Math.floor(2.3) // kendisinden kucuk olan rakama yuvarlar

sonuc=Math.sqrt(25) // 25 in karekoku

sonuc=Math.pow(2,5); // 2 nin 5 inci kuvveti

sonuc=Math.abs(-10) //mutlak deger

// Math.min - Math.max

sonuc= Math.random() * 100 ; // 0 ile 9 arasi bir sayi


console.log(typeof sonuc);
console.log(sonuc);