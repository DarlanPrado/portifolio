<template>
  <div class="w-full flex items-center h-20 backdrop-blur-sm bg-gradient-to-r from-gray-300 via-gray-300/65 to-gray-300 dark:from-gray-800 dark:via-gray-800/85 dark:to-gray-800 via-85% p-5 border-b-2 border-gray-400 dark:border-gray-700 fixed">
    <div class="flex items-center justify-between w-full">
      <NuxtLink :to="useRoute().path"><h1 class="font-bold text-2xl font-bebas"><span class="text-primary-500">DARLAN</span>PRADO</h1></NuxtLink>
      <div>
        <ChangeTheme />
      </div>
    </div>
  </div>
</template>