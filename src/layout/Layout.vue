<template>
  <div class="app-main">
    <div class="container-fluid">
      <router-view v-slot="{ Component }">
        <!-- 有过渡动画 -->
        <transition mode="out-in" name="fade">
          <keep-alive>
            <component :is="Component" :key="key" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()

    const key = computed(() => route.name || route.path)

    const cachedViews = computed(() => {
      // 缓存商品页面
      return ['business']
    })
    return {
      key,
      cachedViews,
    }
  },
}
</script>
