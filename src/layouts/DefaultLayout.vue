<script setup>
// import NavBar from "@/components/templates/NavBar.vue";
// import AsideMenu from "@/components/templates/AsideMenu.vue";
// import FooterBar from "@/components/templates/FooterBar.vue";
import CabecalhoView from '@/views/CabecalhoView.vue'
import MenuView from '@/views/MenuView.vue'

// import { mapActions } from "vuex";

// export default {
  // computed: {  
    const menu =  [
        "General",
        [
          {
            to: "/",
            icon: "desktop-mac",
            label: "Dashboard",
          },
        ],
        "Administração",
        [
          {
            to: "/sector",
            icon: "desktop-mac",
            label: "Setor",
          },
          {
            to: "/attendance",
            icon: "desktop-mac",
            label: "Atendimento",
          },
          {
            to: "/attendancereason",
            icon: "desktop-mac",
            label: "Razões dos Atendimentos",
          },
          {
            to: "/campus",
            icon: "home",
            label: "Campus",
          },
          {
            to: "/instituicao",
            icon: "home",
            label: "Instituição",
          },
          {
            to: "/student",
            icon: "home",
            label: "Estudante",
          },
          // {
          //   to: { name: "category" },
          //   label: this.$t("asideMenu.adminItems.category"),
          //   icon: "alpha-c-circle-outline"
          // },
          // {
          //   to: { name: "breed" },
          //   label: this.$t("asideMenu.adminItems.breed"),
          //   icon: "puzzle"
          // },
          // {
          //   label: this.$t("asideMenu.adminItems.sheep"),
          //   icon: "sheep",
          //   to: { name: "sheep" }
          // },
          // {
          //   label: this.$t("asideMenu.adminItems.records"),
          //   icon: "view-list",
          //   updateMark: true,
          //   menu: [
          //     {
          //       label: this.$t("asideMenu.adminItems.pregnancyDiagnosis"),
          //       icon: "medical-bag",
          //       to: { name: "pregnancyDiagnosis" }
          //     },
          //     {
          //       label: this.$t("asideMenu.adminItems.birth"),
          //       icon: "lightbulb-outline",
          //       to: { name: "birth" }
          //     }
          //   ]
          // }
        ],
        "About",
        [
          {
            href: "https://fabricadesoftware.ifc.edu.br",
            label: "About",
            icon: "help-circle",
          },
        ],
      ];
    // },
  // },

  // created() {
  //   this.asideVisible();
  // },
  // methods: {
  //   ...mapActions("ui", ["asideVisible"]),
  // },
// };
</script>
<template>
  <div>
    <CabecalhoView />
    <MenuView/>
    <router-view />
    <!-- <footer-bar /> -->
  </div>
</template>
<style></style>
