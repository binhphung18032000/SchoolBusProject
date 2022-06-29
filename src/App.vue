<template>
  <div>
    <div v-if="!isHidden" id="required-browser" class="col-md-12 text-center">
      <span>
        Require minimum browser version:
        <a
          href="https://www.google.com/chrome/browser/desktop/index.html"
          target="_blank"
          >Chrome 59.0</a
        >,
        <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank"
          >Firefox 54.0</a
        >, IE 11 or Edge
      </span>
      <span
        @click="isHidden = true"
        id="closeRequireBrowser"
        class="close-button"
        >X</span
      >
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <a href="http://localhost:8080/">
            <img src="./assets/images/logo.png" alt="LOGO School Bus" />
          </a>
        </div>
        <div class="col-md-8">
          <h2 class="heading-title text-center">Transport Application Form</h2>
        </div>
        <div class="col-md-12">
          <h1 class="school-name text-center">
            Chatsworth International School
          </h1>
        </div>
        <div class="col-md-12">
          <hr class="green-line" />
        </div>
        <confirm-component v-if="!isShowForm" @show-on="onShowAppForm" />
        <form-component v-if="isShowForm" />
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmComponent from "./components/confirm-component.vue";
import FormComponent from "./components/form-component.vue";
export default {
  name: "App",
  data() {
    return {
      isShowForm: false,
      isHidden: false,
    };
  },
  methods: {
    onShowAppForm() {
      this.isShowForm = !this.isShowForm;
    },
  },
  components: {
    ConfirmComponent,
    FormComponent,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Playfair+Display:wght@900&display=swap");
@import "./assets/css/app.css";
@import "~bootstrap/dist/css/bootstrap.css";
</style>
