import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../../utils/context/ThemeContext'

interface GlobalStyleProps {
  isDarkMode: boolean;
}

const StyledGlobalStyle = createGlobalStyle<GlobalStyleProps>`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? '#2F2E41' : 'white'};
        margin: 0;
    }
`

function GlobalStyle() {
  const themeContext = useContext(ThemeContext)
  
  if (!themeContext) {
    return null
  }

  const { theme } = themeContext
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
