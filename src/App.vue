<template>
  <StepsForm />
</template>

<script>
import StepsForm from "./components/StepsForm.vue";
export default {
  name: "App",
  components: {
    StepsForm,
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

@import "~bootstrap/dist/css/bootstrap.css";
</style>
