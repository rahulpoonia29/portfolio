"use client";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

type Theme = "light" | "dark";
interface ThemeContextValue {
	theme: Theme;
	toggle: () => void;
	setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getPreferredTheme(): Theme {
	if (typeof window === "undefined") return "dark"; // default SSR fallback
	const stored = window.localStorage.getItem("theme") as Theme | null;
	if (stored === "light" || stored === "dark") return stored;
	const mq = window.matchMedia("(prefers-color-scheme: light)").matches;
	return mq ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setThemeState] = useState<Theme>(getPreferredTheme);

	const applyTheme = useCallback((t: Theme) => {
		const root = document.documentElement;
		if (t === "dark") root.classList.add("dark");
		else root.classList.remove("dark");
		root.style.setProperty("color-scheme", t);
	}, []);

	useEffect(() => {
		applyTheme(theme);
	}, [theme, applyTheme]);

	const setTheme = useCallback((t: Theme) => {
		setThemeState(t);
		try {
			window.localStorage.setItem("theme", t);
		} catch {}
	}, []);

	const toggle = useCallback(() => {
		setTheme(theme === "dark" ? "light" : "dark");
	}, [theme, setTheme]);

	return (
		<ThemeContext.Provider value={{ theme, toggle, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
	return ctx;
}
