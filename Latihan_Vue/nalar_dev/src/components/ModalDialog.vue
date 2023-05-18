<template>
  <div class="modal_dialog">
    <div
      v-if="OpenClose"
      class="modal fade show"
      tabindex="-1"
      aria-modal="true"
      aria-labelledby="exampleModalLabel"
      role="dialog"
      style="display: block;"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" @click="OpenCloseFun()" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button type="button" @click="OpenCloseFun()" :class="'btn btn-'+variant">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <button type="button" @click="OpenCloseFun()" :class="'btn btn-'+variant">Open Modal</button> -->
  </div>
</template>
<script>
export default {
  name: "ModalDialog",
  props: {
    visible: Boolean,
    variant: String
  },
  data() {
    return {
      OpenClose: this.visible
    };
  },
  methods: {
    OpenCloseFun() {
      this.OpenClose = !this.OpenClose;
    }
  },
  watch: {
    visible: function(newVal, oldVal) {
      this.OpenClose = newVal;
      console.log("new " + newVal + " == " + oldVal);
    }
  }
};
</script>
<style>
</style>