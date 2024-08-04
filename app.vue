<template>
  <div>
    <Layout class="snap-start"/>
    <Content class="snap-start"/>
  </div>
</template>
<script setup lang="ts">

useHead({
  bodyAttrs: {
    class: 'bg-gray-200 dark:bg-gray-800'
  },
  htmlAttrs: {
    class: 'font-mukta overflow-y-auto snap-y snap-mandatory h-screen scroll-pt-24'
  }
})

</script>
