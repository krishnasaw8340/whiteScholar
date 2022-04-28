import {extendTheme} from '@chakra-ui/react'

const breakpoints = {
    base: '200px',
    sm: '615px',
    md: '900px',
    lg: '980px',
    xl: '1200px'
}

const theme = extendTheme({ breakpoints })

export default theme;