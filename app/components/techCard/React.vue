<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="React"
    :description="t('description')"
    icon="i-devicon-react"

    spotlight
    class="[--spotlight-color:#61dafb]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "React is a JavaScript library for building user interfaces in a declarative and efficient way, based on reusable components and reactivity."
  },
  "br": {
    "description": "React é uma biblioteca JavaScript para construir interfaces de usuário de forma declarativa e eficiente, baseada em componentes reutilizáveis e reatividade."
  }
}
</i18n>
