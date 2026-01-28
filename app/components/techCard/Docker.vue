<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Docker"
    :description="t('description')"
    icon="i-logos-docker-icon"
    spotlight
    class="[--spotlight-color:#1D63ED]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "Docker is a platform that allows you to create, package, and run applications in containers, ensuring portability and consistency across different environments."
  },
  "br": {
    "description": "Docker é uma plataforma que permite criar, empacotar e executar aplicações em contêineres, garantindo portabilidade e consistência entre diferentes ambientes."
  }
}
</i18n>
