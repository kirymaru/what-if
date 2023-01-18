import { createStore } from "vuex";

import DiarioModule from "../modules/daybook/store/diario/index";
const store = createStore({
    modules: {
        DiarioModule,
    },
});
export default store;