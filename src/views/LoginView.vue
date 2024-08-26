<script setup>
import FormLogin from '@/components/FormLogin.vue'
</script>
<template>
  <section class="section is-main-section">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column has-text-centered">
          <img src="@/assets/owl.svg" />
        </div>
        <div class="column has-text-centered">
          <form-login icon="" title="Acesso ao sistema"></form-login>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
  html.has-aside-left.has-aside-expanded nav.navbar,
  html.has-aside-left.has-aside-expanded body {
    padding: 0 5rem;
  }
}
</style>
