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
    "description": "The tool I use to build interfaces with visual consistency and speed — I adopted it on BashApp and Rodobens to ship a clean frontend without sacrificing quality."
  },
  "br": {
    "description": "Ferramenta que uso para construir interfaces com consistência visual e velocidade — adotei em BashApp e Rodobens para entregar um frontend limpo sem abrir mão da qualidade."
  }
}
</i18n>
