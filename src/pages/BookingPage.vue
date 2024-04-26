<template>
  <div class="body">
    <!-- <div class="navbar">
        <div class="left-side">
          <img src="./assets/img/Group 43.png" />
          <div class="box">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
          </div>
        </div>
      </div> -->

    <div class="container-2">
      <h3>Booking/Tiket Event</h3>
      <h1>Tiket Event Upacara Adat Tradisi</h1>
    </div>
    <div class="dropdown">
      <button @click="toggleDropdown" class="dropdown-toggle">
        {{ dropdownTitle }}
      </button>
      <div v-if="isOpen" class="dropdown-menu">
        <label
          v-for="(option, index) in options"
          :key="index"
          class="checkbox-container"
        >
          <input
            type="checkbox"
            :value="option.value"
            v-model="selectedOptions"
          />
          {{ option.label }}
        </label>
      </div>
      <div class="kami">
        <button @click="toggleDropdown2" class="dropdown-toggle2">
          {{ dropdownTitle2 }}
        </button>
        <div v-if="isOpen2" class="dropdown-menu2">
          <!-- Perbaikan disini -->
          <label
            v-for="(option2, index2) in options2"
            :key="index2"
            class="checkbox-container"
          >
            <input
              type="checkbox"
              :value="option2.value"
              v-model="selectedOptions2"
            />
            {{ option2.label }}
          </label>
        </div>
      </div>
    </div>
    <div class="container-3">
      <img src="../assets/images/isra.png" />
      <div class="card-desc">
        <div class="button-group">
          <button class="btn">Perminggu</button>
          <button class="btn">Gratis</button>
        </div>
        <h2>Peringatan isra mi'raj di langgar alit</h2>
        <h3>
          Keluarga Keraton Kasepuhan mengadakan acara Isra Miraj di Langgar Alit
          yang rutin digunakan untuk peringatan hari besar Islam
        </h3>
      </div>
      <button class="tambah">
        Tambah
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M11.4922 7.14453C11.4921 7.54076 11.6289 7.92484 11.8795 8.23178C12.1301 8.53872 12.479 8.74966 12.8672 8.82891C12.9642 8.8487 13.0513 8.90136 13.1139 8.97798C13.1766 9.0546 13.2108 9.1505 13.2109 9.24946V10.582C13.2109 10.696 13.1657 10.8053 13.0851 10.8859C13.0045 10.9664 12.8952 11.0117 12.7812 11.0117H5.90625V3.27734H12.7812C12.8952 3.27734 13.0045 3.32261 13.0851 3.4032C13.1657 3.48378 13.2109 3.59307 13.2109 3.70703V5.0396C13.2108 5.13856 13.1766 5.23446 13.1139 5.31108C13.0513 5.38771 12.9642 5.44036 12.8672 5.46016C12.479 5.5394 12.1301 5.75034 11.8795 6.05728C11.6289 6.36422 11.4921 6.74831 11.4922 7.14453Z"
            fill="#DAA520"
          />
          <path
            d="M12.9526 5.88125C13.1467 5.84175 13.3212 5.73641 13.4466 5.58304C13.572 5.42967 13.6405 5.23769 13.6406 5.0396V3.70703C13.6406 3.47911 13.5501 3.26053 13.3889 3.09936C13.2278 2.9382 13.0092 2.84766 12.7813 2.84766H2.46875C2.24083 2.84766 2.02225 2.9382 1.86108 3.09936C1.69992 3.26053 1.60938 3.47911 1.60938 3.70703V5.0396C1.60949 5.23769 1.67803 5.42967 1.8034 5.58304C1.92878 5.73641 2.1033 5.84175 2.29741 5.88125C2.58767 5.94144 2.84831 6.09983 3.03543 6.32974C3.22256 6.55965 3.32472 6.84702 3.32472 7.14346C3.32472 7.43989 3.22256 7.72726 3.03543 7.95717C2.84831 8.18708 2.58767 8.34547 2.29741 8.40566C2.10293 8.44523 1.92814 8.55089 1.80272 8.70471C1.67731 8.85852 1.60899 9.051 1.60938 9.24946V10.582C1.60938 10.81 1.69992 11.0285 1.86108 11.1897C2.02225 11.3509 2.24083 11.4414 2.46875 11.4414H12.7813C13.0092 11.4414 13.2278 11.3509 13.3889 11.1897C13.5501 11.0285 13.6406 10.81 13.6406 10.582V9.24946C13.6405 9.05137 13.572 8.85939 13.4466 8.70602C13.3212 8.55265 13.1467 8.44731 12.9526 8.40781C12.6623 8.34762 12.4017 8.18923 12.2146 7.95932C12.0274 7.72941 11.9253 7.44204 11.9253 7.14561C11.9253 6.84917 12.0274 6.5618 12.2146 6.33189C12.4017 6.10198 12.6623 5.94359 12.9526 5.8834V5.88125ZM2.46875 9.25C2.95413 9.15112 3.39044 8.88756 3.7038 8.50392C4.01716 8.12029 4.18833 7.64015 4.18833 7.1448C4.18833 6.64945 4.01716 6.16931 3.7038 5.78568C3.39044 5.40204 2.95413 5.13848 2.46875 5.0396V3.70703H5.47656V10.582H2.46875V9.25ZM12.7813 9.25V10.582H6.33594V3.70703H12.7813V5.03906C12.2959 5.13794 11.8596 5.40151 11.5462 5.78514C11.2328 6.16878 11.0617 6.64891 11.0617 7.14426C11.0617 7.63961 11.2328 8.11975 11.5462 8.50338C11.8596 8.88702 12.2959 9.15058 12.7813 9.24946V9.25Z"
            fill="#DAA520"
          />
        </svg>
      </button>
    </div>
    <div class="container-3">
      <img src="../assets/images/MaskGroup.png" />
      <div class="card-desc">
        <div class="button-group">
          <button class="btn">Perminggu</button>
          <button class="btn">Gratis</button>
        </div>
        <h2>Peringatan nisfu syaban di langgar alit</h2>
        <h3>
          Peringatan Nisfu Syaban adalah salah satu tradisi yang dilaksanakan di
          Langgar Alit Keraton Kasepuhan Cirebon
        </h3>
      </div>
      <button class="tambah">
        Tambah
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M11.4922 7.14453C11.4921 7.54076 11.6289 7.92484 11.8795 8.23178C12.1301 8.53872 12.479 8.74966 12.8672 8.82891C12.9642 8.8487 13.0513 8.90136 13.1139 8.97798C13.1766 9.0546 13.2108 9.1505 13.2109 9.24946V10.582C13.2109 10.696 13.1657 10.8053 13.0851 10.8859C13.0045 10.9664 12.8952 11.0117 12.7812 11.0117H5.90625V3.27734H12.7812C12.8952 3.27734 13.0045 3.32261 13.0851 3.4032C13.1657 3.48378 13.2109 3.59307 13.2109 3.70703V5.0396C13.2108 5.13856 13.1766 5.23446 13.1139 5.31108C13.0513 5.38771 12.9642 5.44036 12.8672 5.46016C12.479 5.5394 12.1301 5.75034 11.8795 6.05728C11.6289 6.36422 11.4921 6.74831 11.4922 7.14453Z"
            fill="#DAA520"
          />
          <path
            d="M12.9526 5.88125C13.1467 5.84175 13.3212 5.73641 13.4466 5.58304C13.572 5.42967 13.6405 5.23769 13.6406 5.0396V3.70703C13.6406 3.47911 13.5501 3.26053 13.3889 3.09936C13.2278 2.9382 13.0092 2.84766 12.7813 2.84766H2.46875C2.24083 2.84766 2.02225 2.9382 1.86108 3.09936C1.69992 3.26053 1.60938 3.47911 1.60938 3.70703V5.0396C1.60949 5.23769 1.67803 5.42967 1.8034 5.58304C1.92878 5.73641 2.1033 5.84175 2.29741 5.88125C2.58767 5.94144 2.84831 6.09983 3.03543 6.32974C3.22256 6.55965 3.32472 6.84702 3.32472 7.14346C3.32472 7.43989 3.22256 7.72726 3.03543 7.95717C2.84831 8.18708 2.58767 8.34547 2.29741 8.40566C2.10293 8.44523 1.92814 8.55089 1.80272 8.70471C1.67731 8.85852 1.60899 9.051 1.60938 9.24946V10.582C1.60938 10.81 1.69992 11.0285 1.86108 11.1897C2.02225 11.3509 2.24083 11.4414 2.46875 11.4414H12.7813C13.0092 11.4414 13.2278 11.3509 13.3889 11.1897C13.5501 11.0285 13.6406 10.81 13.6406 10.582V9.24946C13.6405 9.05137 13.572 8.85939 13.4466 8.70602C13.3212 8.55265 13.1467 8.44731 12.9526 8.40781C12.6623 8.34762 12.4017 8.18923 12.2146 7.95932C12.0274 7.72941 11.9253 7.44204 11.9253 7.14561C11.9253 6.84917 12.0274 6.5618 12.2146 6.33189C12.4017 6.10198 12.6623 5.94359 12.9526 5.8834V5.88125ZM2.46875 9.25C2.95413 9.15112 3.39044 8.88756 3.7038 8.50392C4.01716 8.12029 4.18833 7.64015 4.18833 7.1448C4.18833 6.64945 4.01716 6.16931 3.7038 5.78568C3.39044 5.40204 2.95413 5.13848 2.46875 5.0396V3.70703H5.47656V10.582H2.46875V9.25ZM12.7813 9.25V10.582H6.33594V3.70703H12.7813V5.03906C12.2959 5.13794 11.8596 5.40151 11.5462 5.78514C11.2328 6.16878 11.0617 6.64891 11.0617 7.14426C11.0617 7.63961 11.2328 8.11975 11.5462 8.50338C11.8596 8.88702 12.2959 9.15058 12.7813 9.24946V9.25Z"
            fill="#DAA520"
          />
        </svg>
      </button>
    </div>
    <div class="container-3">
      <img src="../assets/images/bedug.png" />
      <div class="card-desc">
        <div class="button-group">
          <button class="btn">Perminggu</button>
          <button class="btn">Gratis</button>
        </div>
        <h2>Tadarus di langgar alit</h2>
        <h3>
          Kegiatan tadarus Alquran ini biasanya dibimbing oleh kaum masjid dan
          dilakukan dua kali khatam selama bulan Ramadan
        </h3>
      </div>
      <button class="tambah">
        Tambah
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M11.4922 7.14453C11.4921 7.54076 11.6289 7.92484 11.8795 8.23178C12.1301 8.53872 12.479 8.74966 12.8672 8.82891C12.9642 8.8487 13.0513 8.90136 13.1139 8.97798C13.1766 9.0546 13.2108 9.1505 13.2109 9.24946V10.582C13.2109 10.696 13.1657 10.8053 13.0851 10.8859C13.0045 10.9664 12.8952 11.0117 12.7812 11.0117H5.90625V3.27734H12.7812C12.8952 3.27734 13.0045 3.32261 13.0851 3.4032C13.1657 3.48378 13.2109 3.59307 13.2109 3.70703V5.0396C13.2108 5.13856 13.1766 5.23446 13.1139 5.31108C13.0513 5.38771 12.9642 5.44036 12.8672 5.46016C12.479 5.5394 12.1301 5.75034 11.8795 6.05728C11.6289 6.36422 11.4921 6.74831 11.4922 7.14453Z"
            fill="#DAA520"
          />
          <path
            d="M12.9526 5.88125C13.1467 5.84175 13.3212 5.73641 13.4466 5.58304C13.572 5.42967 13.6405 5.23769 13.6406 5.0396V3.70703C13.6406 3.47911 13.5501 3.26053 13.3889 3.09936C13.2278 2.9382 13.0092 2.84766 12.7813 2.84766H2.46875C2.24083 2.84766 2.02225 2.9382 1.86108 3.09936C1.69992 3.26053 1.60938 3.47911 1.60938 3.70703V5.0396C1.60949 5.23769 1.67803 5.42967 1.8034 5.58304C1.92878 5.73641 2.1033 5.84175 2.29741 5.88125C2.58767 5.94144 2.84831 6.09983 3.03543 6.32974C3.22256 6.55965 3.32472 6.84702 3.32472 7.14346C3.32472 7.43989 3.22256 7.72726 3.03543 7.95717C2.84831 8.18708 2.58767 8.34547 2.29741 8.40566C2.10293 8.44523 1.92814 8.55089 1.80272 8.70471C1.67731 8.85852 1.60899 9.051 1.60938 9.24946V10.582C1.60938 10.81 1.69992 11.0285 1.86108 11.1897C2.02225 11.3509 2.24083 11.4414 2.46875 11.4414H12.7813C13.0092 11.4414 13.2278 11.3509 13.3889 11.1897C13.5501 11.0285 13.6406 10.81 13.6406 10.582V9.24946C13.6405 9.05137 13.572 8.85939 13.4466 8.70602C13.3212 8.55265 13.1467 8.44731 12.9526 8.40781C12.6623 8.34762 12.4017 8.18923 12.2146 7.95932C12.0274 7.72941 11.9253 7.44204 11.9253 7.14561C11.9253 6.84917 12.0274 6.5618 12.2146 6.33189C12.4017 6.10198 12.6623 5.94359 12.9526 5.8834V5.88125ZM2.46875 9.25C2.95413 9.15112 3.39044 8.88756 3.7038 8.50392C4.01716 8.12029 4.18833 7.64015 4.18833 7.1448C4.18833 6.64945 4.01716 6.16931 3.7038 5.78568C3.39044 5.40204 2.95413 5.13848 2.46875 5.0396V3.70703H5.47656V10.582H2.46875V9.25ZM12.7813 9.25V10.582H6.33594V3.70703H12.7813V5.03906C12.2959 5.13794 11.8596 5.40151 11.5462 5.78514C11.2328 6.16878 11.0617 6.64891 11.0617 7.14426C11.0617 7.63961 11.2328 8.11975 11.5462 8.50338C11.8596 8.88702 12.2959 9.15058 12.7813 9.24946V9.25Z"
            fill="#DAA520"
          />
        </svg>
      </button>
    </div>
    <div class="container-3">
      <img src="../assets/images/isra.png" />
      <div class="card-desc">
        <div class="button-group">
          <button class="btn">Perminggu</button>
          <button class="btn">Gratis</button>
        </div>
        <h2>Jamasan Kerisan dan Tombak</h2>
        <h3>
          Keluarga Keraton Kasepuhan mengadakan acara Isra Miraj di Langgar Alit
          yang rutin digunakan untuk peringatan hari besar Islam
        </h3>
      </div>
      <button class="tambah">
        Tambah
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M11.4922 7.14453C11.4921 7.54076 11.6289 7.92484 11.8795 8.23178C12.1301 8.53872 12.479 8.74966 12.8672 8.82891C12.9642 8.8487 13.0513 8.90136 13.1139 8.97798C13.1766 9.0546 13.2108 9.1505 13.2109 9.24946V10.582C13.2109 10.696 13.1657 10.8053 13.0851 10.8859C13.0045 10.9664 12.8952 11.0117 12.7812 11.0117H5.90625V3.27734H12.7812C12.8952 3.27734 13.0045 3.32261 13.0851 3.4032C13.1657 3.48378 13.2109 3.59307 13.2109 3.70703V5.0396C13.2108 5.13856 13.1766 5.23446 13.1139 5.31108C13.0513 5.38771 12.9642 5.44036 12.8672 5.46016C12.479 5.5394 12.1301 5.75034 11.8795 6.05728C11.6289 6.36422 11.4921 6.74831 11.4922 7.14453Z"
            fill="#DAA520"
          />
          <path
            d="M12.9526 5.88125C13.1467 5.84175 13.3212 5.73641 13.4466 5.58304C13.572 5.42967 13.6405 5.23769 13.6406 5.0396V3.70703C13.6406 3.47911 13.5501 3.26053 13.3889 3.09936C13.2278 2.9382 13.0092 2.84766 12.7813 2.84766H2.46875C2.24083 2.84766 2.02225 2.9382 1.86108 3.09936C1.69992 3.26053 1.60938 3.47911 1.60938 3.70703V5.0396C1.60949 5.23769 1.67803 5.42967 1.8034 5.58304C1.92878 5.73641 2.1033 5.84175 2.29741 5.88125C2.58767 5.94144 2.84831 6.09983 3.03543 6.32974C3.22256 6.55965 3.32472 6.84702 3.32472 7.14346C3.32472 7.43989 3.22256 7.72726 3.03543 7.95717C2.84831 8.18708 2.58767 8.34547 2.29741 8.40566C2.10293 8.44523 1.92814 8.55089 1.80272 8.70471C1.67731 8.85852 1.60899 9.051 1.60938 9.24946V10.582C1.60938 10.81 1.69992 11.0285 1.86108 11.1897C2.02225 11.3509 2.24083 11.4414 2.46875 11.4414H12.7813C13.0092 11.4414 13.2278 11.3509 13.3889 11.1897C13.5501 11.0285 13.6406 10.81 13.6406 10.582V9.24946C13.6405 9.05137 13.572 8.85939 13.4466 8.70602C13.3212 8.55265 13.1467 8.44731 12.9526 8.40781C12.6623 8.34762 12.4017 8.18923 12.2146 7.95932C12.0274 7.72941 11.9253 7.44204 11.9253 7.14561C11.9253 6.84917 12.0274 6.5618 12.2146 6.33189C12.4017 6.10198 12.6623 5.94359 12.9526 5.8834V5.88125ZM2.46875 9.25C2.95413 9.15112 3.39044 8.88756 3.7038 8.50392C4.01716 8.12029 4.18833 7.64015 4.18833 7.1448C4.18833 6.64945 4.01716 6.16931 3.7038 5.78568C3.39044 5.40204 2.95413 5.13848 2.46875 5.0396V3.70703H5.47656V10.582H2.46875V9.25ZM12.7813 9.25V10.582H6.33594V3.70703H12.7813V5.03906C12.2959 5.13794 11.8596 5.40151 11.5462 5.78514C11.2328 6.16878 11.0617 6.64891 11.0617 7.14426C11.0617 7.63961 11.2328 8.11975 11.5462 8.50338C11.8596 8.88702 12.2959 9.15058 12.7813 9.24946V9.25Z"
            fill="#DAA520"
          />
        </svg>
      </button>
    </div>
    <div class="container-3">
      <img src="../assets/images/MaskGroup.png" />
      <div class="card-desc">
        <div class="button-group">
          <button class="btn">Perminggu</button>
          <button class="btn">Gratis</button>
        </div>
        <h2>Siraman Panjang Jimat</h2>
        <h3>
          Peringatan Nisfu Syaban adalah salah satu tradisi yang dilaksanakan di
          Langgar Alit Keraton Kasepuhan Cirebon
        </h3>
      </div>
      <button class="tambah">
        Tambah
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M11.4922 7.14453C11.4921 7.54076 11.6289 7.92484 11.8795 8.23178C12.1301 8.53872 12.479 8.74966 12.8672 8.82891C12.9642 8.8487 13.0513 8.90136 13.1139 8.97798C13.1766 9.0546 13.2108 9.1505 13.2109 9.24946V10.582C13.2109 10.696 13.1657 10.8053 13.0851 10.8859C13.0045 10.9664 12.8952 11.0117 12.7812 11.0117H5.90625V3.27734H12.7812C12.8952 3.27734 13.0045 3.32261 13.0851 3.4032C13.1657 3.48378 13.2109 3.59307 13.2109 3.70703V5.0396C13.2108 5.13856 13.1766 5.23446 13.1139 5.31108C13.0513 5.38771 12.9642 5.44036 12.8672 5.46016C12.479 5.5394 12.1301 5.75034 11.8795 6.05728C11.6289 6.36422 11.4921 6.74831 11.4922 7.14453Z"
            fill="#DAA520"
          />
          <path
            d="M12.9526 5.88125C13.1467 5.84175 13.3212 5.73641 13.4466 5.58304C13.572 5.42967 13.6405 5.23769 13.6406 5.0396V3.70703C13.6406 3.47911 13.5501 3.26053 13.3889 3.09936C13.2278 2.9382 13.0092 2.84766 12.7813 2.84766H2.46875C2.24083 2.84766 2.02225 2.9382 1.86108 3.09936C1.69992 3.26053 1.60938 3.47911 1.60938 3.70703V5.0396C1.60949 5.23769 1.67803 5.42967 1.8034 5.58304C1.92878 5.73641 2.1033 5.84175 2.29741 5.88125C2.58767 5.94144 2.84831 6.09983 3.03543 6.32974C3.22256 6.55965 3.32472 6.84702 3.32472 7.14346C3.32472 7.43989 3.22256 7.72726 3.03543 7.95717C2.84831 8.18708 2.58767 8.34547 2.29741 8.40566C2.10293 8.44523 1.92814 8.55089 1.80272 8.70471C1.67731 8.85852 1.60899 9.051 1.60938 9.24946V10.582C1.60938 10.81 1.69992 11.0285 1.86108 11.1897C2.02225 11.3509 2.24083 11.4414 2.46875 11.4414H12.7813C13.0092 11.4414 13.2278 11.3509 13.3889 11.1897C13.5501 11.0285 13.6406 10.81 13.6406 10.582V9.24946C13.6405 9.05137 13.572 8.85939 13.4466 8.70602C13.3212 8.55265 13.1467 8.44731 12.9526 8.40781C12.6623 8.34762 12.4017 8.18923 12.2146 7.95932C12.0274 7.72941 11.9253 7.44204 11.9253 7.14561C11.9253 6.84917 12.0274 6.5618 12.2146 6.33189C12.4017 6.10198 12.6623 5.94359 12.9526 5.8834V5.88125ZM2.46875 9.25C2.95413 9.15112 3.39044 8.88756 3.7038 8.50392C4.01716 8.12029 4.18833 7.64015 4.18833 7.1448C4.18833 6.64945 4.01716 6.16931 3.7038 5.78568C3.39044 5.40204 2.95413 5.13848 2.46875 5.0396V3.70703H5.47656V10.582H2.46875V9.25ZM12.7813 9.25V10.582H6.33594V3.70703H12.7813V5.03906C12.2959 5.13794 11.8596 5.40151 11.5462 5.78514C11.2328 6.16878 11.0617 6.64891 11.0617 7.14426C11.0617 7.63961 11.2328 8.11975 11.5462 8.50338C11.8596 8.88702 12.2959 9.15058 12.7813 9.24946V9.25Z"
            fill="#DAA520"
          />
        </svg>
      </button>
    </div>
    <div class="container-3">
      <img src="../assets/images/bedug.png" />
      <div class="card-desc">
        <div class="button-group">
          <button class="btn">Perminggu</button>
          <button class="btn">Gratis</button>
        </div>
        <h2>Tadarus di langgar alit</h2>
        <h3>
          Kegiatan tadarus Alquran ini biasanya dibimbing oleh kaum masjid dan
          dilakukan dua kali khatam selama bulan Ramadan
        </h3>
      </div>
      <button class="tambah">
        Tambah
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M11.4922 7.14453C11.4921 7.54076 11.6289 7.92484 11.8795 8.23178C12.1301 8.53872 12.479 8.74966 12.8672 8.82891C12.9642 8.8487 13.0513 8.90136 13.1139 8.97798C13.1766 9.0546 13.2108 9.1505 13.2109 9.24946V10.582C13.2109 10.696 13.1657 10.8053 13.0851 10.8859C13.0045 10.9664 12.8952 11.0117 12.7812 11.0117H5.90625V3.27734H12.7812C12.8952 3.27734 13.0045 3.32261 13.0851 3.4032C13.1657 3.48378 13.2109 3.59307 13.2109 3.70703V5.0396C13.2108 5.13856 13.1766 5.23446 13.1139 5.31108C13.0513 5.38771 12.9642 5.44036 12.8672 5.46016C12.479 5.5394 12.1301 5.75034 11.8795 6.05728C11.6289 6.36422 11.4921 6.74831 11.4922 7.14453Z"
            fill="#DAA520"
          />
          <path
            d="M12.9526 5.88125C13.1467 5.84175 13.3212 5.73641 13.4466 5.58304C13.572 5.42967 13.6405 5.23769 13.6406 5.0396V3.70703C13.6406 3.47911 13.5501 3.26053 13.3889 3.09936C13.2278 2.9382 13.0092 2.84766 12.7813 2.84766H2.46875C2.24083 2.84766 2.02225 2.9382 1.86108 3.09936C1.69992 3.26053 1.60938 3.47911 1.60938 3.70703V5.0396C1.60949 5.23769 1.67803 5.42967 1.8034 5.58304C1.92878 5.73641 2.1033 5.84175 2.29741 5.88125C2.58767 5.94144 2.84831 6.09983 3.03543 6.32974C3.22256 6.55965 3.32472 6.84702 3.32472 7.14346C3.32472 7.43989 3.22256 7.72726 3.03543 7.95717C2.84831 8.18708 2.58767 8.34547 2.29741 8.40566C2.10293 8.44523 1.92814 8.55089 1.80272 8.70471C1.67731 8.85852 1.60899 9.051 1.60938 9.24946V10.582C1.60938 10.81 1.69992 11.0285 1.86108 11.1897C2.02225 11.3509 2.24083 11.4414 2.46875 11.4414H12.7813C13.0092 11.4414 13.2278 11.3509 13.3889 11.1897C13.5501 11.0285 13.6406 10.81 13.6406 10.582V9.24946C13.6405 9.05137 13.572 8.85939 13.4466 8.70602C13.3212 8.55265 13.1467 8.44731 12.9526 8.40781C12.6623 8.34762 12.4017 8.18923 12.2146 7.95932C12.0274 7.72941 11.9253 7.44204 11.9253 7.14561C11.9253 6.84917 12.0274 6.5618 12.2146 6.33189C12.4017 6.10198 12.6623 5.94359 12.9526 5.8834V5.88125ZM2.46875 9.25C2.95413 9.15112 3.39044 8.88756 3.7038 8.50392C4.01716 8.12029 4.18833 7.64015 4.18833 7.1448C4.18833 6.64945 4.01716 6.16931 3.7038 5.78568C3.39044 5.40204 2.95413 5.13848 2.46875 5.0396V3.70703H5.47656V10.582H2.46875V9.25ZM12.7813 9.25V10.582H6.33594V3.70703H12.7813V5.03906C12.2959 5.13794 11.8596 5.40151 11.5462 5.78514C11.2328 6.16878 11.0617 6.64891 11.0617 7.14426C11.0617 7.63961 11.2328 8.11975 11.5462 8.50338C11.8596 8.88702 12.2959 9.15058 12.7813 9.24946V9.25Z"
            fill="#DAA520"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    dropdownTitle: {
      type: String,
      default: "Pelaksanaan",
    },
    dropdownTitle2: {
      type: String,
      default: "Jenis Event",
    },
  },
  data() {
    return {
      isOpen: false,
      isOpen2: false,
      imageUrl: "../assets/trigger.svg",
      options: [
        { label: "Hari", value: "Perhari" },
        { label: "Minggu", value: "Perminggu" },
        { label: "Bulan", value: "Perbulan" },
      ],
      options2: [
        { label: "Gratis", value: "Gratis" },
        { label: "Berbayar", value: "Berbayar" },
      ],
      selectedOptions: [],
      selectedOptions2: [],
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    toggleDropdown2() {
      this.isOpen2 = !this.isOpen2;
    },
    selectOption(option) {
      this.selectedOptions.push(option);
    },
    selectOption2(option) {
      this.selectedOptions2.push(option);
    },
    applySelection() {
      // Close dropdowns
      this.isOpen = false;
      this.isOpen2 = false;
      // Filter items based on selected options
      const filteredItems = this.items.filter((item) => {
        // Check if item matches selected pelaksanaan option
        const pelaksanaanMatch =
          this.selectedOptions.length === 0 ||
          this.selectedOptions.includes(item.buttonText1.toLowerCase());
        // Check if item matches selected jenis event option
        const jenisEventMatch =
          this.selectedOptions2.length === 0 ||
          this.selectedOptions2.includes(item.buttonText2.toLowerCase());
        return pelaksanaanMatch && jenisEventMatch;
      });
      console.log("Filtered items:", filteredItems);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

.body {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
}

.list select {
  border-radius: 8px;
  margin: 26px 0px 26px 0px;
  justify-content: center;
  width: 140px;
  height: 40px;
  font-family: "Raleway";
}

.dropdown-toggle {
  width: 150px;
  height: 40px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid;
  margin: 26px 39px;

  display: flex;
  align-items: center;
  text-align: center;
  background-color: #fff;
  font-size: 14px;
  font-weight: 700;
  font-family: Raleway;
  color: #333333;
  cursor: pointer;
}

.dropdown {
  display: flex;
  align-items: center;
}

.dropdown-toggle img {
  margin-left: auto;
  /* Jarak antara teks dan gambar */
}

.dropdown-menu {
  position: absolute;

  border: 1px solid;
  border-radius: 8px;
  background-color: #ffffff;
  font-family: Lexend;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.5px;
  cursor: pointer;
}

.checkbox-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  padding: 8px;
  gap: 8px;
  /* Jarak antara checkbox dan teks */
  font-family: Lexend;
  font-size: 14px;
  cursor: pointer;
}

.checkbox-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-icon {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: black;
  /* Warna default ikon centang */
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke 0.3s ease;
  /* Efek transisi untuk perubahan warna */
}

.container input:checked ~ .checkmark {
  background-image: linear-gradient(gold, gold);
}

.dropdown-toggle2 {
  width: 150px;
  height: 40px;

  border-radius: 8px;
  border: 1px solid;

  align-items: center;
  text-align: center;
  background-color: #fff;
  font-size: 14px;
  font-weight: 700;
  font-family: Raleway;
  color: #333333;
  margin-left: 23px;
  cursor: pointer;
}

.dropdown-menu2 {
  position: absolute;
  width: 150px;
  top: 274px;
  left: 132px;
  border: 1px solid;
  border-radius: 8px;
  background-color: #ffffff;
  margin-left: 170px;
  cursor: pointer;
}

.dropdown-toggle2 span {
  margin-right: 8px;
}

.dropdown-toggle2 img {
  margin-left: auto;
  /* Jarak antara teks dan gambar */
}

body {
  display: center;
  padding: 0;
  margin: 0;
  width: 390px;
  height: auto;
}

.thumbnail {
  margin-top: 70px;
  padding-right: -50px;
}

.navbar {
  background-color: #fff;
  color: #fff;
  justify-content: space-between;
  height: auto;
  padding: 24px 31px 24px 31px;
}

.left-side {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right-side {
  display: flex;
  align-items: center;
}

.icon {
  width: 50px;
  height: auto;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  margin-left: 10px;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.box {
  width: 40px;
  height: 40px;
  background-color: #123b32;
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.line {
  position: absolute;
  width: 20px;
  height: 1px;
  background-color: white;
}

.line1 {
  top: 10px;
}

.line2 {
  top: 20px;
}

.line3 {
  top: 30px;
}

.container-2 {
  height: 125px;
  width: 390px;
  background: rgb(255, 228, 162);
  background: linear-gradient(
    90deg,
    rgba(255, 228, 162, 1) 0%,
    rgba(163, 158, 105, 1) 72%,
    rgba(72, 112, 103, 1) 90%
  );
  display: flex;
  flex-direction: column;
}

.container-2 h3 {
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 400;
  margin-left: 31px;
  margin-top: 37px;
  width: 140px;
  height: 22px;
  margin-bottom: 2px;
}

.container-2 h1 {
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  margin-left: 31px;
  width: 310px;
  height: 28px;
}

.container-3 img {
  justify-content: center;
  align-items: center;
}

.container-3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  margin-bottom: 20px;
}

.container-3 h2 {
  font-family: "Raleway";
  font-weight: 400;
  font-size: 16px;
}

.container-3 h3 {
  font-family: "Raleway";
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}

.btn {
  width: 75px;
  height: 25px;
  border-radius: 6px;
  border: 1px solid #49454f;
  background: transparent;
  font-size: 10px;
  font-family: "Raleway";
  font-weight: 700;
  opacity: 30%;
}

.tambah {
  height: 28px;
  width: 92px;
  border-radius: 6px;
  background-color: #fae084;
  font-family: "Raleway";
  color: #212121;
  border: none;
  font-weight: 700;
  margin-left: 235px;
}

.card-desc {
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
}

.button-group {
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  margin: 6px 0;
  gap: 6px;
}
</style>
