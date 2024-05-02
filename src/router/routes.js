import SignIn from "../pages/SignIn.vue";
import SignUp from "../pages/SignUp.vue";
import SejarahLP from "../pages/SejarahLP.vue";
import HistoryTransaksi from "../pages/HistoryTransaksi.vue";
import AreaKeraton from "../pages/AreaKeraton.vue";
import Museum from "../pages/MuseumPage.vue";
import CheckoutKeraton from "../pages/CheckoutKeraton.vue";
import Checkout from "../pages/CheckOut.vue";
import PilihanPaket from "../pages/PilihanPaket.vue";
import BeranDa from "../pages/BeranDa.vue";
import EventGratis from "../pages/EventGratis.vue";
import Booking from "../pages/BookingPage.vue";
import FilterBayar from "../pages/FilterBayar.vue";
import AgungDalem from "../pages/AgungDalem.vue";
import sejarahSilsilah from "../pages/sejarahSilsilah.vue";
import silsilahDesktop from "../pages/silsilahDesktop.vue";
import AdminHomePage from "../pages/Admin/HomePage.vue";
import AdminAddPage from "../pages/Admin/AddPage.vue";
import AdminEventPage from "../pages/Admin/EventPage.vue"

const routes = [
  {
    path: "/admin/home",
    name: "AdminHomePage",
    component: AdminHomePage,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/admin/event",
    name: "AdminEventPage",
    component: AdminEventPage,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/admin/add/:id?",
    name: "AdminAddPage",
    component: AdminAddPage,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
    meta: {
      preventToken: true
    }
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
    meta: {
      preventToken: true
    }
  },
  {
    path: "/sejarah",
    name: "sejarah",
    component: SejarahLP,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/areakeraton",
    name: "areakeraton",
    component: AreaKeraton,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/museum",
    name: "museum",
    component: Museum,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/checkoutkeraton",
    name: "checkoutkeraton",
    component: CheckoutKeraton,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/pilihanpaket",
    name: "pilihanpaket",
    component: PilihanPaket,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/",
    name: "beranda",
    component: BeranDa,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/historytransaksi",
    name: "historytransaksi",
    component: HistoryTransaksi,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/eventgratis",
    name: "eventgratis",
    component: EventGratis,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/booking",
    name: "booking",
    component: Booking,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/filterbayar",
    name: "filterbayar",
    component: FilterBayar,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/agungdalem",
    name: "agungdalem",
    component: AgungDalem,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/sejarahsilsilah",
    name: "sejarahsilsilah",
    component: sejarahSilsilah,
    meta: {
      preventToken: false
    }
  },
  {
    path: "/silsilahdesktop",
    name: "silsilahktop",
    component: silsilahDesktop,
    meta: {
      preventToken: false
    }
  },
];

export default routes;
