<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <UPageSection>
    <div class="grid grid-cols-3">
      <div class="flex items-center justify-center">
        <div class="flex items-center">
          <p class="text-primary-400 text-8xl">
            +
          </p>
        </div>
        <div>
          <h3 class="text-primary-400 text-6xl text-center">
            30
          </h3>
          <div class="flex justify-center">
            <span class="text-center text-xl">
              {{ t('projects') }}
            </span>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="flex items-center">
          <p class="text-primary-400 text-8xl">
            +
          </p>
        </div>
        <div>
          <h3 class="text-primary-400 text-6xl text-center">
            300
          </h3>
          <div class="flex justify-center">
            <span class="text-center text-xl">
              Commits
            </span>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="flex items-center">
          <p class="text-primary-400 text-8xl">
            +
          </p>
        </div>
        <div>
          <h3 class="text-primary-400 text-6xl text-center">
            4 {{ t('years') }}
          </h3>
          <div class="flex justify-center">
            <span class="text-center text-xl">
              {{ t('experience') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </UPageSection>
</template>

<i18n lang="json">
{
  "us": {
    "projects": "Projects",
    "years": "years",
    "experience": "experience"
  },
  "br": {
    "projects": "Projetos",
    "years": "anos",
    "experience": "experiência"
  }
}
</i18n>
