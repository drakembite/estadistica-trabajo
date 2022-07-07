import {colors, fonts} from './foundations'

const theme = () => {
  return({
    /* Colors */
    white: colors.color.white,
    black: colors.color.black,
    primary: colors.color.primary,
    gray1: colors.color.gray.g100,
    gray5: colors.color.gray.g500,
    
    /* Fonts */
    textFont: fonts.textFont,
    weight: fonts.weight,
  })
}

export default theme
