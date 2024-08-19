<template>
  <aside v-show="isAsideVisible" class="aside is-expanded is-placed-left">
    <aside-tools :is-main-menu="true">
      <template v-slot:label> <b>NuPe</b> Online </template>
    </aside-tools>
    <div class="menu is-menu-main">
      <template v-for="(menuGroup, index) in menu" :key="index">
        <p v-if="typeof menuGroup === 'string'"  class="menu-label">
          {{ menuGroup }}
        </p>
        <aside-menu-list
          v-else
          :menu="menuGroup"
          @menu-click="menuClick"
        />
      </template>
    </div>
  </aside>
</template>
    
<script>
import { mapState } from "vuex";
import AsideTools from "@/components/templates/AsideTools.vue";
import AsideMenuList from "@/components/templates/AsideMenuList.vue";

export default {
  name: "AsideMenu",
  components: { AsideTools, AsideMenuList },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState("ui", ["isAsideVisible"])
  },
  methods: {
    // eslint-disable-next-line
    menuClick(item) {
      console.log("item");
    }
  }
};
</script>
