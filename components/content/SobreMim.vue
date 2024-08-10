<template>
  <section ref="section">
    <UContainer>
      <header class="mb-5">
        <h3 class="font-bold text-5xl">Sobre mim</h3>
      </header>
  
      <div class="grid lg:grid-cols-2 gap-2">
        <div class="mx-10 space-y-4 text-lg">
          <div>
            <p>Sou desenvolvedor <strong>Fullstack</strong> especializado em criar aplicações web modernas, altamente <strong>escaláveis</strong> e de alto <strong>desempenho</strong>.</p>
            <p>Utilizo tecnologias avançadas como <strong>Nuxt3</strong>, <strong>Vue3</strong>, <strong>Typescript</strong> e <strong>Golang</strong> para entregar soluções robustas e eficientes.</p>
          </div>
          <div>
            <p>Tenho expertise em projetar e implementar bancos de dados sólidos e escaláveis, trabalhando com <strong>CockroachDB</strong>, <strong>PostgreSQL</strong>, <strong>MySQL</strong> e <strong>MongoDB</strong>.</p>
          </div>
          <div>
            <p>Com essa base, sou capaz de desenvolver uma ampla gama de ferramentas, incluindo <strong>e-commerces</strong>, <strong>landing pages</strong>, <strong>ERPs</strong> e <strong>sistemas de tempo real</strong>.</p>
          </div>
        </div>
        <div id="divImage" class="flex justify-center items-center teste rounded-full">
          <NuxtImg src="/avatar.png" width="md:w-[10px] lg:w-full" height="h-full" />
        </div>
      </div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">


</script>
<style scoped>
#divImage{
  background: radial-gradient(#06b6d4, transparent);
}
</style>