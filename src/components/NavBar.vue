<template>
  <div
    class="navbar"
    :class="{ white: isWhiteText, border: border, scrolled: isScrolled }"
  >
    <div class="navbar-left">
      <img
        alt="icon-aplikasi"
        src="../assets/images/logo_keraton.png"
        class="app-icon"
      />
      <span class="app-name">KERATON KASEPUHAN CIREBON</span>
    </div>
    <div class="navbar-right">
      <nav>
        <ul>
          <li class="sub"><a href="beranda">Beranda</a></li>
          <li class="sub">
            <p>Sejarah</p>
            <ul class="dropdown-list" style="margin-top: -1rem">
              <li><a href="#/sejarah">Keraton</a></li>
              <li><a href="#/sejarahsilsilah">Silsilah</a></li>
            </ul>
          </li>
          <li class="sub">
            <p>Booking</p>
            <ul class="dropdown-list">
              <li><a href="#/booking">Paket Keraton</a></li>
              <li><a href="#/eventgratis">Tiket Event</a></li>
            </ul>
          </li>
          <li class="sub">
            <p>Objek Wisata</p>
            <ul class="dropdown-list">
              <li><a href="#/areakeraton">Keraton Kesepuhan</a></li>
              <li><a href="#/museum">Museum Pusaka</a></li>
              <li><a href="#/agungdalem">Dalem Agung Pakungwati</a></li>
              <!-- <li><a href="../views/Lotus.vue">Lotus</a></li> -->
            </ul>
          </li>
          <button
            @click="getTickets"
            style="
              border-radius: 5px;
              background-color: #123b32;
              color: white;
              padding: 2px 8px;
              width: 162px;
              height: 34px;
              border: none;
              font-family: 'Raleway';
              font-size: 14px;
              font-weight: 700;
            "
          >
            Dapatkan Tiket
          </button>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  props: {
    border: {
      type: Boolean,
      default: false,
    },
    isWhiteText: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    getTickets() {
      this.$router.push({ name: "signin" });
    },
    handleScroll() {
      if (window.pageYOffset > 50) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

.sub {
  padding-top: 10px;
}

.sub a {
  color: white;
}

.sub:hover {
  text-decoration: underline;
}

nav ul .dropdown-list {
  margin-top: -1rem;
  list-style-type: none;
  display: block;
  position: absolute;
  background: #ffffff;
  border: 1px solid #123b32;
  border-radius: 10px;
  padding: 6px 16px;
  width: max-content;
  opacity: 0;
  pointer-events: none;
}

nav ul.dropdown-list li {
  margin-left: 0;
  padding: 5px 0;
}

.sub:hover .dropdown-list {
  opacity: 1;
  pointer-events: auto;
  animation: moveUp 0.5s ease-in-out forwards;
}

.white {
  color: white;
}

/* , .scrolled .nav-right nav ul .sub */
.scrolled a {
  background-color: white;
  color: black;
}

.white {
  color: white;
}

/* , .scrolled .nav-right nav ul .sub */
.scrolled {
  background-color: white;
  color: black;
}

@keyframes moveUp {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(20px);
  }
}

.navbar {
  display: flex;
  position: fixed;
  top: 0; /* Menempatkan navbar di bagian atas layar */
  left: 0;
  width: 100%; /* Menggunakan lebar penuh */
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-family: "Raleway";
  z-index: 1000;
}

.border {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-left {
  display: flex;
  align-items: center;
  max-width: 90%;
  margin: 0 auto;
  margin-left: 68px;
}

.navbar ul.navbar-right li {
  margin-left: 30px;
  padding: 20px 0;
  position: relative;
  justify-content: center;
}

.app-icon {
  width: 68px;
  height: 70.62px;
  left: 88px;
  top: 16.69px;
}

.app-name {
  font-size: 12px;
  width: 100px;
  /* color: #fff; */
  margin-left: 16px;
}

.navbar-right {
  flex-grow: 1;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  margin-right: 88px;
}

nav ul li {
  margin-right: 20px;
}

nav ul li:last-child {
  margin-right: 0;
}

nav ul li a,
nav ul li button {
  color: black; /* Default text color: black */
  text-decoration: none;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .navbar {
    flex-direction: column;
    padding: 10px;
  }

  .navbar-right {
    width: 100%;
  }

  nav ul {
    justify-content: center;
  }
}
</style>
