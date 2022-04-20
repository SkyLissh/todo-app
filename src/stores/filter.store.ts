import create from "zustand";

interface FilterState {
	value: string;
	setFilter: (value: string) => void;
}

export const filterStore = create<FilterState>((set) => ({
	value: "all",

	setFilter: (value: string) => {
		set((_) => ({
			value
		}));
	}
}));
