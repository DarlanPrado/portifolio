<template>
    <UContainer>
        <header class="mb-5">
          <h3 class="font-bold text-5xl">Me contate</h3>
        </header>

        <div class="mx-10 space-y-6 text-xl font-bold">
            <ULink class="flex items-center gap-2 cursor-pointer hover:text-primary-600" :to="useLinksStore().getLinks['linkedin']" active-class="text-primary" target="_blank" >
                <UIcon name="i-logos-linkedin-icon" class="w-10 h-10" />
                <span>Linkedin</span>
            </ULink>
            <ULink class="flex items-center gap-2 cursor-pointer hover:text-primary-600" :to="useLinksStore().getLinks['github']" active-class="text-primary" target="_blank" >
                <UIcon name="i-logos-github-icon" class="w-10 h-10"/>
                <span>Github</span>
            </ULink>
            <ULink class="flex items-center gap-2 cursor-pointer hover:text-primary-600" :to="useLinksStore().getLinks['email']" active-class="text-primary" target="_blank" >
                <UIcon name="i-logos-google-gmail" class="w-10 h-10"/>
                <span>Email</span>
            </ULink>
        </div>
      </UContainer>
</template>