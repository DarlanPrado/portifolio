<template>
  <!-- <LayoutNavbar /> -->
  <div class="fixed z-50 right-5 top-5">
    <LazyChangeTheme />
  </div>
  <div class="h-screen">
    <!-- <div class="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div> -->
    <div class="h-full w-full z-10 absolute bg-gradient-to-bl from-gray-200 dark:from-gray-800 via-primary-400/90 dark:via-primary-400/50 to-gray-200 dark:to-gray-800"></div>
    <div v-show="showCursorDivEffect" ref="cursorDivEffect" id="cursorDivEffect" class="absolute rounded-full transition-opacity h-[300px] w-[300px] z-20"></div>
    <div :class="useColorMode().value == 'light' ? 'grid' : ''" class="h-full w-full z-30 absolute bg-transparent backdrop-blur-sm">
      <div class="w-full h-full flex flex-col bg-gradient-to-b from-transparent to-gray-200 dark:to-gray-800" @mousemove="moveDiv" @mouseenter="showCursorDivEffect = true" @mouseleave="showCursorDivEffect = false">
        <div class="h-full flex justify-center items-center">
          <div class="p-5">
            <h2 class="font-semibold text-6xl text-center">Olá, meu nome é <span class="text-primary-600 dark:text-primary-500 text-6xl font-bold">Darlan</span></h2>
            <h4 class="text-4xl text-center">Desenvolvedor Fullstack</h4>
            <div class="flex justify-center items-center mt-2">
              <div class="flex gap-5">
                <UTooltip text="Linkedin">
                  <ULink :to="useLinksStore().getLinks['linkedin']" active-class="text-primary" target="_blank" >
                    <UIcon name="i-logos-linkedin-icon" class="w-10 h-10" />
                  </ULink>
                </UTooltip>
                <UTooltip text="Github">
                  <ULink :to="useLinksStore().getLinks['github']" active-class="text-primary" target="_blank" >
                    <UIcon name="i-logos-github-icon" class="w-10 h-10"/>
                  </ULink>
                </UTooltip>
                <UTooltip text="Gmail">
                  <ULink :to="useLinksStore().getLinks['email']" active-class="text-primary" target="_blank" >
                    <UIcon name="i-logos-google-gmail" class="w-10 h-10"/>
                  </ULink>
                </UTooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { $anime } = useNuxtApp();

const showCursorDivEffect = ref(false);
const cursorDivEffect = ref<HTMLElement | null>(null);


const moveDiv = (event: MouseEvent) => {
  if(!showCursorDivEffect.value){
    showCursorDivEffect.value = true;
  }

  if (cursorDivEffect.value) {
    const { clientX, clientY } = event;
    const circle = cursorDivEffect.value;
    const circleSize = 300; // Tamanho da div em pixels

    // Calcular a posição da div, garantindo que ela não saia da tela
    const left = Math.max(0, Math.min(clientX - circleSize / 2, window.innerWidth - circleSize - getScrollBarWidth()));
    const top = Math.max(0, Math.min(clientY - circleSize / 2, window.innerHeight - circleSize));

    circle.style.left = `${left}px`;
    circle.style.top = `${top}px`;
  }
};

const getScrollBarWidth = (): number => {
  // Cria um elemento temporário para medir a largura da barra de rolagem
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // Força a barra de rolagem a aparecer
  outer.style.width = '50px';
  outer.style.height = '50px';
  document.body.appendChild(outer);
  
  const inner = document.createElement('div');
  outer.appendChild(inner);
  
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  document.body.removeChild(outer);
  
  return scrollbarWidth;
};
</script>

<style scoped>

#cursorDivEffect {
  background: radial-gradient(circle, #06b6d4, transparent);
  filter: blur(30px);
  transition: opacity 0.5s ease-in-out;
}

.grid {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #58585815 1px, transparent 1px),
    linear-gradient(to bottom, #58585815 1px, transparent 1px);
  background-size: 24px 24px;
}
</style>
