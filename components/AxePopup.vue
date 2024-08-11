<script setup lang="ts">
import VueAxe from "vue-axe";
import { ref, onMounted } from "vue";

const config = useAppConfig();
const showAxePopup = ref(false);

// onMounted(() => {
//   showAxePopup.value = config.isDevelopment;
//   console.log("showAxePopup", showAxePopup.value);

//   if (showAxePopup.value) {
//     const app = useNuxtApp();
//     app.vueApp.use(VueAxe);
//   }
// });
</script>

<template>
  <!-- <VueAxePopup v-if="showAxePopup" /> -->
</template>
