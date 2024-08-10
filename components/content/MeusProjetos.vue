<template>
  <div>
    <UContainer>
      <header class="mb-5">
        <h3 class="font-bold text-5xl">Meus Projetos</h3>
      </header>
  
      <div class="mx-10 text-lg flex flex-col gap-4">
        <GCardProjeto ref="card" v-for="project in useProjectsStore().getProjects" :key="project.id" :data="project" />
      </div>
    </UContainer>
  </div>
</template>
<script setup lang="ts">

</script>