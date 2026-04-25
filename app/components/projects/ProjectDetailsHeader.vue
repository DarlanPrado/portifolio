<script setup lang="ts">
const localePath = useLocalePath()

const { t } = useI18n({
  useScope: 'local'
})

interface Props {
  title: string
}

const { title } = defineProps<Props>()

const headerLinks = computed(() => [
  {
    label: t('back'),
    color: 'neutral' as const,
    variant: 'subtle' as const,
    to: localePath('projetos'),
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageHeader
    :title
    :links="headerLinks"
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
