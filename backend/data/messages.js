const emailData = {
  uyeol: {
    title: "E-posta Onaylama | Koducuk",
    head: "Hoş geldiniz!",
    src: "https://img.icons8.com/clouds/100/000000/handshake.png",
    text: "Aramıza gireceğiniz için heyecanlıyız. İlk önce yapmanız gerekenler hesabını onayla. Aşağıdaki düğmeye basmanız yeterli.",
    button: "Hesabı Onaylayın",
  },
  profil: {
    title: "E-posta Güncelleme | Koducuk",
    head: "E-postanızı güncellemek ister misiniz?",
    src: "https://img.icons8.com/?size=100&id=AltjBjg7FDhG&format=png&color=000000",
    text: "Cevabınız evet ise, ilk önce yapmanız gerekenler yeni hesabını onayla. Aşağıdaki düğmeye basmanız yeterli.",
    button: "Onaylıyorum",
  },
  unuttum: {
    title: "Şifreniz Güncelleme | Koducuk",
    head: "Şifrenizi güncellemek ister misiniz?",
    src: "https://img.icons8.com/?size=100&id=jpVAuvLSFhBm&format=png&color=000000",
    text: "Cevabınız evet ise, ilk önce yapmanız gerekenler onaylayın. Aşağıdaki düğmeye basmanız yeterli.",
    button: "Onaylıyorum",
  },
};

exports.getMailContent = (type, href) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <title>${emailData[type].title}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
      /* Simplified CSS with better mobile support */
      body, table, td {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Lato', Helvetica, Arial, sans-serif;
      }
      
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        max-width: 100%;
      }
      
      .main-table {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      }
      
      .button {
        display: inline-block;
        padding: 15px 25px;
        background-color: #6a48f2;
        color: #ffffff !important;
        text-decoration: none;
        border-radius: 4px;
        font-weight: bold;
        transition: background-color 0.3s;
      }
      
      .button:hover {
        background-color:rgb(87, 56, 211);
      }
      
      @media screen and (max-width: 600px) {
        .mobile-padding {
          padding: 20px 15px !important;
        }
        .header-img {
          width: 80px !important;
          height: 80px !important;
        }
      }
    </style>
  </head>

  <body style="background-color: #f4f4f4; margin: 0; padding: 20px 0;">
    <!--[if mso]>
    <style type="text/css">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
    </style>
    <![endif]-->
    
    <table class="main-table" border="0" cellpadding="0" cellspacing="0">
      <!-- Header -->
      <tr>
        <td style="background-color: #6a48f2; padding: 20px; text-align: center;">
          <img src="https://cdn.prod.website-files.com/61d6943d6b5924685ac825ca/64a6a12136e8f756c9df3baa_k-combomark-white.svg" alt="Koducuk Logo" width="120" style="display: block; margin: 0 auto;">
        </td>
      </tr>
      
      <!-- Content Card -->
      <tr>
        <td style="background-color: #ffffff; padding: 40px 30px; border-radius: 8px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td style="text-align: center; padding-bottom: 30px;">
                <img src="${emailData[type].src}" 
                     alt="${emailData[type].head}" 
                     class="header-img"
                     width="100" 
                     height="100"
                     style="display: block; margin: 0 auto;">
                <h1 style="color: #333333; font-size: 28px; margin: 20px 0;">
                  ${emailData[type].head}
                </h1>
              </td>
            </tr>
            
            <tr>
              <td style="color: #666666; font-size: 16px; line-height: 1.6; padding-bottom: 30px;">
                ${emailData[type].text}
              </td>
            </tr>
            
            <tr>
              <td style="text-align: center; padding-bottom: 40px;">
                <a href="${href}" 
                   class="button" 
                   target="_blank"
                   style="color: #ffffff; text-decoration: none;">
                  ${emailData[type].button}
                </a>
              </td>
            </tr>
            
            <tr>
              <td style="border-top: 1px solid #eeeeee; padding-top: 30px; color: #999999; font-size: 14px;">
                <p style="margin: 0 0 10px;">Merhabalar,</p>
                <p style="margin: 0;">Koducuk Ekibi</p>
                
                <!-- Footer Links -->
                <p style="margin: 20px 0 0; font-size: 12px;">
                  <a href="https://koducuk.com/privacy" style="color: #999999;">Gizlilik Politikası</a> | 
                  <a href="https://koducuk.com/contact" style="color: #999999;">İletişim</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
