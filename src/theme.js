import {extendTheme} from '@chakra-ui/react'

const breakpoints = {
    sm: '880px',
    md: '600px'
}

const theme = extendTheme({...breakpoints})

export default theme;