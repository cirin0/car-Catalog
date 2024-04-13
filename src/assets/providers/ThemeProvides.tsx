import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useEffect,
	useState,
} from 'react'

type ThemeContextType = {
	theme: string
	setTheme: Dispatch<SetStateAction<string>>
}
export const ThemeContext = createContext<ThemeContextType>({
	theme: 'darkTheme',
	setTheme: () => {},
})
export const ThemeProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [theme, setTheme] = useState<string>('darkTheme')
	useEffect(() => {
		if (theme === 'darkTheme') document.body.classList.add('darkTheme')
		else document.body.classList.remove('darkTheme')
	}, [theme])
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
	)
}
