import { createLogger, createStore } from "vuex";
import modals from "@/store/modules/modals";
import cities from "@/store/modules/cities";
import type { IModalsState } from "@/store/modules/modals";
import type { ICitiesState } from "@/store/modules/cities";

export interface IRootState {
  open: IModalsState;
  cities: ICitiesState;
}

export const store = createStore({
  modules: {
    modals,
    cities,
  },
  strict: true,
  plugins: [createLogger()],
});
