<template>
 
    <section class="sec-home" id="section1">
      <div class="container">
        <div class="text1">
          <p class="wlcText"> Warisan Leluhur Cirebon</p>
          <p class="wlcText2"> Bersama Lestarikan <br> Keraton Tertua Di Kota Cirebon</p>
          <a href="https://your-link-here.com" target="_blank" rel="noopener" class="btn1"> <img class="btn1" src="./assets/btn1.png"> </a>
        </div>
      </div>
    </section>
    
    <section class="sec-home" id="section2">
      <div class="container">
        <div class="text"  >
          <p class="aboutText">Tentang</p>
          <h2 class="ksc2Text">Keraton Kesepuhan Cirebon</h2>
          <p class="sej1Text">Pada awal pembangunannya, Keraton Kasepuhan dibangun oleh Pangeran Emas Zainul Arifin dengan maksud untuk memperluas bangunan pesanggerahan Keraton Pangkuwati.</p>
        </div>
      </div>
    </section>


    <section class="sec-home" id="section3">
      <div class="container">
        <div class="text">
          <a href="https://your-link-here.com" target="_blank" rel="noopener"> <img src="./assets/Frame.png"> </a>
        </div>
      </div>
    </section>


    <section class="sec-home" id="section4">
      <div class="container">
        <div class="text">
          <p class="sej2Text">Sejarah</p>
          <h2 class="ksc4Text">Keraton Kesepuhan Cirebon</h2>
          <div class="card">
            <div class="card1">
              <a href="https://your-link-here.com" target="_blank" rel="noopener">
                <img src="./assets/sej.png" alt="sejarah1">
              </a>
            </div>
            <div class="card2">
              <a href="https://your-link-here.com" target="_blank" rel="noopener">
                <img src="./assets/sej2.png" alt="sejarah2">
              </a>
            </div>
           <div class="card3">
            <!-- <div class="card-text">Silsilah Keraton Cirebon</div> -->
              <a href="https://your-link-here.com" target="_blank" rel="noopener"> 
                <img src="./assets/sej3.png" alt="sejarah3">
              </a>
            </div>
          </div>
          <a href="https://your-link-here.com" target="_blank" rel="noopener"> 
            <img class="pls" src="./assets/btninfo.png">
          </a>
        </div>
      </div>
    </section>

    <section id="section5">
      <div class="container">
        <div class="text">
          <p class="eventText">Event</p>
          <p class="ksc5Text">Keraton Kesepuhan Cirebon</p>
        </div>
        <div class="card4">
          <img src="./assets/card4.png">
        </div>
        <div class="card5">
          <img src="./assets/card5.png">
        </div>
        <div class="card6">
          <img src="./assets/card6.png">
        </div>
        <p class="sec5Text">Hingga saat ini, Keraton Kasepuhan Cirebon tetap mempertahankan keaslian dan tradisi turun menurun dengan rutin melaksanakan upacara adat tradisi mereka.</p>
        <a href="https://your-link-here.com" target="_blank" rel="noopener"> 
            <img class="btnViewMore" src="./assets/btninfo.png">
          </a>
      </div>
    </section>

    <section class="sec-home" id="section6">
      <div class="container">
        <div class="text">
          <p class="owText">Objek Wisata</p>
          <p class="ksc6Text">Keraton Kesepuhan Cirebon</p>
        </div>
        <div class="tiket" >
          <div class="text2">
          <p class="sej3Text">Mari mengenal budaya kasepuhan Cirebon. Bersama kita lestarikan dan apresiasikan beragam budaya dan
            tradisi Indonesia dengan mengunjungi Keraton Kasepuhan Cirebon.</p>
            <a > <img class="btn2" src="./assets/tiket.png"> </a></div>
        </div>
      </div>
    </section>

    <section class="sec-home" id="section7">
    <div class="container">
      <div class="text">
        <p class="faqText">FAQ</p>
        <h2 class="tanyaText">Ada pertanyaan untuk kami?</h2>
      </div>
      <div class="faq">
        <div v-for="(faq, index) in faqs" :key="index">
          <button class="accordion" @click="toggleAccordion(index)">
         <span class="nomor">{{ faq.nomor }}</span> {{ faq.pertanyaan }}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{ active: faq.active }">
              <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 14.7075L16.7075 19.7075C16.6146 19.8005 16.5043 19.8742 16.3829 19.9246C16.2615 19.9749 16.1314 20.0008 16 20.0008C15.8686 20.0008 15.7385 19.9749 15.6171 19.9246C15.4957 19.8742 15.3854 19.8005 15.2925 19.7075L10.2925 14.7075C10.1049 14.5199 9.99945 14.2654 9.99945 14C9.99945 13.7346 10.1049 13.4801 10.2925 13.2925C10.4801 13.1049 10.7346 12.9994 11 12.9994C11.2654 12.9994 11.5199 13.1049 11.7075 13.2925L16 17.5863L20.2925 13.2925C20.3854 13.1996 20.4957 13.1259 20.6171 13.0756C20.7385 13.0253 20.8686 12.9994 21 12.9994C21.1314 12.9994 21.2615 13.0253 21.3829 13.0756C21.5043 13.1259 21.6146 13.1996 21.7075 13.2925C21.8004 13.3854 21.8741 13.4957 21.9244 13.6171C21.9747 13.7385 22.0006 13.8686 22.0006 14C22.0006 14.1314 21.9747 14.2615 21.9244 14.3829C21.8741 14.5043 21.8004 14.6146 21.7075 14.7075Z" fill="#D9A520"/>
            </svg>
          </button><svg width="1064" height="1" viewBox="0 0 1064 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="1064" y2="0.5" stroke="#212121"/>
</svg>
          <div class="panel" v-show="faq.active">
            <p class="jawaban">{{ faq.jawaban }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="sec-home" id="section8">
    <div class="container">
      <header class="header">
        <img src="./assets/icon.png"> <p class="headerText">Keraton Kesepuhan Cirebon</p>
      </header>
      <div class="text">
       
        <h4 class="qlText">Quick Links</h4>
        <div class="quickLinks">
        <ul>
       <li><a href="#">Beranda</a></li> 
       <li><a href="#">Sejarah</a></li>
       <li><a href="#">Booking</a></li>
       <li><a href="#">Objek Wisata</a></li>
      </ul>
       </div>
       
        <h4 class="socText">Social</h4>
        <div class="social">
        <ul>
       <li><a  href="#">WhatsApp</a></li> 
       <li><a href="#">Facebook</a></li>
       <li><a href="#">Instagram</a></li>
       <li><a href="#">Threads</a></li>
      </ul>
       </div>
      
        <h4 class="compText">Company</h4>
        <div class="company">
        <ul>
       <li><a href="#">About us</a></li> 
       <li><a href="#">Partners</a></li>
       <li><a href="#">Contact</a></li>
      </ul>
       </div>
       <h4 class="subscribe"> Subscribes your email for updates!</h4>
      </div>
      <input type="text" placeholder="Enter Your Email">
      <p class="alamat">Jalan Kesepuhan 43 Cirebon, Jawa Barat 45114</p>
      <footer>
        <p class="wm">@ 2024 Keraton Kasepuhan Cirebon</p>
        <p class="collab">In collaboration</p>
        <img src="./assets/icon.png" class="footer1">
        <img src="./assets/curaweda.png" class="footer2">
        <img src="./assets/telkom.png" class="footer3">
        <img src="./assets/bjb.png" class="footer4">

      </footer>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        { nomor: '01', pertanyaan: 'Bagaimana cara saya memesan tiket melalui website?', jawaban: 'Anda bisa pergi ke halaman tiket dan mulai memilih pilihan tiket yang anda inginkan.', active: false },
        { nomor: '02', pertanyaan: 'Bagaimana cara saya memesan tiket melalui website?', jawaban: 'Anda bisa pergi ke halaman tiket dan mulai memilih pilihan tiket yang anda inginkan.', active: false },
        { nomor: '03', pertanyaan: 'Bagaimana cara saya memesan tiket melalui website?', jawaban: 'Anda bisa pergi ke halaman tiket dan mulai memilih pilihan tiket yang anda inginkan.', active: false },
        { nomor: '04', pertanyaan: 'Bagaimana cara saya memesan tiket melalui website?', jawaban: 'Anda bisa pergi ke halaman tiket dan mulai memilih pilihan tiket yang anda inginkan.', active: false },
        { nomor: '05', pertanyaan: 'Bagaimana cara saya memesan tiket melalui website?', jawaban: 'Anda bisa pergi ke halaman tiket dan mulai memilih pilihan tiket yang anda inginkan.', active: false },
      ]
    };
  },
  methods: {
    toggleAccordion(index) {
      this.faqs.forEach((faq, idx) => {
        if (idx !== index) {
          faq.active = false;
        }
      });
      this.faqs[index].active = !this.faqs[index].active;
    }
  }
};
</script>


<style>
 @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap');
 @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

#section1 .container {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./assets/bg1.png');
  background-size: cover;
}
#section2 .container {
  background-image: url('./assets/batik.png');
}
#section3 .container {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./assets/keraton1.jpg');
  background-size: cover;
}
#section4 .container {
  background-image: url('./assets/batik.png');
}
#section5 .container {
  position: relative;
  background-image: url('./assets/keraton2.png');
  background-size: cover;
}

#section5 .container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
}

#section5 .container > .text {
  position: relative;
  z-index: 1;
}

#section6 .container {
  background-image: url('./assets/batik.png');
}
#section7 .container {
  background-image: url('./assets/batik.png');
  display: fixed;
}
#section8 .container {
  background-image: url('./assets/batik.png');
}
.container {
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
.wlcText {
  font-size: 24px; 
  color:#FFFD8C;
  position: absolute;
  left: 530px;
  top: 280px;
}
.wlcText2 {
  position: relative;
  font-size: 64px;
  top: 30px;
}
.btn1 {
  top: 250px;
  left: 320px;
  position: absolute; 
}
.btn1:hover {
  filter: brightness(70%);
}
.aboutText {
  text-align: center;
  font-size: 25px; 
  font-family: 'Inria Serif'; 
  color: #DAA520;
  top: -90px;
  position: relative;
}

.ksc2Text {
  text-align: center;
  top: -100px;
  position: relative;
  color: #212121;
  font-family: 'Inria Serif', Bold; 
  font-size: 40px;
  width: 485px;
  line-height: 40px;
}

.sej1Text {
  text-align: center;
  position: absolute;
  top: 350px;
  font-family: 'Raleway';
  width: 457px;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #212121;



}
.sej2Text {
  text-align: center;
  font-size: 25px; 
  font-family: 'Inria Serif'; 
  color: #DAA520;
  margin-bottom:50px;

}
.ksc4Text {
  position: relative;
  color: #212121; 
  font-size: 40px;
  font-family: 'Inria Serif'; 
  width: 485px;
  top: -40px;
  line-height: 40px;
}
.owText {
  font-size: 25px; 
  font-family: 'Inria Serif'; 
  color: #DAA520;
position: absolute;
width: 153px;
height: 30px;
left: 563px;
top: 60px;
line-height: 30px;
}
.ksc6Text {
position: absolute;
width: 485px;
height: 96px;
left: 398px;
top: 90px;
font-family: 'Inria Serif';
font-style: normal;
font-weight: 700;
font-size: 40px;
color: #212121;
}
.sej3Text {
position: absolute;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
color: #000000;
text-align: left;
}
 .btn2 {
  display: flex;
  flex-direction: row;
  align-items: left;
  padding: 5px;
  gap: 10px;
  position: absolute;
  top: 150px;
  left: -5px;
 }
.card1 {
  position: absolute;
  left: 57px;
  transition: transform 0.3s ease;
}
.card1:hover {
  transform: scale(1.1); 

}
.card1:hover img {
  filter: brightness(70%); 
}
.card1 img{
  border-radius: 50px;
  width: 100%;
  height: 100%;
  top: -5px;
  position: relative;
}

.card2 img {
  border-radius: 50px;
  width: 78%;
  height: 78%;
  position: relative;
  top: -30px;
}
.card2 {
  transition: transform 0.3s ease;
}
.card2 :hover {
  transform: scale(1.1); 
}
.card2:hover img {
  filter: brightness(70%); 
}

.card3 {
  position: absolute;
  right: 57px; 
  transition: transform 0.3s ease;
  display: inline-block;
}
.card3 img{
  position: relative;
  border-radius: 50px;
  width: 100%;
  height: 100%;
  top: -380px;
  display: block;
}
.card-text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  top: -200px;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.card3 :hover {
  transform: scale(1.1); 
}
.card3:hover img {
  filter: brightness(70%); 
}
.pls {
  position: relative;
  top: -10px;
  
}
.pls:hover{
  filter: brightness(70%);
}
.tiket {
  background: linear-gradient(90deg, rgba(218, 165, 32, 0.5) 0%, rgba(18, 59, 50, 0.5) 100%);
  width: 100%;
  height: 45%;
  position: relative; 
  margin-top: 158px;
}

.text2 {
  position: absolute;
  font-family: 'Raleway';
  font-style: normal;
  width: 557px;
  height: 112px;
  left: 93px;
  top: 80px;
  justify-content: left;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
}

.card4 img{
  position: absolute;
  width: 342px; 
  height: 313px; 
  left: 190px;
  top: 224px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  border-radius: 10px;
}
.card5 img {
  position: absolute;
  width: 236px; 
  height: 313px; 
  left: 589px;
  top: 224px;
  border-radius: 10px;
}
.card6 img {
  position: absolute;
  width: 236px; 
  height: 313px; 
  left: 880px;
  top: 224px;
  border-radius:10px;
}
.sec5Text {
position: absolute;
text-align: center;
width: 670px;
height: 84px;
top: 550px;
font-family: 'Raleway';
font-size: 20px;
color: #FFFFFF;
}
.eventText {
  position: absolute;
  text-align: center;
  top: -350px;
  left: -40px;
  font-family: 'Inria Serif';
  font-size: 25px;
  color: #FAE084;
}
.ksc5Text {
  position: absolute;
  text-align: center;
  width: 485px;
  top: -330px;
  left:-245px;
  font-family: 'Inria Serif';
  font-size: 40px;
  line-height: 48px;
  color: #FFFFFF;
}
.btnViewMore {
display: flex;
flex-direction: row;
align-items: center;
padding: 5px;
gap: 10px;
position: absolute;
width: 214.93px;
height: 44px;
left: 538px;
top: 679px;
}
.faqText {
  position: relative;
  font-family: 'Inria Serif';
  font-size: 25px;
  top: -150px;
  text-align: center;
  color:#D9A520;
}
.tanyaText{
  position: absolute;
  width: 300px;
  font-family: 'Inria Serif', Bold;
  font-style: normal;
  font-size: 25px;
  text-align: center;
  color:#212121;
  top: 50px;
  left: 525px;
}
.faq {
  position: relative;
  top: -10px;
}
.accordion {
  display: block;
  background-color: transparent;
  border: 0px;
  border-bottom: 1px, black;
  font-family: 'Raleway';
  font-size: 25px;
  color:#212121;
  margin-bottom: 20px;
}

  .accordion .nomor {
  margin-right: 5px; 
font-family: 'Raleway';
font-weight: 700;
font-size: 20px;
color:#212121;
}
.accordion svg {
  position: absolute;
left: 1000px;

}
.accordion svg.active {
  transform: rotate(180deg); 
}
.jawaban {
  color: black;
  text-align: left;
}
.header img {
  position: absolute;
  width: 68px;
  height: 70.62px;
  left: 88px;
  top: 155px; 
}

.headerText {
  position: absolute;
  text-align:left;
  width: 139px;
  height: 84px;
  left: 165px;
  top: 130px; 
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #212121;
}
li a {
  color: black; 
  text-decoration: none;
}
.qlText {
  position: absolute;
width: 159px;
height: 40px;
left: 88px;
top: 293px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 40px;
color:#212121;
}
.socText {
position: absolute;
width: 99px;
height: 40px;
left: 307px;
top: 293px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 40px;
color: #212121;
}
.compText{
position: absolute;
width: 135px;
height: 40px;
left: 466px;
top: 293px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 40px;
color: #212121;


}
.quickLinks {
  position: absolute;
width: 159px;
height: 196px;
left: 50px;
top:370px;
text-align: left;
}
ul li {
  margin-bottom: 10px;
}
.social {
position: absolute;
width: 99px;
height: 196px;
left: 275px;
top: 370px;
text-align: left;

}
.company {
position: absolute;
width: 135px;
height: 157px;
left: 415px;
top: 370px;


}
.subscribe {
position: absolute;
width: 434px;
height: 80px;
left: 740px;
top: 293px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 40px;
text-align: left;
color: #212121;


}
input {
  position: absolute;
  width: 431px;
  height: 58px;
  left: 740px;
  top: 430px;
  background: #123B32;
  border-radius: 10px;
  border: 0px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  color: #FFFFFF;
  padding-left: 10px; 
}

input::placeholder {
  color: white;
  
}
.alamat {
  
position: absolute;
width: 184px;
height: 84px;
left: 88px;
top: 551px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
text-align: left;
color: #212121;


}
.wm {

position: absolute;
width: 264px;
height: 24px;
left: 88px;
top: 725px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #212121;


}
.collab {
position: absolute;
width: 143px;
height: 24px;
left: 886px;
top: 625px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #212121;


}
.footer1{
  position: absolute;
width: 68px;
height: 70.62px;
left: 740px;
top: 682px;

}
.footer2 {
position: absolute;
width: 69px;
height: 74px;
left: 854px;
top: 681px;
}
.footer3 {
position: absolute;
width: 53px;
height: 71px;
left: 969px;
top: 682px;
}
.footer4 {
position: absolute;
width: 100px;
height: 49.01px;
left: 1068px;
top: 693px;
}
</style>
