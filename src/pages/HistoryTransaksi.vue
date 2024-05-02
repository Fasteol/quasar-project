<script setup>
import { ref, computed } from 'vue'; 
import { defineProps, defineExpose } from 'vue'; 
import NavBar from '../components/NavBar.vue';
import logoBJB from '../assets/images/bjb.png';
import PaymentPopup from '../components/PaymentPopup.vue';
import PaymentDropdown from '../components/PaymentDropdown.vue';
import router from '../router/index';
import AfterCheckoutViews from './AfterCheckoutViews.vue';;

const searchQuery = ref('');  
const detail = ref(false);
const cara = ref(false);
const selectedStatus = ref('sudahDigunakan');
const statusSelected = ref(false);
const { totalPayment } = defineProps(['totalPayment']);
const virtualAccount = ref(8883123456789012);
const {paymentPopup} = AfterCheckoutViews

const showPopup = ref(false)

const showPaymentPopup = () => {
  showPopup.value = true
}

const closePopup = () => {
  showPopup.value = false
}

  const openDetailTransaksi = (path) => {
  router.push(path); // Navigasi menggunakan path rute
  detail.value = !detail.value;
  
};

const closeDetailTransaksi = () => {
  detail.value = false;
};

const openMenungguPembayaran = () => {
  cara.value = !cara.value;
  showPaymentPopup();
};

const closeMenungguPembayaran = () => {
  cara.value = false;
};

const transactions = [
  {
    status: 'sudahDigunakan',
    label: 'Sudah digunakan',
    class: 'sudah__digunakan',
    cardClass: 'card-1',
    actions: [
      { label: 'Lihat detail transaksi', handler: openDetailTransaksi },
      { label: '|'},
      { label: 'Bantuan', handler: null }, // Handler bisa diisi sesuai kebutuhan
    ],
  },
  {
    status: 'dapatDigunakan',
    label: 'Dapat digunakan',
    class: 'dapat__digunakan',
    cardClass: 'card-2',
    actions: [
      { label: 'Lihat detail transaksi', handler: openDetailTransaksi },
      { label: '|'},
      { label: 'Bantuan', handler: null }, // Handler bisa diisi sesuai kebutuhan
    ],
  },
  {
    status: 'expired',
    label: 'Expired',
    class: 'expired',
    cardClass: 'card-3',
    actions: [
      { label: 'Lihat detail transaksi', handler: openDetailTransaksi },
      { label: '|'},
      { label: 'Bantuan', handler: null },
    ],
  },
  {
    status: 'menungguPembayaran',
    label: 'Menunggu pembayaran',
    class: 'menunggu__pembayaran',
    cardClass: 'card-4',
    actions: [
      {
        label: 'Lihat detail',
        handler: () => openDetailTransaksi('/aftercheckout'), // Menggunakan path rute
      },
      { label: '|' },
      { label: 'Cara Pembayaran', handler: openMenungguPembayaran },
    ],
  },
];

const currentTransaction = computed(() => {
  return transactions.find(transaction => transaction.status === selectedStatus.value);
});


const copyContent = (content) => {
  if (content === 'copyVirtualAccount') {
    navigator.clipboard
      .writeText(virtualAccount.value)
      .then(() => {
        console.log('Konten berhasil disalin!');
      })
      .catch((err) => {
        console.error('Gagal menyalin konten:', err);
      });
  } else {
    navigator.clipboard
      .writeText(totalPayment.trim())
      .then(() => {
        console.log('Konten berhasil disalin!');
      })
      .catch((err) => {
        console.error('Gagal menyalin konten:', err);
      });
  }
};

const displayedVirtualAccount = computed(() => {
  const virtualAccountString = virtualAccount.value.toString();
  const firstDigits = virtualAccountString.substring(0, 4);
  return firstDigits + 'xxxxxxxx';
});

defineExpose({
  showPaymentPopup,
  displayedVirtualAccount 
});
</script>

<template>
<div class="all-content">
  <div> 
    <nav class="navbar">
      <NavBar />
    </nav>
    <div class="content">
      <div>
        <h1 class="title">History transaksi</h1>
      </div>
      <div class="container">
        <div class="form-input">
          <div class="search">
            <label for="search" class="search-label">
              <img src="../assets/svg/search.svg" class="search-icon">
              <input type="search" v-model="searchQuery" id="search" name="search" placeholder="Cari transaksi" class="Pencarian">
            </label>
          </div>
          <div class="date">
            <input value="Pilih tanggal" type="date" class="tanggal" placeholder="Pilih tanggal">
          </div>
          <div class="status">
            <select name="Status" placeholder="status" value="Status" v-model="selectedStatus" @change="statusSelected = true" class="custom-select">
              <option value="sudahDigunakan">Sudah digunakan</option>
              <option value="dapatDigunakan">Dapat digunakan</option>
              <option value="expired">Expired</option>
              <option value="menungguPembayaran">Menunggu pembayaran</option>
            </select>
          </div>
        </div>
      </div>
      </div>
      <div v-if="currentTransaction" class="tabel">
  <div v-for="transaction in transactions" :key="transaction.status" :class="currentTransaction.cardClass" class="tiket">
    <div class="tiket__header-container">
      <img src="../assets/images/Vector.png" alt="icon-tiket" class="icon-tiket">
      <p>Tiket</p>
      <label>17 Agu 2023</label>
      <p :class="transaction.class">{{ transaction.label }}</p>
    </div>
    <div class="tiket__content">
      <img src="../assets/images/img-1.jpg" alt="">
      <div class="tiket__content-details">
        <h6>Tiket Masuk Keraton Kasepuhan Cirebon+Museum+...</h6>
        <div class="label">
          <label class="labelharga">1 tiket x Rp. 10.000</label><br>
          <label>+2 tiket lainnya</label>
        </div>
        <div class="total">
          <div class="info">
            <p class="total__belanja">Total belanja</p>
            <p class="hrga">Rp. 33.500</p>
          </div>
          <div class="actions">
            <a v-for="(action, index) in transaction.actions" :key="index" @click="action.handler" class="detail">
              <p class="bantu">{{ action.label }}</p>
            </a>
            <a href="" class="bantuan" v-if="transaction.status !== 'menungguPembayaran'"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


   <!-- popup -->
   <section class="detail-transaksi" v-if="detail">
        <div class="popup">
            <div class="popup-content">
              <div class="header">
                <h1 class="p">Detail Transaksi</h1>
                <span class="close" @click="closeDetailTransaksi"><img src="../assets/images/close.png" class="Icon"></span>
                </div>
                <div class="isi">
                <small class="label-card1">Sudah digunakan</small>
                <div class="info__details">
                  <div class="flex-container">
                    <div>
                      <h6>No. Transaksi</h6>
                      <p>INV/20230817/MPL/3721648145</p>
                    </div>
                    <div>
                      <h6>Tanggal Pembelian</h6>
                      <p>15 Agustus 2023, 10:00 WIB</p>
                    </div>
                  </div>
                  <h6 class="detailtiket">Detail tiket</h6>
                  <div class="detail-tiket">
                  <img src="../assets/svg/gambarKraton.svg" alt="">
                  <div class="info-detail-tiket">
                    <p>Tiket Masuk Keraton Kasepuhan (UMUM)</p>
                    <label class="harga">17 Agu 2023; 10:00; </label>
                    <label class="harga">1 x Rp. 10.000</label>
                </div>
              </div>
              <div class="all-tiket">
              <small>Lihat semua tiket  <img src="../assets/svg/panahBawah.svg" alt=""></small>
              </div>
              <h6 class="info-pembayaran">Info pembayaran</h6>
              <div class="status-pembayaran">
                <h6>Status pembayaran</h6>
                <small>Berhasil</small>
              </div>
              <div class="pemesan">
                <h6>Pemesan</h6>
                <p>John Doe<label>/johndoe@keraton.com</label></p>
              </div>
              <div class="metode-pmbayaran">
                <h6>Metode Pembayaran</h6>
                <p>BJB Virtual Account</p>
              </div>
              <div class="total-harga-3-Tiket">
                <h6>Total Harga(3 Tiket)</h6>
                <p>Rp. 30.000</p>
              </div>
              <div class="biaya-layanan">
                <h6>Biaya Layanan</h6>
                <p>Rp. 3.500</p>
              </div>
              <div class="line">
                
              </div>
              <div class="total-biaya">
                <h6>Total Biaya</h6>
                <p>Rp. 33.500</p>
              </div>
              </div>
            </div>
            </div>
        </div>
    </section>


   
    <section class="detail-transaksi" v-if="cara">
    <div class="popup">
      <div class="popup-content">
        <div class="header">
          <h1 class="p">Cara Pembayaran</h1>
          <span class="close" @click="closeMenungguPembayaran"><img src="../assets/images/close.png" class="Icon"></span>
        </div>
        <div class="isi">
          <PaymentPopup ref="paymentPopup" :totalPayment="totalPayment" />
          <div class="waiting-payment__content-data">
            <div class="waiting-payment__content-desc">
              <p class="fs-h4">BJB Virtual Account</p>
              <img :src="logoBJB" alt="logoBJB" />
            </div>
            <div class="waiting-payment__content-desc">
              <div class="waiting-payment__content-sub fs-h5">
                <p style="color: rgba(94, 94, 94, 1)">Nomor Virtual Account</p>
                <p ref="copyVirtualAccount">{{ displayedVirtualAccount }}</p>
              </div>
              <span class="waiting-payment__copy-desc" @click="copyContent('copyVirtualAccount')">
                Salin <ph-clipboard-text :size="32" weight="bold" class="icon" />
              </span>
            </div>

            <div class="waiting-payment__content-desc">
              <div class="waiting-payment__content-sub fs-h5">
                <p style="color: rgba(94, 94, 94, 1)">Total Pembayaran</p>
                <p ref="copyTotalPayment">
                  Rp. <span>{{ totalPayment }}</span>
                </p>
              </div>
              <span class="waiting-payment__copy-desc" @click="copyContent('copyTotalPayment')">
                Salin <ph-clipboard-text :size="32" weight="bold" class="icon" />
              </span>
            </div>
            <div>
              <PaymentDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div> 
  </div>
    </template>




    
    
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
    
    .bantu{
      color: #000000;
    }
    
    body {
        font-family: 'Raleway', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f8f8f8;
    }

    .all-content{
      font-family: raleway;
    }

    .content{
      padding-top: 100px;
    }
    
    p.bantuan{
      color: #000000;
    }

    h1.title {
        text-align: center;
        margin-top: 50px;
        color: #333;
    }
    
    nav {
    position: fixed;
    width: 100%;
    top: 0; 
    background-color: #FFFFFF; 
    z-index: 1000; 
  }

    .Pencarian {
        width: 246px;
        height: 48px;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    
    .tanggal {
        width: 247px;
        height: 48px;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    
    select {
        width: 247px;
        padding: 12px;
        height: 48px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-sizing: border-box;
        margin-bottom: 10px;
        cursor: pointer;
    }


    option {
        padding: 10px;
        background-color: #ffffff;
        color: #333;
    }

    option:hover {
        background-color: #ddd;
    }

    option:selected {
        font-weight: bold;
    }

    
    .Pencarian::placeholder,
    .tanggal::placeholder {
        color: #999;
    }
    
    img{
        width: 200px;
        height: 98.95px;
    }
    
    .tabel {
        width: 779px;
        height: fit-content;
        border-radius: 12px;
        box-shadow: 0 9px 6px rgba(0, 0, 0, 0.1);
        margin: 0 auto; /* Mengatur margin horizontal secara otomatis untuk memusatkan */
        margin-top: 48px;
        padding: 10px;
        margin-bottom: 23px;
    }
    
    .icon-tiket {
        width: 18px;
        height: 13px;
    }

    .form-input{
      display: flex;
      justify-content: center;
      gap:20px;
    }
    
    .container{
      text-align: center;
      margin-top: 50px;
    }
    
    .tiket__header-container{
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    
    .tiket__content{
      display: flex;
      gap: 1rem;
    }

    .tiket p{
      font-size: 16px;
      font-weight: 700;
      font: bold;
    }
    
    .tiket label{
      padding-left: 9px;
      font-size: 14px;
      line-height: 22px;
      color: #5E5E5E;
    }
    
    .tiket__content h6{
        font-size: 20px;
        padding-top: 20px;
        line-height: 28px;
        padding-bottom: 10px;
    }
    
    p.sudah__digunakan {
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 4px;
      padding-bottom: 4px;
      background-color: #A9FFD6;
      color: #149B5A;
      border-radius: 5px;
      font-size: 12px; 
      font-weight: 700;
    }
    p.dapat__digunakan {
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 4px;
      padding-bottom: 4px;
      background-color: #A9D1FF;
      color: #146A9B;
      border-radius: 5px;
      font-size: 12px; 
      font-weight: 700;
    }
    p.expired {
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 4px;
      padding-bottom: 4px;
      background-color: #E4E4E4;
      color: #828180;
      border-radius: 5px;
      font-size: 12px; 
      font-weight: 700;
    }
    p.menunggu__pembayaran {
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 4px;
      padding-bottom: 4px;
      background-color: #FFCDA9;
      color: #9B5514;
      border-radius: 5px;
      font-size: 12px; 
      font-weight: 700;
    }
    
    .tiket__content img{
      padding-left: 29px;
      margin-top: 13px;
      width: 215px;
      height: 98.95px;
    }

    .custom-select option {
  background-color: #f0f0f0;
  color: #333;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.custom-select option:hover {
  background-color: #007bff;
  color: #fff;
}


    .label label{
        padding-right: 100px;
    }
    
    label.labelharga{
        font-weight: 400;
        line-height: 22px;

    }

    .total {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Mendorong elemen ke tepi kiri dan kanan */
    }

    .info {
        padding-top: 25px;
        display: flex;
        flex-direction: column; /* Menyusun paragraf total belanja dan harga secara vertikal */
        gap: 0.5rem; /* Jarak antara paragraf */
    }

    .actions {
        color: #333;
        padding-top: 45px;
        display: flex;
        gap: 0.5rem; /* Jarak antara paragraf */
    }
    .detail{
        color: #DAA520;
        text-decoration: none;
        cursor: pointer;
    }

    .cara{
      cursor: pointer;
    }
    .search-label {
      position: relative;
    }

    .search-icon {
        position: absolute;
        top: 50%;
        left: 15px; /* Sesuaikan posisi gambar */
        transform: translateY(-50%);
        width: 15px; /* Sesuaikan lebar gambar */
        height: auto; /* Sesuaikan tinggi gambar jika diperlukan */
    }

    .Pencarian {
        padding-left: 30px; /* Sesuaikan padding kiri agar input tidak tumpang tindih dengan gambar */
    }

    
    .bantuan {
          color: black;
          text-decoration: none;
          size: 16;
          font-weight: 400;
    }

    p.total__belanja {
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        padding-bottom: 1px;
    }

    p.hrga{
        font-size: 16px;
    }

    /* popup1 */

    .popup {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); 
        backdrop-filter: blur(2px);
        z-index: 999; 
    }

    .popup-content {
        background-color: #fefefe;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        width: 671px; 
        height: 512px;
        overflow-x: auto; 
        position: relative; 
        overflow-y: hidden;
        max-height: calc(100vh - 100px);
    }

    .popup-content .isi {
      overflow-y: auto; 
      max-height: calc(100vh - 340px);
    }

    .close {
        color: #aaa;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }
    

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;

    }

    .isi{
      padding: 30px;
      margin-left: 15px;
    }

    small.label-card1{
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 4px;
      padding-bottom: 4px;
      background-color: #A9FFD6;
      color: #149B5A;
      border-radius: 5px;
      font-size: 12px; 
      font-weight: 400;
    }

    .info__details{
      display: grid;
      grid-template-columns: 2 200px;
    }
    .header {
        box-shadow: 0  1px rgba(0, 0, 0, 0.2);
        background: white;
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 3.2rem;
    }
    .header h1{
      font-weight: 700;
      z-index: 1000;
    }

    .Icon{
      width: 20px;
      height: 20px;
    }

    .info__details {
        display: flex;
        flex-direction: column;
    }

    .flex-container{
      padding-top: 15px;
    }

    .flex-container > div {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
    }

    .flex-container h6{
      font-weight: 400;
      font-size: 20px;
    }

    .flex-container p{
      font-weight: 700;
      font-size: 16px;

    }

    .detail-tiket{
      align-items: center;
    }
    .detail-tiket h6{
      font-size: 20px;
      font-weight: 700;
      padding-top: 25px;
    }

    .detail-tiket img{
      width: 158px;
      height: 71.72px;
      margin: 18px;
    }

    .info-detail-tiket p,
    .info-detail-tiket label {
      display: flex;
      flex-direction: column ;
    }

    .info-detail-tiket {
      display: flex;
      flex-direction: column; /* Menyusun elemen dalam satu kolom */
    }

    .info-detail-tiket p,
    .info-detail-tiket label {
      margin-right: auto; /* Memindahkan teks ke pinggir kanan */
    }

    .info-detail-tiket label{
      background-color: white;
      color: hsl(0, 0%, 0%);
      line-height: 22px;
      font-size: 14px;
      font-weight: 400;
    }

    .info-detail-tiket p{
      line-height: 24px;
      font-size: 16px;
      font-weight: 400;
    }

    .detail-tiket{
      display: flex;
    }

    h6.detailtiket{
      font-size: 20px;
      font-weight: 700;
      padding-top: 30px;
    }

    .all-tiket img{
      width: 13.75px;
      height: 7.5px;
    }

    .all-tiket small{
      color: #DAA520;
      font-weight: 700;
      font-size: 12px;
    }

    .info-pembayaran {
      font-size: 20px;
      font-weight: 700;
      padding-top: 35px;
      padding-bottom: 20px;
    }

    .status-pembayaran{
      display: flex;
      gap: 20rem;
      padding-bottom: 8px;
    }

    .status-pembayaran h6{
      font-size: 20px;
      font-weight: 400;
      padding-right: 20px;
    }

    .status-pembayaran small{
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 4px;
      padding-bottom: 4px;
      background-color: #A9FFD6;
      color: #149B5A;
      border-radius: 5px;
      font-size: 12px; 
      font-weight: 400;
    }

    .pemesan {
      display: flex;
      gap: 15.8rem;
      padding-top: 8px;
      padding-bottom: 8px;
    }

    .pemesan h6{
      font-size: 20px;
      font-weight: 400;
    }
    .pemesan label{
      background-color: #ffffff;
      color: #000000;
      font-size: 14px;
      font-weight: 400;
    }
    .pemesan p{
      font-size: 16px;
      font-weight: 700;

    }

    .metode-pmbayaran{
      display: flex;
      gap: 14.5rem;
      padding-top: 8px;
      padding-bottom: 8px;
    }

    .metode-pmbayaran h6{
      font-size: 20px;
      font-weight: 400;
    }

    .metode-pmbayaran p {
      font-size: 16px;
      font-weight: 700;
    }

    .total-harga-3-Tiket{
      display: flex;
      gap: 20rem;
      padding-top: 8px;
      padding-bottom: 8px;
    }

    .total-harga-3-Tiket h6{
      font-size: 20px;
      font-weight: 400;
    }

    .total-harga-3-Tiket p{
      font-size: 16px;
      font-weight: 700;
    }

    .biaya-layanan{
      display: flex;
      gap: 23.5rem;
      padding-top: 8px;
      padding-bottom: 8px;
    }

    .biaya-layanan h6{
      font-size: 20px;
      font-weight: 400;
    }

    .biaya-layanan p {
      font-size: 16px;
      font-weight: 700;
    }

    .line {
      height: 2px;
      width: 100%; 
      margin: 20px auto;
      background-image: repeating-linear-gradient(to right, #D9D9D9, #D9D9D9 7px, transparent 5px, transparent 10px); 
    }

    .total-biaya{
      display: flex;
      gap: 24.5rem;
    }
    .total-biaya h6{
      font-size: 20px;
      font-weight: 700;
    }
    
    .total-biaya p{
      font-size: 16px;
      font-weight: 700;
    }

    /* popup2 */

    .waiting-payment__content-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.waiting-payment__container-content {
  position: relative;
  background-color: white;
  border-radius: 10px;
  width: 671px;
  height: 512px;
  display: flex;
  flex-direction: column;
}
.waiting-payment__content-header {
  display: flex;
  flex-direction: row;
  height: 73px;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(208, 213, 221, 1);
}
.waiting-payment__close-button {
  font-size: 32px;
  color: rgba(52, 51, 48, 1);
}
.waiting-payment__close-button:hover {
  opacity: 0.5;
}
.waiting-payment__content-data {
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  gap: 1rem;
  overflow-y: auto;
}
.waiting-payment__content-desc {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.waiting-payment__content-desc img {
  width: 58px;
  height: 28px;
}
.waiting-payment__copy-desc {
  color: rgba(218, 165, 32, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.waiting-payment__copy-desc i {
  font-size: 32px;
}
.waiting-payment__copy-desc:hover {
  filter: brightness(70%);
}
.waiting-payment__content-sub {
  display: flex;
  flex-direction: column;
}

    </style>