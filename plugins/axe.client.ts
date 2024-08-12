import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig();
    if (config.public.env === 'development') {
        try {
            const axeCore = await import('axe-core')
            // const results = await axeCore.default.run() // デフォルト設定で実行（参照：https://www.deque.com/axe/core-documentation/api-documentation/）
            const results = await axeCore.run({
                runOnly: {
                    type: 'tag',
                    // values: ['wcag21a', 'wcag21aa', 'wcag22aa'],
                    values: ['best-practice'],
                },
            })
            if (results.violations.length === 0) {
                console.log('Congratulations! No accessibility issues found🎉');
            } else {
                console.log('a11y issues:', results.violations);
            }
        } catch (error) {
            console.error('error running axe-core:', error)
        }
    }
});