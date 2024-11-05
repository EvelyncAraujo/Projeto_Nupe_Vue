<template>
  <div>
    <h3 class="subtitle is-centered has-text-centered">
      <b-icon icon="lock"></b-icon>
      Acesso ao sistema
    </h3>
    <form @submit.prevent="signin">
      <b-field :label="labelUsername" :label-position="labelPosition">
        <div class="block">
          <b-input
            v-model="user.email"
            type="text"
            placeholder="Usuário"
            required
          >
          </b-input>
        </div>
      </b-field>

      <b-field :label="labelPassword" :label-position="labelPosition">
        <div class="block">
          <b-input
            v-model="user.password"
            type="password"
            password-reveal
            placeholder="Senha"
            required
          >
          </b-input>
        </div>
      </b-field>

      <b-field>
        <b-field class="columns">
          <div class="column is-one-half">
            <b-button native-type="submit" class="is-primary" expanded
              >Login</b-button
            >
          </div>
          <div class="column is-one-half">
            <b-button type="is-primary is-outlined" @click="reset" expanded>
              Cancelar
            </b-button>
          </div>
        </b-field>
      </b-field>

    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed, reactive } from 'vue';

import { useAuthStore } from '@/stores/auth';

  const labelPosition = "on-border"
  const user = reactive({})
  const router = useRouter();
  const authStore = useAuthStore();

  const  labelUsername = computed(() => !user.email ? "" : "Usuário")
  const labelPassword = computed(() => !user.password ? "" : "Senha")
    
  
  function  reset() {
      Object.assign(user, {});
  }

  async function signin() {
      try {
        await authStore.login(user)
        router.push("/home");
      } catch (err) {
          alert('Algo de errado não está certo!')
      }
    }
</script>

<style></style>
