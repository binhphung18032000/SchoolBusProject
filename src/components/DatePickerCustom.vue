<template>
  <DatePicker
    v-model="date"
    :inputFormat="inputFormat"
    type="datetime"
    lang="en"
    class="form-control"
    placeholder="eg: dd/mm/yyyy"
    style="width: 100%"
    :typeable="false"
    :disabledDates="disabledDates ?? null"
  ></DatePicker>
</template>
<script>
import DatePicker from "vue3-datepicker";
export default {
  props: ["input", "inputFormat", "disabledDates"],
  emits: ["change-date"],
  components: {
    DatePicker,
  },
  watch: {
    date() {
      this.$emit("change-date", { date: this.date });
    },
  },
  data() {
    return {
      date: this.input,
    };
  },
};
</script>
