<script setup></script>
<template><span class="loader"></span></template>
<style lang="scss">
@use '@/assets/_variables.scss' as *;

.loader {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
  margin-inline: 1em;
  position: relative;
  background: $grey;
  box-shadow:
    -1em 0 $grey,
    1em 0 $grey;
  box-sizing: border-box;
  animation: shadowPulse 1s linear infinite;
}

@keyframes shadowPulse {
  33% {
    background: $grey;
    box-shadow:
      -1em 0 $primary,
      1em 0 $grey;
  }
  66% {
    background: $primary;
    box-shadow:
      -1em 0 $grey,
      1em 0 $grey;
  }
  100% {
    background: $grey;
    box-shadow:
      -1em 0 $grey,
      1em 0 $primary;
  }
}
</style>
