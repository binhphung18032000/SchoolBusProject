<template>
  <img class="mb-3 d-none" style="max-width: 200px" :src="imageSrc" alt="" />
  <div :id="refID"></div>
</template>

<script>
export default {
  props: ["refID", "inputImage"],
  mounted() {
    const vm = this;

    this.croppie_obj = new Croppie(
      document.getElementById(this.refID),
      this.otps
    );

    document
      .getElementById(this.refID)
      .addEventListener("update", function (ev) {
        vm.resultImage();
      });
  },
  data() {
    return {
      croppie_obj: null,
      imageSrc: null,
      hasCroppie: false,
      otps: {
        viewport: {
          width: 200,
          height: 200,
          type: "square",
        },
        boundary: {
          width: 300,
          height: 300,
        },
        showZoomer: true,
        enableOrientation: true,
      },
    };
  },
  methods: {
    resultImage() {
      const vm = this;
      let options = {
        size: { width: 480, height: 480 },
        format: "png",
        circle: false,
      };

      this.croppie_obj.result(options).then(function (blob) {
        if (vm.hasCroppie) {
          vm.imageSrc = blob;
        }
      });
    },

    bindCroppie(rawImg, zoom = null) {
      const vm = this;
      vm.hasCroppie = true;

      this.croppie_obj
        .bind({
          url: rawImg,
          zoom: zoom,
        })
        .then(function () {
          console.log("Javascript bind complete");
        })
        .catch(function (e) {
          console.log("Error", e);
          vm.hasCroppie = false;
          vm.imageSrc = null;
        });
    },
    refreshCroppie() {
      const vm = this;
      vm.hasCroppie = false;
      vm.imageSrc = null;
      this.croppie_obj.destroy();
      this.croppie_obj = new Croppie(
        document.getElementById(this.refID),
        this.otps
      );
    },
  },
};
</script>
