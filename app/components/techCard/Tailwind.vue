<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageCard
    title="Tailwind"
    :description="t('description')"
    icon="i-logos-tailwindcss-icon"

    spotlight
    class="[--spotlight-color:#00bcff]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "description": "Tailwind is a utility CSS framework that allows you to quickly create custom interfaces using predefined classes to style directly in HTML."
  },
  "br": {
    "description": "Tailwind é um framework CSS utilitário que permite criar interfaces personalizadas rapidamente, usando classes pré-definidas para estilizar diretamente no HTML."
  }
}
</i18n>
