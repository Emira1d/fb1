import { createStore } from 'vuex';
import posSecurites from './posSecurites.module';
import posCash from './posCash.module';
import orders from './order.module'
import extractSecurites from './extractSecurities.module'
import extractCash from './extractCash.module'

const store = createStore({
    modules: {
        orders,
        posSecurites,
        posCash,
        extractSecurites,
        extractCash,
    },
});

export default store;