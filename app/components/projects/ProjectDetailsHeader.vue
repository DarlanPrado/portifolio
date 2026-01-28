<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})

interface Props {
  title: string
}

const { title } = defineProps<Props>()
</script>

<template>
  <UPageHeader
    :title
    :links="[{
      label: t('back'),
      color: 'neutral',
      variant: 'subtle',
      to: '/projetos',
      trailingIcon: 'i-lucide-arrow-right'
    }]"
  />
</template>

<i18n lang="json">
{
  "us": {
    "back": "Go back"
  },
  "br": {
    "back": "Voltar"
  }
}
</i18n>
