import Full from '@/container/Full.vue';

const dataCatalogIntro = () => import('@/views/catalog/DataCatalogIntro.vue');
const dataCatalogDownload = () => import('@/views/catalog/DataCatalogDownload.vue');
const searchByInstitute = () => import('@/views/catalog/SearchByInstitute.vue');

export default {
  path: '/catalog',
  name: 'catalog',
  component: Full,
  meta: {
    breadcrumb: 'catalog',
  },
  children: [
    {
      path: 'dataCatalogIntro',
      component: dataCatalogIntro,
      name: 'dataCatalogIntro',
    },
    {
      path: 'dataCatalogDownload',
      component: dataCatalogDownload,
      name: 'dataCatalogDownload',
    },
    {
      path: 'searchByInstitute',
      component: searchByInstitute,
      name: 'searchByInstitute',
    },
  ],
};
