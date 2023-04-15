import routes from './routes'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes,
    scrollBehavior: (to) => {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			}
		} else {
			return { top: 0 }
		}
	},
})

export default router