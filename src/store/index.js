import { createStore } from "vuex";
import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";
export default createStore({
  state,
  mutations,
  getters,
  actions,
  modules: {},
});
