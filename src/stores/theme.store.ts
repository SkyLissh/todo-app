import create from "zustand";

interface ThemeState {
	value: boolean;
	toggle: () => void;
}

export const themeStore = create<ThemeState>((set) => ({
	value: localStorage.getItem("dark-theme") === "true",

	toggle: () => {
		set((state) => ({
			value: !state.value
		}));
	}
}));
