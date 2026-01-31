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

const title = 'Nuxt Starter Template'
const description = 'A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
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
      </template>
    </UFooter>
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
