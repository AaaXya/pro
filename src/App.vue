<script setup lang="ts">
  type Side = {
    text: string
    icon?: string,
    state?: boolean,
    position: string
  }

  const sideName = ['hot', 'dry-pot', 'fish', 'cold-dishes', 'wine-drinks']

  const items: Side[] = [
    { text: '1', position: '/sort/a' },
    { text: '2', position: '/sort/a' },
    { text: '3', position: '/sort/v' },
    { text: '3', position: '/sort/c' },
  ]

</script>

<template class="flex">
  <!-- b-rd -->
  <ul class="flex-col h100vh w25 theme">
    <router-link tag="li" v-for="(item, index) in items" :key="index" :to="item.position"> {{
      item.text
    }}</router-link>
    <router-link class="m-t-a" to="/option">x</router-link>
  </ul>
  <router-view></router-view>
</template>

