import { ReactNode, useMemo } from 'react'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles'
import { useSettings } from 'src/hooks/useSettings'
import shape from './shape'
import palette from './palette'
import typography from './typography'
import breakpoints from './breakpoints'
import componentsOverride from './overrides'
import shadows, { customShadows } from './shadows'
import { ToastContainer } from 'react-toastify'

// ----------------------------------------------------------------------

type ThemeConfigProps = {
	children: ReactNode
}

export default function ThemeConfig({ children }: ThemeConfigProps) {
	const { themeMode, themeDirection } = useSettings()
	const isLight = themeMode === 'light'

	const themeOptions: ThemeOptions = useMemo(
		() => ({
			palette: isLight ? { ...palette.light, mode: 'light' } : { ...palette.dark, mode: 'dark' },
			shape,
			typography,
			breakpoints,
			direction: themeDirection,
			shadows: isLight ? shadows.light : shadows.dark,
			customShadows: isLight ? customShadows.light : customShadows.dark,
		}),
		[isLight, themeDirection],
	)

	const theme = createTheme(themeOptions)
	theme.components = componentsOverride(theme)

	return (
		<ThemeProvider theme={theme}>
			<ToastContainer position="bottom-right" theme={themeMode} />
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}
