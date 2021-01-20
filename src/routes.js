import RegijeCard from '@/components/RegijeCard.vue';
import singleRegija from '@/components/singleRegija.vue';

/*export default[
    { path: '/', component: RegijeCard},
    { path: '/regije/:id', component: singleRegija}
] */

export const routes = [
    { path: '/regije/:id', component: Regije }
]