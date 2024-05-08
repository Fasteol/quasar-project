<template>
    <!-- <nav>
      <navbar/>
    </nav> -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet">
  <div id="app">
    <div class="textAll">
    <nav>
      <navbar />
    </nav>
  
    <section id="section1">
      <div class="container">
       <img src="../assets/images/sejarah.jpg" alt="sejarah" class="fotobkg"> 
       <div class="tulisan">
        <div class="upper">
          {{ uppertext }}
        </div>
        <div class="upper-2">
          {{ uppertext2 }}
          </div>
        </div>
      </div>
    </section>
  
    <!-- <section>
      <div class="info">
        <div class="info1">
          <p>Kota Cirebon merupakan kota yang memiliki nilai historis yang sangat kental terutama pada masa
            kerajaan dan penyebaran agama Islam di Pulau Jawa
            <br><br>Salah satu peninggalan pada masa
            kerajaan tersebut adalah sebuah bangunan yang hingga kini masih berdiri dengan kokoh di kota
            ini yaitu Rumah Adat Kasepuhan Cirebon.
          </p>
          <img src="../assets/images/macanalikasepuhan.png" alt="">
        </div>
      </div>
    </section> -->
  
    <section>
        <div class="info3">
          <div class="info3-text">
            <p class="jarak">Kota Cirebon merupakan kota yang memiliki nilai historis yang sangat kental terutama pada masa
            kerajaan dan penyebaran agama Islam di Pulau Jawa
            <br><br>Salah satu peninggalan pada masa
            kerajaan tersebut adalah sebuah bangunan yang hingga kini masih berdiri dengan kokoh di kota
            ini yaitu Rumah Adat Kasepuhan Cirebon.
            </p>
          </div>
         <img src="../assets/images/macanalikasepuhan.png" class="jarak2" style="border-radius: 5px">
        </div>
      </section>
  
  
    <section id="section2">
        <div class="info2">
          <img src="../assets/images/pendopo.png" class="info2img">
          <div class="info2-text">
            <p class="between">Pada abad XV (-+ 1430)
              <br><br>Pangeran Cakrabuwana Putra mahkota Kerajaan Pajajaran membangun Keraton yang kemudian
              diserahkan kepada putrinya, Ratu Ayu Pakungwati. Maka Keratonnya dinamai Keraton Pakungwati
              (hingga sekarang dikenal dengan sebutan Dalem Agung Pakungwati)
            </p>
          </div>
          <img src="../assets/images/timeline.png" alt="" class="time">
        </div>
    </section>
        
      <section id="section3">
        <div class="info3">
          <img src="../assets/images/timeline1.png" alt="" class="time1">
          <div class="info3-text">
            <p class="jarak">Pada abad XVI</p>
            <p class="jarak1"> <br>Sunan Gunung Jati wafat. Kemudian Pangeran Emas Mochammad Arifin, cicit dari Sunan
              Gunung Jati,
              bertahta menggantikannya. Kemudian pada tahun Candra Sangkala Tunggal Tata Gunaning Wong atau
              1451 Saka yaitu tahun 1529 Masehi beliau mendirikan Keraton baru sebelah barat daya Dalem Agung
              Pakungwati.
              Dan beliaupun bergelar Panembahan Pakungwati I.
            </p>
          </div>
          <img src="../assets/images/k1.png" alt="" class="jarak2">
        </div>
      </section>
  
      <section id="section4">
        <div class="info4">
          <img src="../assets/images/m1.png" alt="" class="distance">
          <div class="group4">
            <p class="jarak3">Pada -+ 1549 M </p>
            <p style="margin-top: -30px;"><br>Masjid Agung Sang Cipta Rasa kebakaran. Ratu Ayu Pakungwati yang sudah tua itu turut memadamkan api.
              Api dapat dipadamkan, namun Ratu Ayu Pakungwati kemudian wafat. Semenjak itu, nama atau sebutan Pakungwati
              dimuliakan dan diabadikan oleh nasab Sunan Gunung Jati.</p>
  
          </div><div class="timeline4"><img src="../assets/images/timeline2.png" alt="" class="time3"></div></div>
      </section>
  
      <section id="section5">
        <div class="info5">
          <img src="../assets/images/timeline3.png" alt="" class="time2">
          <div class="info5-text">
            <p class="jarak4" style="margin-top: 30px;">Pada -+ 1679 M</p>
            <p>
              Didirikan Keraton Kanoman oleh Sultan Anom I (Sultan Badridin). Maka semenjak itu, Keraton Pakungwati
              disebut
              Keraton Kasepuhan hingga sekarang dan sultannya bergelar Sultan Sepuh. Kasepuhan artinya tempat sepuh atau
              tua.
              Jadi, antara Kasepuhan dan Kanoman itu awalnya yang tua dan yang muda (kakak beradik). Lokasi bangunan
              Keraton
              Kasepuhan membujur dari utara ke Selatan atau menghadap ke utara, karena keraton-keraton di Jawa semuanya
              menghadap
              ke utara, artinya menghadap magnet dunia, artinya falsafahnya sang raja mengharapkan kekuatan.</p>
  
          </div>
          <div class="foto"><img src="../assets/images/n1.png" alt="" ></div>
        </div>
      </section>
      </div>
      </div>
      
    <section>
      <div class="footer">
  
        <div class="logo">
          <img src="../assets/images/logo_keraton.png" alt="">
          <p>KERATON <br>KASEPUHAN <br>CIREBON</p>
        </div>
        <div class="footer-col">
          <div class="footer-col-1">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Beranda</a></li>
              <li><a href="#">Sejarah</a></li>
              <li><a href="#">Booking</a></li>
              <li><a href="#">Objek Wisata</a></li>
            </ul>
          </div>
          <div class="footer-col-2">
            <h3>Socials</h3>
            <ul>
              <li><a href="#">Whatsapp</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Threads</a></li>
            </ul>
          </div>
          <div class="footer-col-3">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col-4">
            <h3>Subscribes your email for updates!</h3>
            <button class="button">Enter your email</button>
  
  
          </div>
        </div>
        <div class="adress">
          Jalan Kasepuhan 43
          Cirebon, Jawa Barat
          45114
        </div>
        <div class="lower">
          <div class="inlower">
            @2024 Keraton Kasepuhan Cirebon
          </div>
          <div class="susun">
            <p>In collaboration</p>
  
            <div class="collab">
              <img src="../assets/images/logo_keraton.png" alt="" class="foto1">
              <img src="../assets/images/1 931.svg" alt="" class="foto2">
              <img src="../assets/images/telkom.svg" alt="" class="foto3">
              <img src="../assets/images/bjb.svg" alt="" class="foto4">
  
            </div>
          </div>
        </div>
      </div>
    </section>
  
  
  </template>
  
  <script setup>
  // import navbar from "quasar-project/src/components/NavBar.vue";
  
  </script>
  
  <script>
  import navbar from '../components/NavBar.vue'
  export default {
    data() {
      return {
        uppertext: 'Warisan Leluhur Cirebon',
        uppertext2: 'Mengenal Lebih Dekat dengan Sejarah Keraton',
        
    
      };
      
    },
    components: {
      navbar
    }
  };
  
  </script>
  
  <style scoped>
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  @media only screen and (max-width: 1024px) {
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  .cover{
    background-size: cover;
    text-align: center;
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 120vh;
    flex-direction: column;
    background-position: center;
    color: white;
    font-family: Raleway, sans-serif;
    overflow-x: hidden;
  }
  .tulisan{
    margin-top: 2%; 
    margin-left: -8%;
  }
    .tulisan {
      margin-top: 5%;
      margin-left: 0%;
    }
    section {
      width: 100%;
      align-items: center;
      margin-left: auto;
      margin-top: 100px;
      overflow-x: hidden;
    }
    .footer {
      margin-top: 100px;
    }
    .footer-col-1 {
      margin-left: 0;
      width: auto;
    }
    .footer-col-2,
    .footer-col-3 {
      margin-left: 0;
    }
    .footer-col-4 {
      margin-left: 0;
      width: auto;
    }
    .adress {
      margin-top: 30px;
      margin-left: 0;
    }
    .lower {
      margin-left: 0;
      padding-left: 0;
    }
    .susun {
      padding-left: 0;
    }
    .info3 {
      width: 95%;
      margin-left: 2%;
    }
    #section2 .info2 {
      width:50%;
      margin-left: 20%;
    }
    #section2 .info2img {
      width: 80%;
      height: 15%;
      margin-left: 25%;
    }
    #section2 .between P {
      font-size: 26px;
      margin-top:5%;
      margin-left:10%
    }
    #section3 .info3 {
      width:60%;
      margin-left: 20%;
    }
    #section3 .info3-text {
      margin-top: -20px;
      width: 60%;
      font-size: 26px;
      margin-left: 0%;
    }
    #section3 .jarak2 {
      width: 79%;
      margin-left: 10%;
    }
  
    #section3 .time1{
      margin-left: 1%;
    }
    #section4 .info4 {
      width: 60%;
      margin-left: 10%;
    }
    #section4 .info4-text p {
      font-size: 20px;
      margin-top: 2%;
      margin-left: 2%;
      padding-left: 10%;
    }
    #section4 .group4 {
      margin-top: -80px;
      margin-left: -70px;
      font-size: 20px;
      padding-left: 10%;
    }
    #section4 .group4 p {
      
      margin-left: -13%;
      margin-top: 1px;
      font-size: 26px;
      line-height: 30px;
    }
    #section4 .timeline4 img{
      margin-left: -100px;
    }
    #section4 .distance{
      width: 60%;
      height: 15%;
      margin-right: 10%;
      margin-left: 47%;
    }
    #section5 .info5 {
      gap:4px;
      width:50%;
      margin-left: 9%;
    }
    #section5 .info5-text {
      width: 50%;
      font-size: 23px;
      margin-left: 2%;
      margin-top: 80px
    }
    #section5 .info5-text P{
      width: 400PX;
    }
    #section5 .info5-text p {
      font-size: 26px;
      margin-left: 0%;
      line-height: 40px;
    }
    #section5 .foto{
      width: 47%;
      margin-left: 31%;
    }
    #section5 .time2{
      margin-left: 1%;
    }
  }
  
  @media only screen and (min-width: 1440px) {
  .cover{
    background-size: cover;
    text-align: center;
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 120vh;
    flex-direction: column;
    background-position: center;
    color: white;
    font-family: Raleway, sans-serif;
  }
  .tulisan{
    margin-top: 2%; 
    margin-left: -8%;
  }
  
  }
  
  
  @media only screen and (min-width: 1024px) {
    .container {
      width: 100%;
    }
  .seluruh{
    margin-left: 525px;
  }
  .cover{
    width: 300%;
  }
  .tulisan{
    margin-top: -10%; 
    margin-left: 20%;
    
  }
  
  .info2 img {
    margin-left: 5%;
  }
  .info2 {
    margin-left: 5%
  }
  }
  .button {
   width:431px;
   height: 58px;
   border-radius: 10px;
   background-color: #123B32;
   color: #FFFFFF;
   text-align: left;
   padding-left: 22px;
   font-size: 20px;
   font-weight: 800;
   margin-top: 22px;
   line-height: 28px;
   font-family: "Raleway";
   border: none;
  
  }
  .textAll {
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: #212121;  
  }
  .fotobkg {
    width:100%;
    height: auto;
  }
  .upper{
    position: absolute;
    margin-top: -22%;
    margin-left: 33%;
    transform: translate(-50%, -50%);
    color: #FAE084;
    font-size: 2.4vw;
    width: 30%;
  
  }
  .upper-2 {
      position:absolute;
      margin-top: -14%;
      margin-left: 33%;
      transform: translate(-50%, -50%);
      color: #FFF6E0;
      font-size: 5vw;
      font-weight:400;
      width: 60%;
      text-align: center;
  }
  
  .info {
    margin-left: 108px;
    margin-right: 108px;
    padding-top: 77px;
  }
  
  .time {
    position: relative;
    margin-left: 24px;
    padding-bottom: 40px;
    margin-right: 50px;
  }
  .time1 {
    margin-left:-10px;margin-right: 5px;width:40px;    
  }
  
  .info3 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 114px;
  }
  
  .info3-text {
    font-size: 30px;
    font-weight: 400;
    color:#212121;
    margin-right: 22px;
    width: 500px;
    margin-top: 67px;
    line-height: 40px;
  }
  .jarak {
    margin-left: 29px;
   
  }
  .jarak1{
    margin-bottom: 57px;
    
    width:509px;
  }
  .jarak2 {
    padding-left: 90px;
  }
  .jarak4 {
    padding-top: 27px;
    padding-bottom: 17px;
    margin-left: 29px;
  }
  .jarak3{
   margin-right: 29px;
   margin-top: 30px;
  }
  
  
  
  .info4 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 67px;
  }
  .info4 p {
    font-size: 30px;
    font-weight: 400;
    color:#212121;
    text-align: right ;
    width: 542px;
    line-height: 40px;
  }
  .distance {
    margin-right: 100px;
  }
  .info4-text {
    display: flex;
    flex-direction: column;
    
    align-items: center;
    margin-right: 1px;
  }
  
  .info5 {
    margin-top: 158px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    margin-right: 108px;
    
    
  }
  
  .info5 p {
    margin-top: 20px;
  font-size: 30px;
  font-weight: 400;
  color: #212121;
  text-align: left;
  width: 500px;
  display: flex;
  line-height: 40px;
  }
  
  .info5 img {
  margin-left: 50px;
  }
  
  .foto {
    width:483px;
    height: 294px;
  }
  .foto1 {
   width:68px;
   height: 71px;
  }
  .foto2 {
   width:69px;
   height: 74px;
  }
  .foto3 {
   width:53px;
   height: 71px;
  }
  .foto4 {
   width : 100px;
   height: 49px;
  }
  .footer {
   width: 100%;
   height: auto;
   margin-top: 278px;
   position: relative;
    margin-bottom: 100px;
   
  } 
  a {
   text-decoration: none;
   color: #212121;
  }
  ul {
   list-style-type: none;
  }
  .footer-col {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  }
  
  .footer-col h3 {
   font-size: 30px;
   font-weight: 40px;
   display: inline-block;
   margin-bottom: 11px;
   margin-top: 76px;
  }
  .footer-col-1 {
   
   margin-left: 88px;
   width: 20vw;
   
  }
  
  
  
  .logo {
  font-size: 20px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  margin-left: 88px;
  
  
  }
  
  .logo img {
  width: 70px;
  margin-right: 9px;
  
  }
  
  .footer-col-2 {
  margin-left: 60px;
  }
  
  .footer-col-3 {
  margin-left: 60px;
  }
  
  .footer-col-4 {
  margin-left: 139px;
  width: 434px;
  }
  
  .footer-col li {
  color: #212121;
  }
  
  .footer-col li:not(:last-child) {
  margin-bottom: 11px;
  }
  
  .adress {
  width: 184px;
  height: 84px;
  font-size: 20px;
  font-weight: 400;
  margin-top: 62px;
  margin-left: 88px;
  }
  
  .lower {
  
  height: 142px;
  margin-left: 88px;
  display: flex;
  }
  
  .inlower {
  padding-top: 118px;
  position: absolute;
  
  
  }
  
  .collab {
  display: flex;
  flex-direction: row;
  gap: 46px;
  
  }
  
  .susun {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 46px;
  padding-left: 795px;
  }
  
  .info2 {
    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: 157px;
    width:auto;
    margin-left: -5vw;
  
   
  }
  .info2img {
    margin-left: -15%;
  }
   
  .between {
   padding-top: 15px;
  }
  .info2 p {
    font-size: 30px;
    font-weight: 400;
    color:#212121;
    text-align: right ;
    width: 500px;
    margin-bottom: 100px;
    margin-top:100px;
    line-height: 40px;
  }
  
  .info2-text {
    display: flex;
    flex-direction: row;
   
  }
  .info2 img {
    height: auto;
    border-radius: 10px;
    height: 426px;
  }
  </style>