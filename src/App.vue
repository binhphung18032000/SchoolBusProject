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
          <img src="./assets/images/logo.png" alt="LOGO School Bus" />
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
body {
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  background-color: #fff;
}

#required-browser {
  background-color: #fffddb;
  height: 35px;
  padding: 5px;
}

#closeRequireBrowser {
  cursor: pointer;
  margin-right: 15px;
}

.close-button {
  float: right;
}

.heading-title {
  color: #006d29;
  font-weight: 700;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.school-name {
  font-size: 28px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.green-line {
  border-color: #006d29;
  margin-top: 20px;
  margin-bottom: 20px;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
