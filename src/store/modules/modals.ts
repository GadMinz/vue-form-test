import type { ActionContext } from "vuex";
import type { IRootState } from "@/store";

export interface IModalsState {
  open: string[];
}

// initial state
const state: IModalsState = {
  open: [],
};

// getters
const getters = {
  active: (state: IModalsState) =>
    state.open.length > 0 ? state.open[0] : null,
  allOpen: (state: IModalsState) => state.open,
};

// actions
const actions = {
  open: (
    { commit }: ActionContext<IModalsState, IRootState>,
    payload: string
  ) => commit("OPEN", payload),
  close: (
    { commit }: ActionContext<IModalsState, IRootState>,
    payload: string
  ) => commit("CLOSE", payload),
};

// mutations
const mutations = {
  OPEN: (state: IModalsState, payload: string) => state.open.unshift(payload),
  CLOSE: (state: IModalsState, payload: string) =>
    (state.open = state.open.filter((e) => e !== payload)),
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
