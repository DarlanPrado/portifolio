<script setup lang="ts">
interface Props {
  title: string
  description?: string
  nuxtModule: boolean
}

const { title, description, nuxtModule } = defineProps<Props>()
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex justify-between items-center">
        <h4 class="font-bold text-2xl">
          {{ title }}
        </h4>
        <UButton />
        <Icon
          v-if="nuxtModule"
          name="i-simple-icons-nuxtdotjs"
          class="text-4xl text-green-600"
        />
      </div>
    </template>
    <p>{{ description }}</p>
  </UCard>
</template>
