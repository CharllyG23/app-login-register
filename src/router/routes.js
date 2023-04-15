import AuthLogin from '../pages/AuthLogin/AuthLogin.vue'
import AuthRegiter from '../pages/AuthRegister/AuthRegister.vue'
import PaymentPlans from '../pages/PaymentPlans/PaymentPlans.vue'

const routes = [
    { path: '/', component: AuthLogin },
    { path: '/plans', component: PaymentPlans},
    { path: '/register', component: AuthRegiter },
  ]

export default routes; 