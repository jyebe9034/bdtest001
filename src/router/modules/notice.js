import Full from '@/container/Full.vue';

const notice = () => import('@/views/notice/Notice.vue');
const fAQ = () => import('@/views/notice/FAQ.vue');
const qnA = () => import('@/views/notice/QnA.vue');

export default {
  path: '/notice',
  name: 'notice',
  component: Full,
  meta: {
    breadcrumb: 'notice',
  },
  children: [
    {
      path: 'notice',
      component: notice,
      name: 'notice',
    },
    {
      path: 'fAQ',
      component: fAQ,
      name: 'fAQ',
    },
    {
      path: 'qnA',
      component: qnA,
      name: 'qnA',
    },
  ],
};
