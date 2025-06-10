import { faker } from "@faker-js/faker";

const users = () => {
  return Array.from({ length: 10 }).map(() => ({
    first_name: faker.person.fullName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }));
};

const courses = [
  {
    name: "PYTHON",
    image_url: "@frontend/src/assets/images/courses/Python.jpg",
    sections: [
      {
        name: "KURULUM-GİRİŞ",
        lessons: [
          {
            index: 1,
            name: "kurulum 1",
            video_url:
              "https://www.youtube.com/embed/2c8ylB855yU?si=DURBDiyaAvpyEJx6",
            description: "kurulum 1",
          },
          {
            index: 2,
            name: "kurulum 2",
            video_url:
              "https://www.youtube.com/embed/NXamdLWSJIw?si=9xnU2KJ7b73YwPMR",
            description: "kurulum 2",
          },
          {
            index: 3,
            name: "kurulum 3",
            video_url:
              "https://www.youtube.com/embed/Pz6LoHve1a4?si=qydBzPiUtYHH32DE",
            description: "kurulum 3",
          },
        ],
      },
      {
        name: "TEMELLER",
        lessons: [
          {
            index: 1,
            name: "değişkenler",
            video_url:
              "https://www.youtube.com/embed/V1c0MzR8qo8?si=cwVZkpSt1rJLbEcO",
            description:
              "Bu videoda Python'da değişkenlerin ne olduğunu, nasıl tanımlanacağını ve temel kullanımını anlatıyorum. Yazılıma yeni başlayanlar için sade ve anlaşılır bir anlatım.",
            questions: [
              {
                value:
                  "Python'da bir değişken nasıl tanımlanır ve x = 3 ifadesinin anlamı nedir?",
                choices: [
                  "x isimli değişken oluşturulur ve değeri 3'tür.",
                  "x isimli fonksiyon tanımlanır ve 3 değeri alınır.",
                  "3 değeri doğrudan ekrana yazılır.",
                  "x adlı dosya oluşturulur ve içine 3 yazılır.",
                ],
              },
              {
                value:
                  "Python'da hangi değişken türleri bulunur ve kullanılır?",
                choices: [
                  "String, float, boolean ve integer gibi farklı türler.",
                  "Sadece tam sayılar ve dizeler.",
                  "Sadece sayısal türler.",
                  "Sadece mantıksal ve dizeler.",
                ],
              },
              {
                value:
                  "Bir kitap bilgilerini (isim, sayfa sayısı, ağırlık, yeni olup olmadığı) nasıl değişkenlere atayabiliriz?",
                choices: [
                  "Bu bilgileri uygun veri türleri kullanarak değişkenlere atayabiliriz.",
                  "Bu bilgileri doğrudan etiketlerle saklayabiliriz.",
                  "Bu bilgileri sadece diziler içinde saklamalıyız.",
                  "Bu bilgileri saklamanın tek yolu dosya kullanmaktır.",
                ],
              },
              {
                value:
                  "Python'da değişken adlarında aşağıdakilerden hangisi kullanılamaz?",
                choices: [
                  "3variable",
                  "my_variable",
                  "studentName",
                  "_totalPrice",
                ],
              },
            ],
          },
          {
            index: 2,
            name: "kullanıcı girişi",
            video_url:
              "https://www.youtube.com/embed/79grzjKsIkI?si=nGsLP9ZglUcjGHaj",
            description:
              "Kullanıcıdan isim ve favori yemek bilgisi almak için Python dilinde basit bir uygulama geliştirilmiştir. Program, kullanıcıdan aldığı bilgileri birleştirip ekrana yazdırmaktadır.",
            questions: [
              {
                value: "",
                choices: ["", "", "", ""],
              },
            ],
          },
          {
            index: 3,
            name: "tür değişimi",
            video_url:
              "https://www.youtube.com/embed/wTsNlDkU7zM?si=is2mdJLzlfMWjoYJ",
            description:
              "Python programlama dilinde matematiksel işlemler oldukça basittir. Kullanıcıdan alınan sayılarla toplama, çarpma gibi işlemler yapılabilir ve bu işlemler için tür dönüşümü gereklidir.",
            questions: [
              {
                value: "",
                choices: ["", "", "", ""],
              },
            ],
          },
          {
            index: 4,
            name: "string kullanımı",
            video_url:
              "https://www.youtube.com/embed/sRnrKdehLd4?si=r9WHMUZOPIre23ri",
            description:
              "Bu videoda, Python programlama dilinde metinler (stringler) üzerinde nasıl çalışılır, temel string işlemleri ve önemli özellikleri öğreniyoruz. Başlangıç seviyesine uygun, pratik örneklerle zenginleştirilmiş bir anlatım.",
            questions: [
              {
                value: "",
                choices: ["", "", "", ""],
              },
            ],
          },
          {
            index: 5,
            name: "matematik işlemler",
            video_url:
              "https://www.youtube.com/embed/QzuyCMYAFf4?si=ccFEDrVwnTjsyonT",
            description:
              "Bu videoda, Python'da sayılarla nasıl işlemler yapılır, toplama, çıkarma, çarpma, bölme gibi temel matematik işlemlerini ve operatörleri öğreniyoruz. Başlangıç seviyesi için ideal!",
            questions: [
              {
                value: "",
                choices: ["", "", "", ""],
              },
            ],
          },
        ],
      },
      {
        name: "KOŞULLU İHADELER - MANTIKSAL OPERATÖRLER",
        lessons: [
          {
            index: 1,
            name: "Koşullu İfadeler",
            video_url:
              "https://www.youtube.com/embed/CgYNAiXIkFA?si=b2CGbv-RIoI-CBQ0",
            description:
              "Bu videoda Python'da programın akışını yönlernden koşullu ifadeleri (if, elif, else) nasıl kullanacağımızı ve karar yapılarını öğrendik. Gerçek örneklerle pratik anlatım!",
            questions: [
              {
                value,
                choices: [],
              },
              {
                value,
                choices: [],
              },
              {
                value,
                choices: [],
              },
            ],
          },
          {
            index: 2,
            name: "mantıksal operatörler",
            video_url:
              "https://www.youtube.com/embed/A_kRjLgo4As?si=CwZnVm8r9xNdHsHr",
            description:
              "Bu videoda Python'da mantıksal operatörleri (and, or, not) nasıl kullanacağımızı ve koşulları birleştirirken güç kazanan bu yapıları öğrendik. Basit örneklerle anlaşılır anlatım!",
            questions: [
              {
                value,
                choices: [],
              },
              {
                value,
                choices: [],
              },
              {
                value,
                choices: [],
              },
            ],
          },
          {
            index: 3,
            name: "karşılaştırma operatörleri",
            video_url:
              "https://www.youtube.com/embed/otds1OlcCTk?si=7en5LB2fi2g-Uhvs",
            description:
              "Bu videoda Python'da değerleri karşılaştırmak için kullanılan operatörleri (==, !=, <, >, <=, >=) basit örneklerle öğrendik. Koşullu ifadelerin temeli burada başlıyor!",
            questions: [
              {
                value:
                  "Videoda “not” operatörü ile ilgili açıklamada hangi tanım doğru kabul edilir?",
                choices: [
                  "“not”, bir ifadeyi tersine çevirir (örneğin not True → False)",
                  "“not”, iki ifade arasında OR işlemi yapar",
                  "“not”, sadece sayıları negatif veya pozitif olarak değiştirir",
                  "“not”, string’leri birleştirmek için kullanılır",
                ],
              },
              {
                value: `Python’da and, or, not gibi mantıksal operatörlerin kullanımına dair videoda verilen örnekte, şu ifade Python tarafından nasıl değerlendirilir?
                x = 5
                y = 0
                sonuç = (x > 0) and (y != 0)`,
                choices: [
                  "False",
                  "True",
                  "Hata",
                  "x ve y değerlerini yazdırır",
                ],
              },
              {
                value: `Aşağıdaki kod bloğuna göre hangi çıktı ekrana yazdırılır?
                x = 10
                if x > 10:
                    print("Büyük")
                elif x == 10:
                    print("Eşit")
                else:
                    print("Küçük")`,
                choices: ["Büyük", "Eşit", "Küçük", "Hata"],
              },
            ],
          },
        ],
      },
      {
        name: "DİZİLER",
        lessons: [
          {
            index: 1,
            name: "Diziler",
            video_url:
              "https://www.youtube.com/embed/3xAEngViTKQ?si=PQTrMv9-P-qgsDUP",
            description:
              "Bu videoda Python'da veri saklamak ve yönetmek için kullanılan dizileri (listeleri) öğrendik. Eleman ekleme, silme, erişim ve temel işlemlerle başlangıç düzeyinde anlatım!",
            questions: [
              {
                value: `Aşağıdaki kod bloğunda ekranda ne yazdırılır?
                s = "Python"
                print(s[0])`,
                choices: ["P", "y", "Python", "Hata verir"],
              },
              {
                value:
                  "Aşağıdaki seçeneklerden hangisi string birleştirme (concatenation) işlemi değildir?",
                choices: [
                  `"Merhaba" + " Dünya"`,
                  `"A" * 3`,
                  `"Pyt" + "hon"`,
                  `"ab" + "cd"`,
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "HTML",
    image_url: "@frontend/src/assets/images/courses/HTML.jpg",
    sections: [
      {
        name: "GİRİŞ",
        lessons: [
          {
            index: 1,
            name: "HTML'e Giriş",
            video_url:
              "https://www.youtube.com/embed/jiCSs0Weiqk?si=0T29BzMyzOj8rvvZ",
            description:
              "Bu videoda, web geliştirme dünyasının temelini oluşturan HTML dilini tanıyacak ve ilk web sayfanızı oluşturmaya başlayacaksınız.",
            questions: [],
          },
          {
            index: 2,
            name: "W3C Nedir?",
            video_url:
              "https://www.youtube.com/embed/Gw4R1XsavoM?si=yAhRBUVjdvwJIE5V",
            description:
              "W3C (World Wide Web Consortium), web teknolojileri için standartlar belirleyen uluslararası kuruluştur. HTML, CSS ve erişilebilirlik gibi temel web standartlarının oluşmasında rol oynar.",
            questions: [],
          },
        ],
      },
      {
        name: "TEMELLER",
        lessons: [
          {
            index: 1,
            name: "Görüntü Seviyeleri (Div, Span)",
            video_url:
              "https://www.youtube.com/embed/sRo1eoW7PeA?si=-Cd1OPFfnOwc3Psf",
            description:
              "Sayfa yapısını düzenlemek için kullanılan temel etiketler: <div> (blok düzeyinde) ve <span> (satır içi).",
            questions: [],
          },
          {
            index: 2,
            name: "Başlık ve Paragraf Etiketleri",
            video_url:
              "https://www.youtube.com/embed/vzmSTqw1X3Q?si=XGJaYvtfsP3c8XTJ",
            description:
              "<h1> - <h6> başlıklar için, <p> paragraflar için kullanılır. Web sayfalarında içerik düzeni oluşturmanın temeli budur.",
            questions: [
              {
                value:
                  "Aşağıdaki etiketlerden hangisi en büyük başlığı temsil eder?",
                choices: ["<h1>", "<h6>", "<p>", "<title>"],
              },
              {
                value: "<p> etiketi ne için kullanılır?",
                choices: [
                  "Başlık yazmak için",
                  "Paragraf oluşturmak için",
                  "Maddeleme yapmak için",
                  "Link eklemek için",
                ],
              },
            ],
          },
          {
            index: 3,
            name: "Metin Biçimlendirme Etiketleri",
            video_url:
              "https://www.youtube.com/embed/uew8XqPR--o?si=c09MHCBt55lmH4cv",
            description:
              "<b>, <i>, <u>, <strong>, <em> gibi etiketlerle metinlerinizi biçimlendirip vurgulayabilirsiniz.",
            questions: [
              {
                value:
                  "Kalın yazı yazmak için kullanılan etiket aşağıdakilerden hangisidir?",
                choices: ["<i>", "<b>", "<u>", "<em>"],
              },
              {
                value:
                  "İtalik yazı yazmak için kullanılan etiket aşağıdakilerden hangisidir?",
                choices: ["<b>", "<i>", "<u>", "<s>"],
              },
            ],
          },
          {
            index: 4,
            name: "Alıntılama Etiketleri",
            video_url:
              "https://www.youtube.com/embed/nF9ME5hPZ9k?si=HjhudUOcSUGX8wcT",
            description:
              "<blockquote> ve <q> etiketleri ile hem blok hem satır içi alıntılar yapabilirsiniz.",
            questions: [
              {
                value: "Satır içi alıntı yapmak için hangi etiket kullanılır?",
                choices: ["<blockquote>", "<quote>", "<q>", "<cite>"],
              },
              {
                value: "Uzun alıntılar için hangi etiket kullanılır?",
                choices: ["<q>", "<blockquote>", "<cite>", "<quote>"],
              },
            ],
          },
          {
            index: 5,
            name: "Resim Etiketi",
            video_url:
              "https://www.youtube.com/embed/NORk3uXqEe0?si=M6-nJzV5SNK-5NCf",
            description:
              "Web sayfalarına resim eklemek için kullanılan <img> etiketinin kullanımı, src, alt, width, height gibi temel özellikleriyle örneklerle anlatılıyor.",
            questions: [
              {
                value:
                  "Aşağıdaki özniteliklerden hangisi resmin yolunu belirtir?",
                choices: ["alt", "width", "src", "height"],
              },
              {
                value:
                  "Bir resmin alternatif metnini belirtmek için hangi öznitelik kullanılır?",
                choices: ["title", "alt", "src", "width"],
              },
            ],
          },
        ],
      },
      {
        name: "TABLO VE LİSTELER",
        lessons: [
          {
            index: 1,
            name: "Tablo Etiketi",
            video_url:
              "https://www.youtube.com/embed/mlZ_va-h-6I?si=Y6ogd6hVHQj33txp",
            description:
              "Web sayfalarında verileri düzgün bir şekilde göstermek için <table>, <tr>, <td> etiketleri kullanılır.",
            questions: [
              {
                value:
                  "Tabloda yeni bir satır oluşturmak için hangi etiket kullanılır?",
                choices: ["<td>", "<tr>", "<th>", "<table>"],
              },
              {
                value:
                  "Tabloda bir hücre (sütun) oluşturmak için hangi etiket kullanılır?",
                choices: ["<tr>", "<td>", "<th>", "Hem B hem C doğru"],
              },
            ],
          },
          {
            index: 2,
            name: "Liste Etiketi",
            video_url:
              "https://www.youtube.com/embed/faQM8OYGm98?si=1aweZsXAshSbYlwc",
            description:
              "HTML'de bilgileri maddelemek veya numaralandırmak için kullanılır.",
            questions: [
              {
                value:
                  "Numaralı liste oluşturmak için hangi etiket kullanılır?",
                choices: ["<ul>", "<li>", "<ol>", "<list>"],
              },
              {
                value:
                  "Herhangi bir liste elemanında kullanılan ortak etiket hangisidir?",
                choices: ["<ul>", "<ol>", "<li>", "<list>"],
              },
            ],
          },
        ],
      },
      {
        name: "MEDYA VE GÖMÜLÜ İÇERİK ETİKETLERİ",
        lessons: [
          {
            index: 3,
            name: "Medya Etiketleri",
            video_url:
              "https://www.youtube.com/embed/FEc9MTZCQy0?si=6pv5D7a-LqgSOjz7",
            description:
              "Web sayfalarına medya eklemek için kullanılan temel etiketler: <img> (resim), <audio> (ses), <video> (video).",
            questions: [
              {
                value:
                  "Aşağıdakilerden hangisi medya dosyası eklemek için kullanılmaz?",
                choices: ["<img>", "<audio>", "<video>", "<div>"],
              },
            ],
          },
          {
            index: 4,
            name: "Iframe Etiketi",
            video_url:
              "https://www.youtube.com/embed/2iqiTtQTTOA?si=--udLVNu78BpORi4",
            description:
              "Web sayfalarına harici içerikleri (başka site, video, harita vs.) eklemek için kullanılan <iframe> etiketinin kullanımı.",
            questions: [
              {
                value:
                  "Harici bir web sayfasını sayfanıza gömmek için hangi etiket kullanılır?",
                choices: ["<img>", "<video>", "<iframe>", "<source>"],
              },
            ],
          },
        ],
      },
      {
        name: "FORM ETİKETLERİ",
        lessons: [
          {
            index: 1,
            name: "Form Etiketleri (Bölüm 1)",
            video_url:
              "https://www.youtube.com/embed/tAqtmGJK2xc?si=EdGOA4QqJOY7Brt8",
            description:
              "Kullanıcılardan bilgi almak için kullanılan form elemanları: <form>, <input>, <button>.",
            questions: [
              {
                value:
                  "Kullanıcıdan veri almak için kullanılan ana etiket hangisidir?",
                choices: ["<input>", "<form>", "<button>", "<label>"],
              },
              {
                value:
                  "Şifre alanını oluşturmak için input'un type değeri ne olmalıdır?",
                choices: ["text", "password", "email", "number"],
              },
            ],
          },
        ],
      },
      {
        name: "SORULAR",    
        lessons: [
          {
            index: 1,
            name: "Genel Tekrar Soruları",
            video_url: "",
            description: "HTML ile ilgili genel tekrar soruları.",
            questions: [
              {
                value: "Aşağıdakilerden hangisi HTML'nin açılımıdır?",
                choices: [
                  "Hyper Text Markup Language",
                  "High Text Machine Language",
                  "Home Tool Markup Language",
                  "Hyper Transfer Markup Language",
                ],
              },
              {
                value: "Aşağıdakilerden hangisi HTML ile yapılamaz?",
                choices: [
                  "Web sayfasına resim ekleme",
                  "Sayfaya stil uygulama",
                  "Dinamik hesaplama yapma",
                  "Metinleri bölümlere ayırma",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
