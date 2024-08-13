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
            v-model="user.username"
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
      <b-button type="is-primary" expanded>Algum problema ─></b-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "on-border",
      user: {
        grant_type: "password",
      },
    };
  },
  computed: {
    labelUsername() {
      return !this.user.username ? "" : "Usuário";
    },
    labelPassword() {
      return !this.user.password ? "" : "Senha";
    },
  },

  methods: {
    reset() {
      this.user = {
        grant_type: "password",
      };
    },
    async signin() {
      try {
        await this.$auth.loginWith("customStrategy", {
          data: this.user,
        });
        this.$router.push("/");
      } catch (err) {
        for (const item in err.response.data) {
          this.$toast.error(item + ": " + err.response.data[item]);
        }
      }
    },
  },
};
</script>

<style></style>
