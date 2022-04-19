import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from './layout/Layout.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      redirect: { name: 'businessList' },
      component: Layout,
      meta: {
        title: '商家管理',
      },
      children: [
        {
          path: 'business',
          name: 'business',
          component: () => import('./business/businessList/index.vue'),
          meta: {
            title: '商家列表',
          },
          children: [
            {
              path: '',
              name: 'businessList',
              component: () => import('./business/businessList/list.vue'),
              meta: {
                title: '商家列表',
              },
            },
            {
              path: 'show/:shopId',
              name: 'businessShow',
              component: () => import('./business/businessList/show.vue'),
              meta: {
                title: '商家详情',
              },
            },
          ],
        },
      ],
    },
  ],
});
