<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.grey--background {
  background-color: #f2f2f2 !important;
}

.custom-divider {
  width: 6rem;
  height: 0.3rem;
  background-color: #2980b9;
  display: inline-block;
}

.custom-shadow {
  transition: 0.3s ease;
}

.custom-shadow:hover {
  box-shadow: 5px 10px 18px #888888;
}
</style>
