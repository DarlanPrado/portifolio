<script setup lang="ts">
import type { TechStackSlug } from '~/utils/techStack'

const { t } = useI18n({
  useScope: 'local'
})

const technologies = [
  'aws',
  'node',
  'typescript',
  'gitlab',
  'docker'
] as const satisfies readonly TechStackSlug[]
</script>

<template>
  <UPage class="flex flex-col">
    <UContainer>
      <ProjectsProjectDetailsHeader title="Brasilcap" />

      <UContainer>
        <UPageBody>
          <NuxtImg
            class="rounded-2xl"
            src="/projects/brasilcap/home.png"
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
                <p>{{ t('contribution_p2') }}</p>
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
    "about_p1": "Internal system built for one of Brazil’s largest capitalization companies — linked to Banco do Brasil, with over 15 million customers and R$6.4 billion in revenue in 2023. The platform centralizes management of capitalization bond sales, customer follow-up, document issuance, and management reporting for the sales force.",
    "contribution_title": "My contribution",
    "contribution_p1": "I worked on developing and improving the platform using a microservices architecture and AWS services such as SQS, DynamoDB, API Gateway, and EC2. I helped define baseline models and coding standards, improving consistency across teams. I supported application reviews, finding and fixing critical bugs, and produced documentation and packages for endpoint testing.",
    "contribution_p2": "One of the most sensitive phases was leading development of the core integration between Brasilcap and Núclea — infrastructure that processes financial transactions and records operations for the market. This required extra care around data flow, security, consistency, and communication between systems."
  },
  "br": {
    "about_title": "Sobre o projeto",
    "about_p1": "Sistema interno desenvolvido para uma das maiores empresas de capitalização do Brasil — vinculada ao Banco do Brasil, com mais de 15 milhões de clientes e R$ 6,4 bilhões em faturamento em 2023. A plataforma centraliza a gestão de vendas de títulos de capitalização, acompanhamento de clientes, emissão de documentos e geração de relatórios gerenciais para a força de vendas.",
    "contribution_title": "Minha contribuição",
    "contribution_p1": "Atuei no desenvolvimento e aprimoramento da plataforma utilizando arquitetura de microserviços e serviços AWS como SQS, DynamoDB, API Gateway e EC2. Contribuí para a definição de modelos base e padrões de código, aumentando a consistência entre as equipes. Apoiei na revisão de aplicações, identificação e correção de bugs críticos, além de produzir documentação e desenvolver pacotes para testes de endpoints.",
    "contribution_p2": "Um dos momentos mais sensíveis foi liderar o desenvolvimento do núcleo de integração entre a Brasilcap e a Núclea — infraestrutura que processa transações financeiras e registra operações para o mercado. Essa etapa exigiu atenção redobrada a fluxo de dados, segurança, consistência e comunicação entre sistemas."
  }
}
</i18n>
