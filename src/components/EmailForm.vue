<template>
  <form @submit.prevent="sendEmail">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="form.name" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" required />
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" v-model="form.message" required></textarea>
    </div>
    <button type="submit">Send</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const sendEmail = () => {
  const serviceID = 'service_u51co4y'
  const templateID = 'template_v0bhlzp'

  emailjs
    .send(serviceID, templateID, form.value)
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text)
    })
    .catch((error) => {
      console.error('Error sending email:', error)
    })
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
