<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';

const config = useRuntimeConfig();
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
    <VueAxePopup v-if="$config.public.env === 'development'" />
  </NuxtLayout>
</template>
