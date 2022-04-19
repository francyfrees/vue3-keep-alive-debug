<template>
  <div>
    <div>我是列表</div>

    <div class="btn" @click="routeGo">跳转详情</div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'businessList',
  setup() {
    const $router = useRouter()
    onMounted(() => {
      console.log('我是列表')
    })

    const routeGo = () => {
      $router.push({ name: 'businessShow', params: { shopId: 1 } })
    }

    return {
      routeGo,
    }
  },
}
</script>

<style scoped>
.btn {
  margin-top: 20px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: blue;
  color: #fff;
  cursor: pointer;
}
</style>
