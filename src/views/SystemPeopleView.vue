<template>
    <div>
      <mainPeople />
    </div>
  </template>
  <script>
  import MainPeople from "@/components/register/People/MainPeople.vue";
  export default {
    components: {
      MainPeople,
    },
    auth: false,
  };
  </script>