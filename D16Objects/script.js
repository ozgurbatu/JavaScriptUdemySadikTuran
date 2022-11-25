let kullaniciA={
    "ad": "Ozgur",
    "soyad": "Batu",
    "yas": 30,
    "adres": {
        "il": "Ankara",
        "ilce": "Sincan"
    },
    "hobiler":["sinema","spor"]
}

let kullaniciB={
    "ad": "Ali",
    "soyad": "Veli",
    "yas": 29,
    "adres": {
        "il": "Adana",
        "ilce": "Seyhan"
    },
    "hobiler":["tiyatro","spor"]
}
let sonuc;

sonuc=kullaniciA.name;
sonuc=kullaniciA.lastName;
sonuc=kullaniciA["yas"];
sonuc=kullaniciA.adres.city;
sonuc=kullaniciA.adres.town;
sonuc=kullaniciA.hobiler[0];
sonuc=kullaniciA.hobiler[1];


let kullanicilar=[kullaniciA,kullaniciB];

sonuc=kullanicilar[1];
sonuc=kullanicilar[1].ad;


let urunler = [
    {
        "urun_adi": "samsung s22",
        "urun_fiyat": 13000
    },
    {
        "urun_adi": "samsung s23",
        "urun_fiyat": 15000
    }
]

sonuc = urunler[0].urun_adi;

console.log(sonuc);

