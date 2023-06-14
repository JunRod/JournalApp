import ThemeProvider from "@mui/material/styles/ThemeProvider"
import CssBaseline from "@mui/material/CssBaseline/CssBaseline"
import { purpleTheme } from "./"

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
