<template>
  <div class="navbar" :class="{ 'navbar--white': isWhiteText, border: border }">
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
          <li class="sub">
            <a :class="{ white: isWhiteText }" href="beranda">Beranda</a>
          </li>
          <li class="sub">
            <a :class="{ white: isWhiteText }" href="sejarah">Sejarah</a>
          </li>
          <li class="sub">
            <a :class="{ white: isWhiteText }" href="booking">Booking</a>
          </li>
          <li class="sub">
            <a :class="{ white: isWhiteText }" href="areakeraton"
              >Objek Wisata</a
            >
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
  props: {
    isWhiteText: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getTickets() {
      this.$router.push({ name: "signin" });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

.sub {
  padding-top: 10px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-family: "Raleway";
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
  font-size: 20px;
  width: 139px;
  color: #fff;
  height: 84px;
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
  color: #000000; /* Default text color: black */
  text-decoration: none;
  cursor: pointer;
}

.navbar--white {
  color: #ffffff;
}

.white {
  color: #ffffff;
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
