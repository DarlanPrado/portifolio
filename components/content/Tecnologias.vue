<template>
  <section ref="section" class="section">
    <UContainer>
      <header class="mb-5">
        <h3 class="font-bold text-5xl">Tecnologias</h3>
      </header>
  
      <div class="mx-10 text-lg grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <GCardTechnology v-for="technology in useTecnologiesStore().getTechologies" :model-value="technology"  />
      </div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
</script>

