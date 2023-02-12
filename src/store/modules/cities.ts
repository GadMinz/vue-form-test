import type { ActionContext } from "vuex";
import type { IRootState } from "@/store";
import type { ICity } from "@/types";

export interface ICitiesState {
  all: ICity[];
  selected: number;
}

// initial state
const state: ICitiesState = {
  all: [
    {
      id: 1,
      name: "Москва",
    },
    {
      id: 2,
      name: "Санкт-Петербург",
    },
    {
      id: 3,
      name: "Казань",
    },
  ],
  selected: 1,
};

// getters
const getters = {
  all: (state: ICitiesState) => state.all,
};

// actions
const actions = {
  setSelect: (
    { commit }: ActionContext<ICitiesState, IRootState>,
    payload: number
  ) => commit("SET_SELECT", payload),
};

// mutations
const mutations = {
  SET_SELECT: (state: ICitiesState, payload: number) =>
    (state.selected = payload),
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
