<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})

interface Props {
  title: string
  description?: string
  reverse?: boolean
  srcImage?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links?: Array<any>
  to?: string
  more?: string
}

const { title, description, reverse, srcImage, links, to, more } = defineProps<Props>()

const mylinks = []

if (to) {
  mylinks.push({
    label: t('visit'),
    color: 'neutral',
    to: to,
    blank: true
  })
}
if (more) {
  mylinks.push({
    label: t('learn_more'),
    color: 'neutral',
    variant: 'subtle',
    to: more,
    trailingIcon: 'i-lucide-arrow-right'
  })
}
if (links && links.length > 0) {
  mylinks.push(...links)
}
</script>

<template>
  <UPageCTA
    :title
    :description
    orientation="horizontal"
    :reverse
    :links="mylinks && mylinks.length ? mylinks : undefined"
  >
    <img
      v-if="srcImage"
      :src="srcImage"
      width="320"
      height="364"
      :alt="`Illustration ${title}`"
      class="w-full rounded-lg"
    >
  </UPageCTA>
</template>

<i18n lang="json">
{
  "us": {
    "visit": "Go to website",
    "learn_more": "Learn more"
  },
  "br": {
    "visit": "Visitar site",
    "learn_more": "Saiba mais"
  }
}
</i18n>
