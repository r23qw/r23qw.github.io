<template>
  <div class="mb-6">
    <h3 class="font-bold tracking-tight text-3xl text-[var(--vp-c-text-1)] leading-8">{{ frontmatter.title }}</h3>
    <p v-if="frontmatter.date" class="font-medium pt-4 text-[var(--vp-c-text-2)] leading-6">
      {{ new Date(frontmatter.date).toLocaleDateString() }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<style scoped></style>