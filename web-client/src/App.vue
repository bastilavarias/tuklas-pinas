<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.grey-background {
  background-color: #f2f2f2 !important;
}

.custom-divider {
  width: 6rem;
  height: 0.3rem;
  background-color: #ff7557;
  display: inline-block;
}

.custom-shadow {
  transition: 0.3s ease;
}

.custom-shadow:hover {
  box-shadow: 5px 10px 18px #888888;
}

.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 2;
}

.blur-effect {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
}

.cursor-pointer {
  cursor: pointer;
}
</style>
