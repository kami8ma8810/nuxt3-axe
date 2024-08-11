import { defineNuxtPlugin } from '#app';
import VueAxe from 'vue-axe';
console.log('VueAxe', VueAxe)
// NOTE:多分vuepopupは存在しない

export default defineNuxtPlugin(async (nuxtApp) => {
    console.log('1')
    const config = useRuntimeConfig()
    console.log('2')
    if (config.public.env === 'development') {
        console.log('3')
        void import('vue-axe').then((vueAxe) => {
            nuxtApp.vueApp.component('VueAxePopup', vueAxe)
            nuxtApp.vueApp.use(vueAxe.default, {
                auto: true,
            })
        })
    } else {
        console.log('4')
        nuxtApp.vueApp.component('VueAxePopup', h('div'))
    }
})


// export default defineNuxtPlugin((nuxtApp) => {
//     if (process.env.NODE_ENV === 'development') {
//         import('vue-axe').then((module) => {
//             const VueAxe = module.default
//             nuxtApp.vueApp.use(VueAxe, {
//                 auto: true
//             })
//         })
//     }
// })