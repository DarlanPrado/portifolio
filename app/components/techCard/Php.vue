<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="PHP"
    :description="t('description')"
    icon="i-logos-php"

    spotlight
    class="[--spotlight-color:#787CB5]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "PHP is a programming language geared towards web development, primarily used on the server side to create dynamic and interactive websites."
  },
  "br": {
    "description": "PHP é uma linguagem de programação voltada para o desenvolvimento web, usada principalmente no lado do servidor para criar sites dinâmicos e interativos."
  }
}
</i18n>
