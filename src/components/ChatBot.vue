<script setup>
import { useBotStore } from '@/stores/bot'
import { onMounted } from 'vue'
import MyLoader from '@/components/MyLoader.vue'

const botStore = useBotStore()

onMounted(() => {
  botStore.getStartMessages()
})
</script>
<template>
  <div class="bot">
    <div class="bot__messages styled-scrollbars" :ref="(el) => (botStore.messagesEl = el)">
      <div
        class="bot__message"
        v-for="message in botStore.messages"
        :class="{ 'bot__message--user': message.byUser }"
        :key="message.id"
      >
        <span>{{ message.text }}</span>
      </div>
      <div class="bot__message" v-if="!botStore.showOptions">
        <MyLoader />
      </div>
    </div>
    <div class="bot__buttons">
      <button
        :disabled="!botStore.showOptions"
        v-for="option in botStore.options"
        :key="option.id"
        class="bot__button"
        @click="botStore.addRequest(option)"
      >
        {{ option.text }}
      </button>
    </div>
  </div>
</template>
<style lang="scss">
@use '@/assets/_variables.scss' as *;

.bot {
  margin-inline: auto;
  max-width: 20rem;
  height: 30rem;
  border-radius: 1rem;
  background: $bg-primary;
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__buttons {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.1em;
  }
  &__button {
    padding: 0.5em 1em;
    border-radius: 0.5em;
    border: none;
    cursor: pointer;
    background: $btn-bg-primary;
    color: $secondary;
    font: inherit;
    transition: background 0.2s;
    &:hover {
      background: $message-bg;
    }
    &:disabled {
      background: $grey;
      cursor: not-allowed;
    }
  }
  &__messages {
    border-radius: 0.5em;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    overflow-y: auto;
    padding-right: 0.3em;
  }
  &__message {
    padding: 0.5em 1em;
    border-radius: 0.5em;
    max-width: 80%;
    width: fit-content;
    background: $bg-secondary;
    &--user {
      align-self: end;
      background: $message-bg;
      color: $secondary;
    }
  }
}
</style>
