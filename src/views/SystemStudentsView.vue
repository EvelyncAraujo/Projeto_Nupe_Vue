<template>
    <div>
      <MainStudents />
    </div>
  </template>
  <script>
  import MainStudents from "@/components/register/Students/MainStudents.vue";
  export default {
    components: {
      MainStudents,
    },
    auth: false,
  };
  </script>