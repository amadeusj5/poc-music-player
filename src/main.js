import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase/app";
import firebaseConfig from "../firebase.config";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
