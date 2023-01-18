import state from "../module-template/state.";
import * as actions from "../module-template/actions";
import * as getters from "../module-template/getters";
import * as mutations from "../module-template/mutations";

const myCustomModule = {
  namespace: True,
  actions,
  getters,
  mutations,
  state,
};

export default myCustomModule;
