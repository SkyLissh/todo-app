import create, { GetState, SetState } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { FilterSlice, createFilterSlice } from "src/store/createFilterSlice";
import { TaskSlice, createTaskSlice } from "src/store/createTaskSlice";
import { ThemeSlice, createThemeSlice } from "src/store/createThemeSlice";

interface StoreState {
	filter: FilterSlice;
	tasks: TaskSlice;
	theme: ThemeSlice;
}

export type StoreSlice<T extends object> = (
	set: SetState<StoreState>,
	get: GetState<StoreState>
) => T;

function deepMerge(savedState: StoreState, currentState: StoreState): StoreState {
	return {
		filter: {
			...currentState.filter
		},
		tasks: {
			...currentState.tasks,
			...savedState.tasks
		},
		theme: {
			...currentState.theme,
			...savedState.theme
		}
	};
}

export const useStore = create<StoreState>()(
	devtools(
		persist(
			(set, get) => ({
				filter: createFilterSlice(set, get),
				tasks: createTaskSlice(set, get),
				theme: createThemeSlice(set, get)
			}),
			{
				name: "todo-app",
				partialize: (state) => ({ tasks: state.tasks, theme: state.theme }),
				merge: (state, partialState) => deepMerge(state as StoreState, partialState)
			}
		)
	)
);
