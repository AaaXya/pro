<script setup lang="ts">
  type Side = {
    text: string
    icon?: string,
    state?: boolean,
    position: string,
    discuss?: string
  }

  const sideName = ['hot', 'dry-pot', 'fish', 'cold-dishes']


  const items: Side[] = [
    { text: '1', position: '/side/a' },
    { text: '2', position: '/side/a' },
    { text: '3', position: '/side/v' },
    { text: '3', position: '/side/c' },
    { text: '1', position: '/about', discuss: 'margin-top:auto' }]
</script>

<template>
  <ul>
    <router-link tag="li" :style="item.discuss" v-for="(item, index) in items" :key="index" :to="item.position"> {{
      item.text
    }}</router-link>

  </ul>
  <div>

    <router-view></router-view>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100px;
  background-color: rgb(255, 202, 94);
}
</style>
