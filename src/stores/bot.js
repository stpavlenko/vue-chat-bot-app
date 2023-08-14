import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBotStore = defineStore('bot', () => {
  const timeOut = 1000
  const startMessage = 'Привет, я умный бот! Чем я могу помочь тебе?'
  const messagesEl = ref(null)
  const messages = ref([])
  const showOptions = ref(false)
  const options = ref([
    { id: 1, text: 'Заказать пиццу' },
    { id: 2, text: 'Установить будильник' },
    { id: 3, text: 'Вывести погоду' }
  ])
  const responses = ref([
    { id: 1, text: 'Хорошо, я закажу пиццу. Что еще могу сделать?' },
    { id: 2, text: 'Будильник установлен. Чем еще я могу помочь?' },
    { id: 3, text: 'В Москве сегодня будет солнечно. Чем еще я могу помочь?' }
  ])
  async function botReply({ optionId: optionId, message: message }) {
    let text = ''
    if (message) text = message
    if (optionId) text = responses.value.find((response) => response.id === optionId).text
    await new Promise((res) => {
      setTimeout(() => {
        messages.value.push({
          text: text,
          byUser: false
        })
        res()
      }, timeOut)
    })
    scrollToEnd()
    showOptions.value = true
  }
  async function addRequest(option) {
    showOptions.value = false
    await new Promise((res) => {
      messages.value.push({
        text: option.text,
        byUser: true
      })
      res()
    })
    scrollToEnd()
    botReply({ optionId: option.id })
  }

  function getStartMessages() {
    botReply({ message: startMessage })
  }
  function scrollToEnd() {
    messagesEl.value.scrollTop = messagesEl.value.scrollHeight
  }
  return {
    messages,
    options,
    showOptions,
    responses,
    messagesEl,
    scrollToEnd,
    addRequest,
    getStartMessages
  }
})
