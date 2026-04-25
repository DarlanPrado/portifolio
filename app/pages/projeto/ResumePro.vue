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
          <div class="mx-4 space-y-8">
            <section>
              <h3 class="mb-3 text-2xl font-semibold text-default">
                {{ t('about_title') }}
              </h3>
              <div class="space-y-3 text-muted">
                <p>{{ t('about_p1') }}</p>
              </div>
            </section>
            <section>
              <h3 class="mb-3 text-2xl font-semibold text-default">
                {{ t('contribution_title') }}
              </h3>
              <div class="space-y-3 text-muted">
                <p>{{ t('contribution_p1') }}</p>
              </div>
            </section>
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
    "about_title": "About the project",
    "about_p1": "Personal tool to simplify building professional résumés. Users fill in a form with their information, see a live preview, and download the final PDF in one click — without wrestling with complex editors or manual formatting.",
    "contribution_title": "My contribution",
    "contribution_p1": "Project built from scratch on my own, using Nuxt, Vue, TypeScript, Tailwind, and Pinia. I implemented real-time preview as data changes on screen, and automatic PDF generation when the form is complete. It was a project to explore and consolidate the frontend stack in practice."
  },
  "br": {
    "about_title": "Sobre o projeto",
    "about_p1": "Ferramenta pessoal criada para simplificar a criação de currículos profissionais. O usuário preenche um formulário com suas informações, visualiza o resultado em tempo real e baixa o PDF final com um clique — sem precisar lidar com editores complexos ou formatação manual.",
    "contribution_title": "Minha contribuição",
    "contribution_p1": "Projeto desenvolvido do zero de forma independente, com Nuxt, Vue, TypeScript, Tailwind e Pinia. Implementei a pré-visualização em tempo real com os dados alterando dinamicamente na tela, e a geração automática do PDF ao final do preenchimento. Foi um projeto para explorar e consolidar o uso do stack frontend na prática."
  }
}
</i18n>
