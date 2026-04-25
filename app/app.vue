<script setup>
const { t, locale } = useI18n({ useScope: 'local' })

const isPtBr = computed(() => locale.value === 'br')

const localePath = useLocalePath()

useHead(() => ({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: locale.value === 'br' ? 'pt-BR' : 'en-US'
  }
}))

useSeoMeta({
  title: () => t('seoTitle'),
  description: () => t('seoDescription')
})
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <div class="flex gap-6">
          <NuxtLink :to="localePath('/')">
            Darlan Prado
          </NuxtLink>
          <NuxtLink :to="localePath('projetos')">
            {{ t('projects') }}
          </NuxtLink>
        </div>
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="https://github.com/DarlanPrado"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
        <LangSwitcher />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-material-symbols-brightness-empty-rounded" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          {{ t('createdBy') }} Darlan Prado • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/DarlanPrado"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
        <!-- VLibras: plugin instancia Widget uma vez — v-if quebrava ao remontar; v-show só oculta o markup [vw] -->
        <VLibras v-show="isPtBr" :aria-hidden="!isPtBr" />
      </template>
    </UFooter>
  </UApp>
</template>

<i18n lang="json">
{
  "us": {
    "projects": "Projects",
    "createdBy": "Built with",
    "seoTitle": "Darlan Prado - Fullstack Developer",
    "seoDescription": "Fullstack developer focused on scalable, high-performance web applications with Nuxt.js, Node.js, and AWS."
  },
  "br": {
    "projects": "Projetos",
    "createdBy": "Criado por",
    "seoTitle": "Darlan Prado - Desenvolvedor Fullstack",
    "seoDescription": "Desenvolvedor Fullstack especializado em criar aplicações web escaláveis e de alta performance utilizando tecnologias modernas como Nuxt.js, Node.js e AWS."
  }
}
</i18n>
