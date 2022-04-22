import { StoreSlice } from "src/store/useStore";

export interface ThemeSlice {
	value: boolean;
	toggleTheme: () => void;
}

export const createThemeSlice: StoreSlice<ThemeSlice> = (set) => ({
	value: false,

	toggleTheme: () => {
		set((state) => ({
			theme: {
				...state.theme,
				value: !state.theme.value
			}
		}));
	}
});
