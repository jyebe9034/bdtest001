import Full from '@/container/Full.vue';

const dataApply = () => import('@/views/apply/DataApply.vue');
const dataApplyProcess = () => import('@/views/apply/DataApplyProcess.vue');
const dataBringInBoard = () => import('@/views/apply/DataBringInBoard.vue');
const dataTakeOutApplyResult = () => import('@/views/apply/DataTakeOutApplyResult.vue');

export default {
  path: '/apply',
  name: 'apply',
  component: Full,
  meta: {
    breadcrumb: 'apply',
  },
  children: [
    {
      path: 'dataApply',
      component: dataApply,
      name: 'dataApply',
    },
    {
      path: 'dataApplyProcess',
      component: dataApplyProcess,
      name: 'dataApplyProcess',
    },
    {
      path: 'dataBringInBoard',
      component: dataBringInBoard,
      name: 'dataBringInBoard',
    },
    {
      path: 'dataTakeOutApplyResult',
      component: dataTakeOutApplyResult,
      name: 'dataTakeOutApplyResult',
    },
  ],
};
