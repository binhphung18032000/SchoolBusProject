<template>
  <div class="col-md-12">
    <div class="confirm-step text-center" id="confirm-step">
      <h4 class="wp-confirm text-justify">
        <p>
          Please confirm that your child is a student of Chatsworth
          International School.
        </p>
        <p>
          This registration is for new riders only. You do not need to register
          your child/children <br />if they are already on our school transport
          and are existing riders.
        </p>
      </h4>
      <div class="wp-button">
        <button
          @click="onClickCancelForm"
          type="submit"
          class="btn btn-danger font-size-20 mr-3"
        >
          Cancel
        </button>
        <button
          @click="next"
          type="submit"
          class="btn btn-primary font-size-20 ml-3"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmStep",
  methods: {
    onClickCancelForm() {
      window.location = "http://www.chatsworth.com.sg";
    },
  },
};
</script>

<style>
.wp-confirm {
  font-size: 18px;
  display: inline-block;
  margin: 10px 0;
}

.wp-confirm p {
  margin-bottom: 10px;
}

.font-size-20 {
  font-size: 20px !important;
}

.wp-button {
  margin-top: 20px;
}

button {
  cursor: pointer;
}
</style>
