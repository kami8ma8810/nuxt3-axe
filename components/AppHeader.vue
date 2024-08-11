<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">トップページ</NuxtLink></li>
        <li><NuxtLink to="/badA11y">バッドアクセシビリティ</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #f0f0f0;
  padding: 1rem;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1rem;
}
</style>