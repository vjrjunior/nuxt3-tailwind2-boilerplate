<template>
  <div class="w-screen h-screen bg-green-900 overflow-y-auto p-12">

    <div class="w-full flex flex-col items-center justify-center">
      <h1 class="text-white text-4xl font-bold">Nuxt3 + Tailwind2 Boilerplate</h1>
      <a class="underline text-green-600 text-3xl font-bold" href="https://github.com/igortrinidad/nuxt3-tailwind2-boilerplate">Github</a>
    </div>
  

    <div class="w-full flex flex-col  items-center justify-center mt-6">
        <h1 v-for="type_measure in data.type_measures" :key="type_measure.id">{{ type_measure.title }}</h1>
    </div>
  </div>
</template>

<script setup>
  import './assets/main.css'

  const query = `
    {
      type_measures {
        id
        title
      }
    }
  `
  const { data } = await useAsyncData('count', () => $fetch(
    'https://explorer-api.localenergycodes.com/api/graphql',
    {
      method: 'POST',
      body: { query }
    }
  ))


</script>
