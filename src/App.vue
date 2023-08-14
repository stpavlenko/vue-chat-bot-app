<script setup>
import ChatBot from '@/components/ChatBot.vue'
</script>

<template>
  <div class="wrapper">
    <ChatBot />
  </div>
</template>

<style lang="scss">
@use '@/assets/_variables.scss' as *;

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-family: 'Roboto';
  font-size: 16px;
}
.wrapper {
  padding-inline: 1rem;
}

.styled-scrollbars {
  --scrollbar-size: 7px;
}
.styled-scrollbars::-webkit-scrollbar {
  border-radius: 5px;
  width: var(--scrollbar-size);
  height: var(--scrollbar-size);
}
.styled-scrollbars::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: $grey;
}
.styled-scrollbars::-webkit-scrollbar-track {
  border-radius: 5px;
  background: $bg-secondary;
}
</style>
