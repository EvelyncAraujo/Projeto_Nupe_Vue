<template>
    <div>
      <MainUsers />
    </div>
  </template>
  <script>
  import MainUsers from "@/components/register/Users/MainUsers.vue";
  export default {
    auth: false,
    components: {
      MainUsers,
    },
  };
  </script>