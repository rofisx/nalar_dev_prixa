<template>
  <div class="login">
    <div class="container">
      <div class="row mx-auto">
        <div class="col-md-12">
          <h2 class="text-primary">Masuk ke akun Anda untuk melanjutkan:</h2>
          <form>
            <div class="mb-3">
              <label for="email" class="form-label fw-bold">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="email"
                placeholder="nama@email.com"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label fw-bold">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Masukan Password"
              />
            </div>
            <div class="mb-3">
              <label class="text-secondary2 fn-10" id="forgetaPassword">Lupa Password</label>
            </div>
            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary w-100">Masuk</button>
            </div>
            <div class="d-flex justify-content-center mt-3">
              <label class="text-muted">Belum memiliki akun ? &nbsp;</label>
              <router-link for="daftar" class="text-secondary2" to="/daftar">Daftar</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login"
};
</script>
<style>
</style>
