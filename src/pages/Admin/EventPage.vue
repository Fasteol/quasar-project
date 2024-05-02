<template>
   <div>
    <div>
      <h1>Event</h1>
      <div class="ni" v-for="(item, index) in events" :key="index">
        <img class="image" :src="item.image" alt="Gambar" />
        <div class="buttonaji">
          <button class="btn-small">{{ item.buttonText1 }}</button>
          <button class="btn-small">{{ item.buttonText2 }}</button>
            </div>
              <h2 class="judul-sedang">{{ item.titleBig }}</h2>
              <h1 class="judul-besar">{{ item.titleMedium }}</h1>
              <div class="tengah">
                <h3 class="judul-kecil">{{ item.price }}</h3>
              </div>
            </div>
    </div>
    <div>
      Tiket / Paket
      <div class="ni" v-for="(item, index) in tiketPakets" :key="index">
      <img class="image" :src="item.image" alt="Gambar" />
      <div class="buttonaji"></div>
      <h2 class="judul-sedang">{{ item.name }}</h2>
      <h1 class="judul-besar">{{ item.desc }}</h1>
      <h1 class="judul-besar">{{ item.subType }}</h1>
      <div class="tengah">
        <h3 class="judul-kecil">{{ item.price }}</h3>
      </div>
    </div>
    </div>
   </div>
   
   <q-btn
      class="text-capitalize"
      @click="openDialog('event')"
      >Add New Event</q-btn
    >
   <q-btn
      class="text-capitalize"
      @click="openDialog('tiketPaket')"
      >Add New Tiket / Paket</q-btn
    >
  <q-dialog v-model="addNewEvent">
    <!-- BUATIN Q-SELECT Iterationn -->
    <!-- Buatin Free Switch -->
    <q-input
          filled
          v-model="event.name"
          label="Text"
          color="black"
          bg-color="gray"
      />
    <q-input
          filled
          v-model="event.desc"
          label="Text"
          color="black"
          bg-color="gray"
      />
    <q-input
          filled
          v-model="event.price"
          label="Text"
          color="black"
          bg-color="gray"
      />
      <q-file
        filled
        type="file"
        v-model="event.image"
        label="Tambahkan Image"
        color="black"
        class="q-mt-md"
      />
  </q-dialog>
  <q-dialog v-model="addNewTiketPaket">
    <!-- Buatin Q-Select Unit -->
    <!-- Buatin Q-Select SubType -->
    <q-input
          filled
          v-model="tikets.name"
          label="Text"
          color="black"
          bg-color="gray"
      />
    <q-input
          filled
          v-model="tikets.desc"
          label="Text"
          color="black"
          bg-color="gray"
      />
    <q-input
          filled
          v-model="tikets.price"
          label="Text"
          color="black"
          bg-color="gray"
      />
    <q-input
          filled
          v-model="tikets.priceUmum"
          label="Text"
          color="black"
          bg-color="gray"
      />
    <q-input
          filled
          v-model="tikets.priceMancanegara"
          label="Text"
          color="black"
          bg-color="gray"
      />
      <q-file
        filled
        type="file"
        v-model="tikets.image"
        label="Tambahkan Image"
        color="black"
        class="q-mt-md"
      />
  </q-dialog>
</template>

<script>
import socket from "src/socket";
import { ref } from "vue";
export default {
  setup() {
    return {
      currentId: null,
      events: ref(),
      tiketPakets: ref(),
      iterations: ref([]),
      units: ref([
        { data: "orang", label: "Perorangan" },
        { data: "kelompok", label: "Perkelompok" },
      ]),
      subTypes: ref([]),
      event: ref({
        name: "",
        desc: "",
        price: "",
        image: "",
        iterationId: 0,
        isFree: false
      }),
      tikets: ref({
        name: "",
        desc: "",
        unit: "",
        price: 0, 
        priceUmum: null,
        priceMancanegara: null,
        image: "",
        subTypeId: 0
      }),

      addNewEvent: ref(),
      addNewTiketPaket: ref()
    };
  },
  mounted(){
    this.fetchData()
    socket.connect()
  },
  beforeUnmount() {
    socket.disconnect()
  },
  watch: {
    addNewEvent: {
      handler(val){
        if(!val) this.resetDefault()
      }
    },
    addNewTiketPaket: {
      handler(val){
        if(!val) this.resetDefault()
      }
    }
  },
  methods:{
    async fetchData(){
      try{
        const helper = await this.$api.get('items/helper')
        const eventResponse = await this.$api.get('event')
        const tiketPaketReponse = await this.$api.get('items')
        if(eventResponse.status != 200) throw Error('Error occured')
        if(tiketPaketReponse.status != 200) throw Error('Error occured')
        this.events = eventResponse.data.data.map(event => ({
          id: event.id,
          image: event.image,
          price: event.price ? `Rp. ${this.formatRupiah(event.price)}` : "",
          buttonText1: event.iteration.name,
          buttonText2: event.isFree ? "Gratis" : "Bayar",
          titleMedium: event.desc,
          titleBig: event.name
        }))
        this.tiketPakets = tiketPaketReponse.data.data.map((tiket) => ({
          id: tiket.id,
          image: tiket.image,
          name: tiket.name,
          desc: tiket.desc,
          subType: tiket.subType.name,
          price: this.formatRupiah(this.countPrice(tiket.price, tiket.priceUmum, tiket.priceMancanegara))
        }))
        this.iterations = helper.data.data.iterations
        this.subTypes = helper.data.data.subTypes
      }catch(err){
        console.log(err)
      }
    },
    async sendUpdate(type){
      let url, requestBody
      try{
        switch(type){
          case "event":
            url = `event/update/${this.currentId}`
            requestBody = this.event
            break;
          case "tiket":
            url = `item/update/${this.currentId}`
            requestBody = this.tikets
            break;
          default:
            break;
        }
        const response = await this.$api.post(url, requestBody, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        if(response.status != 200) throw Error('Error Occured')
      }catch(err){
        console.log(err)
      }
    },
    async sendCreate(type){
      let url, requestBody
      try{
        switch(type){
          case "event":
            url = `event/create`
            requestBody = this.event
            break;
          case "tiket":
            url = `item/create`
            requestBody = this.tikets
            break;
          default:
            break;
        }
        const response = await this.$api.post(url, requestBody, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        if(response.status != 200) throw Error('Error Occured')

      }catch(err){
        console.log(err)
      }
    },
    actionHandler(type){
      try{
        if(!type) throw Error('No Type is specified')
        this.currentId ? this.sendUpdate(type) : this.sendCreate(type)
      }catch(err){
        console.log(err)
      }
    },
    openDialog(type, itemData){
      type != "event" ? this.addNewTiketPaket = true : this.addNewEvent = true
      if(itemData){
        const dataToChanged = type != "event" ? "event" : "tikets"
        this[dataToChanged] = { ...itemData }
      }
    },
    formatRupiah(price) {
      return (price / 1000).toLocaleString("en-US", {
        minimumFractionDigits: 3,
      });
    },
    countPrice(normalPrice, secondPrice, thirdPrice) {
      let returnedPrice = `Rp. ${this.formatRupiah(normalPrice)}`;
      const prices = [normalPrice, secondPrice, thirdPrice]
        .filter((price) => price !== null)
        .sort((a, b) => a - b);
      if (prices.length > 1) {
        returnedPrice = `Rp. ${this.formatRupiah(
          prices[0]
        )} - ${this.formatRupiah(prices[prices.length - 1])}`;
      }
      return returnedPrice;
    },
    resetDefault(){
      const listToClear = []
      for(let clear of listToClear){
        this[clear] = ""
      }

      this.event = {
        name: "",
        desc: "",
        price: "",
        image: "",
        iterationId: 0,
        isFree: false 
      }
      this.tikets = {
        name: "",
        desc: "",
        unit: "",
        price: 0, 
        priceUmum: null,
        priceMancanegara: null,
        image: "",
        subTypeId: 0
      }
    }
  }
 };
</script>
 