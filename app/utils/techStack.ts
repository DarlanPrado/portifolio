export const TECH_STACK_SLUGS = [
  'nuxt',
  'vue',
  'typescript',
  'tailwind',
  'pinia',
  'vuetify',
  'node',
  'php',
  'laravel',
  'golang',
  'aws',
  'docker',
  'jenkins',
  'grafana',
  'gitlab'
] as const

export type TechStackSlug = (typeof TECH_STACK_SLUGS)[number]

export const TECH_STACK_META: Record<
  TechStackSlug,
  { label: string, icon: string }
> = {
  nuxt: { label: 'Nuxt', icon: 'i-logos-nuxt-icon' },
  vue: { label: 'Vue', icon: 'i-logos-vue' },
  typescript: { label: 'TypeScript', icon: 'i-logos-typescript-icon' },
  tailwind: { label: 'Tailwind', icon: 'i-logos-tailwindcss-icon' },
  pinia: { label: 'Pinia', icon: 'i-logos-pinia' },
  vuetify: { label: 'Vuetify', icon: 'i-logos-vuetifyjs' },
  node: { label: 'Node', icon: 'i-devicon-nodejs' },
  php: { label: 'PHP', icon: 'i-logos-php' },
  laravel: { label: 'Laravel', icon: 'i-logos-laravel' },
  golang: { label: 'Golang', icon: 'i-logos-gopher' },
  aws: { label: 'AWS', icon: 'i-logos-aws' },
  docker: { label: 'Docker', icon: 'i-logos-docker-icon' },
  jenkins: { label: 'Jenkins', icon: 'i-logos-jenkins' },
  grafana: { label: 'Grafana', icon: 'i-logos-grafana' },
  gitlab: { label: 'GitLab', icon: 'i-logos-gitlab-icon' }
}
