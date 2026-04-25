<script setup lang="ts">
import type { TechStackSlug } from '~/utils/techStack'

const { t } = useI18n({
  useScope: 'local'
})

const technologies = [
  'nuxt',
  'vue',
  'typescript',
  'tailwind',
  'pinia'
] as const satisfies readonly TechStackSlug[]
</script>

<template>
  <UPage class="flex flex-col">
    <UContainer>
      <ProjectsProjectDetailsHeader title="ResumePro" />

      <UContainer>
        <UPageBody>
          <NuxtImg
            class="rounded-2xl"
            src="/projects/resume_pro/home.png"
          />
          <div class="mx-4">
            <p>{{ t('p1') }}</p>
            <p>{{ t('p2') }}</p>
            <p>{{ t('p3') }}</p>
            <p>{{ t('p4') }}</p>
          </div>
          <ProjectsProjectTechBadges :technologies="[...technologies]" />
        </UPageBody>
      </UContainer>
    </UContainer>
  </UPage>
</template>

<i18n lang="json">
{
  "us": {
    "p1": "ResumePro is a tool designed to help you create professional resumes quickly and easily.",
    "p2": "You simply fill out a form with your personal details, work experience, and education background.",
    "p3": "You can also see a live preview that updates in real time, allowing you to instantly visualize your changes.",
    "p4": "Once you’re done, just click on \"Download PDF\" and the system will automatically generate a polished PDF version of your resume."
  },
  "br": {
    "p1": "ResumePro é uma ferramenta de desenvolvida para criar currículos de forma rápida.",
    "p2": "Você preenche um formulário com as suas informações como nome, experiência e formação",
    "p3": "Também é possivel ver uma pré vizualização com os dados alterando em tempo real, assim você consegue ver de forma dinamica suas alterações",
    "p4": "Após isto basta pressionar em \"Baixar PDF\", e o sistema gera automaticamente um PDF com todas as informações preenchidas"
  }
}
</i18n>
