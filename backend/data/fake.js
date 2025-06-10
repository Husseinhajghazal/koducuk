const courses = [
  {
    name: "Python",
    image_url: "",
    sections: [
      {
        name: "Kurulum Giriş",
        lessons: [
          {
            index: 0,
            name: "kurulum 1",
            video_url:
              "https://www.youtube.com/embed/2c8ylB855yU?si=DURBDiyaAvpyEJx6",
            description: "kurulum 1",
            questions: [
              {
                value: "Python kurulumu için hangi adımlar izlenmelidir?",
                choices: [
                  "Python'un resmi web sitesinden indirilip kurulum yapılmalıdır.",
                  "Sadece bir metin editörü yeterlidir.",
                  "Python kurulumu gereksizdir.",
                  "Python, sadece Linux sistemlerde çalışır.",
                ],
                correct_choice: 0,
              },
              {
                value:
                  "Python kurulumundan sonra hangi komutla Python sürümünü kontrol edebiliriz?",
                choices: [
                  "python --version",
                  "py --version",
                  "python version",
                  "py version",
                ],
                correct_choice: 0,
              },
            ],
          },
          {
            index: 1,
            name: "kurulum 2",
            video_url:
              "https://www.youtube.com/embed/NXamdLWSJIw?si=9xnU2KJ7b73YwPMR",
            description: "kurulum 2",
            questions: [
              {
                value: "Python kurulumundan sonra hangi IDE'yi kullanabiliriz?",
                choices: [
                  "Visual Studio Code",
                  "Notepad",
                  "Microsoft Word",
                  "Adobe Photoshop",
                ],
              },
              {
                value:
                  "Python kurulumundan sonra hangi komutla Python betiğini çalıştırabiliriz?",
                choices: [
                  "python script.py",
                  "run script.py",
                  "execute script.py",
                  "start script.py",
                ],
              },
            ],
          },
          {
            index: 2,
            name: "kurulum 3",
            video_url:
              "https://www.youtube.com/embed/Pz6LoHve1a4?si=qydBzPiUtYHH32DE",
            description: "kurulum 3",
            questions: [
              {
                value:
                  "Python kurulumundan sonra hangi komutla Python REPL (Read-Eval-Print Loop) moduna geçebiliriz?",
                choices: ["python", "py", "python shell", "py shell"],
              },
              {
                value:
                  "Python kurulumundan sonra hangi komutla bir Python dosyasını çalıştırabiliriz?",
                choices: [
                  "python dosya.py",
                  "run dosya.py",
                  "execute dosya.py",
                  "start dosya.py",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Temeller",
        lessons: [
          {
            index: 0,
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
                correct_choice: 0,
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
                correct_choice: 0,
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
                correct_choice: 0,
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
                correct_choice: 0,
              },
            ],
          },
          {
            index: 1,
            name: "kullanıcı girişi",
            video_url:
              "https://www.youtube.com/embed/79grzjKsIkI?si=nGsLP9ZglUcjGHaj",
            description:
              "Kullanıcıdan isim ve favori yemek bilgisi almak için Python dilinde basit bir uygulama geliştirilmiştir. Program, kullanıcıdan aldığı bilgileri birleştirip ekrana yazdırmaktadır.",
            questions: [
              {
                value:
                  "Kullanıcıdan isim ve favori yemek bilgisi almak için hangi fonksiyon kullanılır?",
                choices: ["print()", "str()", "int()", "input()"],
                correct_choice: 3,
              },
              {
                value:
                  "Kullanıcıdan alınan isim ve yemek bilgilerini birleştirmek için hangi operatör kullanılır?",
                choices: ["-", "+", "*", "/"],
                correct_choice: 1,
              },
              {
                value:
                  "Aşağıdaki kod parçasında hangi değer ekrana yazdırılır? \n\nname = input('Adınızı girin: ')\nfavorite_food = input('Favori yemeğiniz nedir? ')\nprint(name + ' en sevdiği yemek ' + favorite_food)",
                choices: [
                  "Adınız en sevdiği yemek None",
                  "None en sevdiği yemek",
                  "Adınız en sevdiği yemek",
                  "Adınız en sevdiği yemek None None",
                ],
                correct_choice: 2,
              },
            ],
          },
          {
            index: 2,
            name: "tür değişimi",
            video_url:
              "https://www.youtube.com/embed/wTsNlDkU7zM?si=is2mdJLzlfMWjoYJ",
            description:
              "Python programlama dilinde matematiksel işlemler oldukça basittir. Kullanıcıdan alınan sayılarla toplama, çarpma gibi işlemler yapılabilir ve bu işlemler için tür dönüşümü gereklidir.",
            questions: [
              {
                value:
                  "Python'da kullanıcıdan alınan bir değeri sayıya dönüştürmek için hangi fonksiyon kullanılır?",
                choices: ["str()", "int()", "float()", "input()"],
                correct_choice: 1,
              },
              {
                value:
                  "Aşağıdaki kod parçasında hangi değer ekrana yazdırılır? \n\nnum1 = input('Bir sayı girin: ')\nnum2 = input('Başka bir sayı girin: ')\nprint(num1 + num2)",
                choices: [
                  "Sayıların toplamı",
                  "Sayıların çarpımı",
                  "Sayıların string olarak birleştirilmiş hali",
                  "Hata mesajı",
                ],
                correct_choice: 2,
              },
              {
                value:
                  "Aşağıdaki kod parçasında hangi değer ekrana yazdırılır? \n\nnum1 = int(input('Bir sayı girin: '))\nnum2 = int(input('Başka bir sayı girin: '))\nprint(num1 + num2)",
                choices: [
                  "Sayıların toplamı",
                  "Sayıların çarpımı",
                  "Sayıların string olarak birleştirilmiş hali",
                  "Hata mesajı",
                ],
                correct_choice: 0,
              },
            ],
          },
          {
            index: 3,
            name: "string kullanımı",
            video_url:
              "https://www.youtube.com/embed/sRnrKdehLd4?si=r9WHMUZOPIre23ri",
            description:
              "Bu videoda, Python programlama dilinde metinler (stringler) üzerinde nasıl çalışılır, temel string işlemleri ve önemli özellikleri öğreniyoruz. Başlangıç seviyesine uygun, pratik örneklerle zenginleştirilmiş bir anlatım.",
            questions: [
              {
                value: "Python'da string bir değişken nasıl tanımlanır?",
                choices: [
                  "string = 'Merhaba Dünya'",
                  "string = Merhaba Dünya",
                  "string = 'Merhaba Dünya'",
                  "string = 'Merhaba' + 'Dünya'",
                ],
                correct_choice: 2,
              },
              {
                value:
                  "Aşağıdaki kod parçasında hangi değer ekrana yazdırılır? \n\ntext = 'Python'\nprint(text[0])",
                choices: ["P", "y", "Python", "Hata verir"],
                correct_choice: 0,
              },
              {
                value:
                  "Aşağıdaki kod parçasında hangi değer ekrana yazdırılır? \n\ntext = 'Python'\nprint(text[1:4])",
                choices: ["Pyt", "yth", "ytho", "Hata verir"],
                correct_choice: 1,
              },
            ],
          },
          {
            index: 4,
            name: "matematik işlemler",
            video_url:
              "https://www.youtube.com/embed/QzuyCMYAFf4?si=ccFEDrVwnTjsyonT",
            description:
              "Bu videoda, Python'da sayılarla nasıl işlemler yapılır, toplama, çıkarma, çarpma, bölme gibi temel matematik işlemlerini ve operatörleri öğreniyoruz. Başlangıç seviyesi için ideal!",
            questions: [
              {
                value:
                  "Python'da toplama işlemi için hangi operatör kullanılır?",
                choices: ["+", "-", "*", "/"],
                correct_choice: 0,
              },
              {
                value:
                  "Aşağıdaki kod parçasında hangi değer ekrana yazdırılır? \n\nnum1 = 10\nnum2 = 5\nprint(num1 + num2)",
                choices: ["15", "105", "5", "Hata verir"],
                correct_choice: 0,
              },
              {
                value:
                  "Aşağıdaki kod parçasında hangi değer ekrana yazdırılır? \n\nnum1 = 10\nnum2 = 5\nprint(num1 * num2)",
                choices: ["50", "15", "5", "Hata verir"],
                correct_choice: 0,
              },
            ],
          },
        ],
      },
      {
        name: "Koşullu ifadeler - Mantıksal operatörler",
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
                value:
                  "Python'da koşullu ifadeler hangi anahtar kelimelerle başlar?",
                choices: ["if", "else", "elif", "all of the above"],
                correct_choice: 3,
              },
              {
                value:
                  "Aşağıdaki kod parçasında hangi değer ekrana yazdırılır? \n\nx = 10\nif x > 5:\n    print('Büyük')\nelse:\n    print('Küçük')",
                choices: [
                  "Büyük",
                  "Küçük",
                  "Hata verir",
                  "Hiçbir şey yazdırmaz",
                ],
                correct_choice: 0,
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
                value:
                  "Python'da mantıksal operatörlerden hangisi iki koşulun da doğru olması durumunda True döner?",
                choices: ["and", "or", "not", "xor"],
                correct_choice: 0,
              },
              {
                value:
                  "Aşağıdaki kod parçasında hangi değer ekrana yazdırılır? \n\nx = 5\ny = 10\nif (x > 0) and (y > 0):\n    print('Her ikisi de pozitif')\nelse:\n    print('En az biri negatif')",
                choices: [
                  "Her ikisi de pozitif",
                  "En az biri negatif",
                  "Hata verir",
                  "Hiçbir şey yazdırmaz",
                ],
                correct_choice: 0,
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
        name: "Diziler",
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
                correct_choice: 0,
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
                correct_choice: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Html",
    image_url: "",
    sections: [
      {
        name: "Giriş",
        lessons: [
          {
            index: 0,
            name: "HTML'e Giriş",
            video_url:
              "https://www.youtube.com/embed/jiCSs0Weiqk?si=0T29BzMyzOj8rvvZ",
            description:
              "Bu videoda, web geliştirme dünyasının temelini oluşturan HTML dilini tanıyacak ve ilk web sayfanızı oluşturmaya başlayacaksınız.",
            questions: [
              {
                value: "Aşağıdakilerden hangisi HTML'nin açılımıdır?",
                choices: [
                  "Hyper Text Markup Language",
                  "High Text Machine Language",
                  "Home Tool Markup Language",
                  "Hyper Transfer Markup Language",
                ],
                correct_choice: 0,
              },
              {
                value: "Aşağıdakilerden hangisi HTML ile yapılamaz?",
                choices: [
                  "Web sayfasına resim ekleme",
                  "Sayfaya stil uygulama",
                  "Dinamik hesaplama yapma",
                  "Metinleri bölümlere ayırma",
                ],
                correct_choice: 2,
              },
            ],
          },
          {
            index: 1,
            name: "W3C Nedir?",
            video_url:
              "https://www.youtube.com/embed/Gw4R1XsavoM?si=yAhRBUVjdvwJIE5V",
            description:
              "W3C (World Wide Web Consortium), web teknolojileri için standartlar belirleyen uluslararası kuruluştur. HTML, CSS ve erişilebilirlik gibi temel web standartlarının oluşmasında rol oynar.",
            questions: [
              {
                value: "W3C nedir?",
                choices: [
                  "Bir web tarayıcısı",
                  "Web teknolojileri için standartlar belirleyen bir kuruluş",
                  "Bir programlama dili",
                  "Bir web sunucusu",
                ],
                correct_choice: 1,
              },
              {
                value: "W3C'nin amacı nedir?",
                choices: [
                  "Web standartlarını belirlemek ve geliştirmek",
                  "Web sitelerini barındırmak",
                  "Web uygulamaları geliştirmek",
                  "Web tarayıcıları oluşturmak",
                ],
                correct_choice: 0,
              },
            ],
          },
        ],
      },
      {
        name: "Temeller",
        lessons: [
          {
            index: 0,
            name: "Görüntü Seviyeleri (Div, Span)",
            video_url:
              "https://www.youtube.com/embed/sRo1eoW7PeA?si=-Cd1OPFfnOwc3Psf",
            description:
              "Sayfa yapısını düzenlemek için kullanılan temel etiketler: <div> (blok düzeyinde) ve <span> (satır içi).",
            questions: [
              {
                value:
                  "Aşağıdaki etiketlerden hangisi blok düzeyinde bir öğedir?",
                choices: ["<div>", "<span>", "<p>", "<a>"],
                correct_choice: 0,
              },
              {
                value: "Aşağıdaki etiketlerden hangisi satır içi bir öğedir?",
                choices: ["<div>", "<span>", "<p>", "<h1>"],
                correct_choice: 1,
              },
            ],
          },
          {
            index: 1,
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
                correct_choice: 0,
              },
              {
                value: "<p> etiketi ne için kullanılır?",
                choices: [
                  "Başlık yazmak için",
                  "Paragraf oluşturmak için",
                  "Maddeleme yapmak için",
                  "Link eklemek için",
                ],
                correct_choice: 1,
              },
            ],
          },
          {
            index: 2,
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
                correct_choice: 1,
              },
              {
                value:
                  "İtalik yazı yazmak için kullanılan etiket aşağıdakilerden hangisidir?",
                choices: ["<b>", "<i>", "<u>", "<s>"],
                correct_choice: 1,
              },
            ],
          },
          {
            index: 3,
            name: "Alıntılama Etiketleri",
            video_url:
              "https://www.youtube.com/embed/nF9ME5hPZ9k?si=HjhudUOcSUGX8wcT",
            description:
              "<blockquote> ve <q> etiketleri ile hem blok hem satır içi alıntılar yapabilirsiniz.",
            questions: [
              {
                value: "Satır içi alıntı yapmak için hangi etiket kullanılır?",
                choices: ["<blockquote>", "<quote>", "<q>", "<cite>"],
                correct_choice: 2,
              },
              {
                value: "Uzun alıntılar için hangi etiket kullanılır?",
                choices: ["<q>", "<blockquote>", "<cite>", "<quote>"],
                correct_choice: 1,
              },
            ],
          },
          {
            index: 4,
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
                correct_choice: 2,
              },
              {
                value:
                  "Bir resmin alternatif metnini belirtmek için hangi öznitelik kullanılır?",
                choices: ["title", "alt", "src", "width"],
                correct_choice: 1,
              },
            ],
          },
        ],
      },
      {
        name: "Tablo ve Liste Etiketleri",
        lessons: [
          {
            index: 0,
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
                correct_choice: 1,
              },
              {
                value:
                  "Tabloda bir hücre (sütun) oluşturmak için hangi etiket kullanılır?",
                choices: ["<tr>", "<td>", "<th>", "Hem B hem C doğru"],
                correct_choice: 3,
              },
            ],
          },
          {
            index: 1,
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
                correct_choice: 2,
              },
              {
                value:
                  "Herhangi bir liste elemanında kullanılan ortak etiket hangisidir?",
                choices: ["<ul>", "<ol>", "<li>", "<list>"],
                correct_choice: 2,
              },
            ],
          },
        ],
      },
      {
        name: "Medya & Gömülü İçerik Etiketleri",
        lessons: [
          {
            index: 0,
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
                correct_choice: 3,
              },
            ],
          },
          {
            index: 1,
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
                correct_choice: 2,
              },
            ],
          },
        ],
      },
      {
        name: "Form Etiketleri",
        lessons: [
          {
            index: 0,
            name: "Form Etiketleri (Bölüm 1)",
            video_url:
              "https://www.youtube.com/embed/tAqtmGJK2xc?si=EdGOA4QqJOY7Brt8",
            description:
              "Kullanıcılardan bilgi almak için kullanılan form elemanları: <form>, <input>, <button>.",
            questions: [
              {
                value:
                  "Kullanıcıdan veri almak için kullanılan ana etiket hangisidir?",
                choices: ["<input>", "<button>", "<form>", "<label>"],
                correct_choice: 2,
              },
              {
                value:
                  "Şifre alanını oluşturmak için input'un type değeri ne olmalıdır?",
                choices: ["text", "password", "email", "number"],
                correct_choice: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "JavaScript",
    image_url: "",
    sections: [],
  },
  {
    name: "CSS",
    image_url: "",
    sections: [],
  },
  {
    name: "React",
    image_url: "",
    sections: [],
  },
  {
    name: "Next",
    image_url: "",
    sections: [],
  },
];

const users = [
  {
    first_name: "Hussein",
    last_name: "Haj Ghazal",
    email: "husseinghazal01@gmail.com",
    password: "Test1234",
    role: "ADMIN",
  },
  {
    first_name: "Muhammed",
    last_name: "Zarzour",
    email: "mhmd.zrzour@gmail.com",
    password: "Test1234",
  },
];

module.exports = { courses, users };
