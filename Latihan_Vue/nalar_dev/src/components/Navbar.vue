<template>
  <div class="navbar">
    <!-- Desktop -->
    <div class="d-none d-md-block w-100">
      <nav class="navbar" style="margin-bottom: -40%;">
        <div class="container p-0">
          <div class="row w-100">
            <div class="col-6">
              <router-link class="ms-3" to="/">
                <img
                  src="../assets/images/logo_prixa.webp"
                  alt="logo"
                  width="125"
                  height="50"
                  class="mt-1"
                />
              </router-link>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-end">
                <router-link
                  to="/login"
                  class="btn btn-primary px-3 rounded-4 text-white fw-bold"
                >Masuk</router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="position-fixed bg-white w-100 py-2 shadow-bottom" style="z-index: 999;top:0;">
        <div class="container px-0">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>