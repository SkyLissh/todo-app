import { StoreSlice } from "src/store/useStore";

export interface FilterSlice {
	value: string;
	setFilter: (value: string) => void;
}

export const createFilterSlice: StoreSlice<FilterSlice> = (set) => ({
	value: "all",

	setFilter: (value: string) => {
		set((state) => ({
			filter: {
				...state.filter,
				value
			}
		}));
	}
});
