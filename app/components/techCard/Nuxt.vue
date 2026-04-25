<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Nuxt"
    :description="t('description')"
    icon="i-logos-nuxt-icon"

    spotlight
    class="[--spotlight-color:#00DC82]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "The framework I use as the foundation for my fullstack projects. It helps pages load faster and rank better in search — I used it on BashApp, Rodobens, and ResumePro."
  },
  "br": {
    "description": "Framework que uso como base nos meus projetos fullstack. Ele permite que as páginas carreguem mais rápido e sejam melhores indexadas — usei em BashApp, Rodobens e ResumePro."
  }
}
</i18n>
