<template>
  <div class="ask-method">
    <div class="container">
      <div class="row px-5 my-5">
        <div class="col-md-12">
          <h2 class="text-primary fw-bold">
            Data yang Anda masukkan akan direkam
            dan dipelajari oleh Prixa untuk meningkatkan akurasi hasil prediksi.
          </h2>
          <em class="text-primary mt-5 fn-10">
            Prixa menjamin kerahasiaan data Anda
            dan tidak akan menggunakannya untuk keperluan lain.
          </em>
        </div>
      </div>
      <div class="row">
        <div class="col-7"></div>
        <div class="col-5 text-end">
          <router-link
            class="text-white mb-2 px-4 mx-1 fn-12 rounded-5 btn btn-lg bg-info2"
            to="/conversation"
          >Setuju</router-link>
          <router-link
            class="text-white mb-2 px-3 mx-1 fn-12 rounded-5 btn btn-lg bg-info2"
            to="/consent_reject_confirmation"
          >Tidak Setuju</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "consent"
};
</script>
<style>
</style>