import Full from '@/container/Full.vue';

const businessIntro = () => import('@/views/intro/BusinessIntro.vue');
const dataDeIdentified = () => import('@/views/intro/DataDeIdentified.vue');
const dataOfferProcess = () => import('@/views/intro/DataOfferProcess.vue');
const platformIntro = () => import('@/views/intro/PlatformIntro.vue');

export default {
  path: '/intro',
  name: 'intro',
  component: Full,
  meta: {
    breadcrumb: 'intro',
  },
  children: [
    {
      path: 'businessIntro',
      component: businessIntro,
      name: 'businessIntro',
    },
    {
      path: 'dataDeIdentified',
      component: dataDeIdentified,
      name: 'dataDeIdentified',
    },
    {
      path: 'dataOfferProcess',
      component: dataOfferProcess,
      name: 'dataOfferProcess',
    },
    {
      path: 'platformIntro',
      component: platformIntro,
      name: 'platformIntro',
    },
  ],
};
