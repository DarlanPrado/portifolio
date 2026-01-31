<script setup>
const { t } = useI18n({
  useScope: 'local'
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'pt-BR'
  }
})

useSeoMeta({
  title: 'Darlan Prado - Fullstack Developer',
  description: 'Desenvolvedor Fullstack especializado em criar aplicações web escaláveis e de alta performance utilizando tecnologias modernas como Nuxt.js, Node.js e AWS.'
})
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <div class="flex gap-6">
          <NuxtLink to="/">
            Darlan Prado
          </NuxtLink>
          <NuxtLink to="/projetos">
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
        <VLibras />
      </template>
    </UFooter>
    <VLibras />
  </UApp>
</template>

<i18n lang="json">
{
  "us": {
    "projects": "Projects",
    "articles": "Articles",
    "createdBy": "Built with"
  },
  "br": {
    "projects": "Projetos",
    "createdBy": "Criado por"
  }
}
</i18n>
