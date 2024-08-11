<template>
  <section ref="section">
    <UContainer>
      <header class="mb-5">
        <h3 class="font-bold text-5xl">Sobre mim</h3>
      </header>
  
      <div class="grid lg:grid-cols-2 gap-2">
        <div class="mx-10 space-y-4 text-lg">
          <div>
            <p>Sou <strong>apaixonado</strong> por tecnologia e adoro criar soluções que resolvem problemas de maneira eficiente.</p>
          </div>
          <div>
            <p>Minha jornada na programação começou como um hobby, criando ferramentas simples em <strong>Python</strong> e <strong>JavaScript</strong>. Em janeiro de 2023, tive a oportunidade de ingressar no setor de tecnologia da empresa onde trabalhava, onde desenvolvi sistemas web, como <strong>Softphones</strong>, <strong>Webchats</strong>, <strong>CRMs</strong>, entre outros, o que aprimorou muito minhas habilidades e ampliou minha experiência, especialmente ao entregar projetos para grandes clientes.</p>
          </div>
          <div>
            <p>Nos meus momentos livres, gosto de jogar, assistir filmes e séries, ou me dedicar a projetos pessoais e aprender novas tecnologias.</p>
            <p>De vez em quando, surge uma vontade de explorar novos <strong>hobbies</strong>, como escrever um livro, tocar um instrumento ou até mesmo editar vídeos e fotos, o que me leva a aprender diversas coisas novas.</p>
          </div>
          <div>
           <p>Atualmente, estou cursando <strong>Engenharia de Software</strong> na Católica, já na quarta fase. Pretendo concluir o curso e, em seguida, considerar um <strong>mestrado</strong> ou talvez uma segunda graduação em áreas complementares, como <strong>UX/UI Design</strong> ou <strong>Gestão de Projetos</strong>.</p>
          </div>
          <div>
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