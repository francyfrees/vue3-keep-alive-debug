<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade">
        <keep-alive :include="cachedViewsDeep">
          <component :is="Component" :key="key" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'business',
  setup() {
    const route = useRoute();

    const key = computed(() => {
      return route.name || route.path;
    });
    const cachedViewsDeep = computed(() => {
      // 缓存商品列表页面
      return ['businessList'];
    });

    return {
      key,
      cachedViewsDeep,
    };
  },
};
</script>

<style lang="scss" scoped></style>
