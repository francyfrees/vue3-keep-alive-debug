<template>
  <div>
    <div>我是详情</div>

    <div class="btn" @click="routeGo">返回列表</div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'businessShow',
  setup() {
    const $router = useRouter()
    onMounted(() => {
      console.log('我是详情')
    })

    const routeGo = () => {
      $router.go(-1)
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
