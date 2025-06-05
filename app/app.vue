<script lang="ts" setup>
useSeoMeta({
  titleTemplate: t => (t ? `${t}` : ''),
  description: 'Metaflowlabs',
  ogImage: '/og.png'
})
</script>

<template>
  <UApp>
    <Header />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Footer />
    <NuxtLoadingIndicator />
  </UApp>
</template>
