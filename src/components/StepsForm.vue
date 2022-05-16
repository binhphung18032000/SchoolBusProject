<template>
  <div>
    <h1>This is Steps Form in vuejs 3 phùng an bình</h1>
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
          <img src="../assets/logo.png" alt="LOGO School Bus" />
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
        <component v-bind:is="steps[currentStep].component" />
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmStep from "./Steps/ConfirmStep.vue";
import FormStep from "./Steps/FormStep.vue";

export default {
  name: "StepsForm",
  data() {
    return {
      isHidden: false,
      currentStep: 0,
      steps: [
        {
          component: ConfirmStep,
        },
        {
          component: FormStep,
        },
      ],
    };
  },
  methods: {
    next() {
      this.currentStep += 1;
    },
  },
  components: [ConfirmStep, FormStep],
};
</script>

<style>
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
</style>
