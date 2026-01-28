<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Laravel"
    :description="t('description')"
    icon="i-logos-laravel"

    spotlight
    class="[--spotlight-color:#F05340]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "Laravel is a PHP framework designed for developing robust web applications, focusing on simplicity, security, and productivity."
  },
  "br": {
    "description": "Laravel é um framework PHP voltado para o desenvolvimento de aplicações web robustas, com foco em simplicidade, segurança e produtividade."
  }
}
</i18n>
