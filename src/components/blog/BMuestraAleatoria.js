import React from 'react'
import { Wrapper } from '../../styles/generalStyles'
import { Grid } from './../../styles/boxesGeneral'
import MenuBlog from './MenuBlog'
import { SecondaryTitle, Text } from './../../styles/textGeneral'

export default function BMuestraAleatoria() {
  return (
    <main>
      <Wrapper>
        <Grid>
          <MenuBlog />
          <SecondaryTitle>Muestra aleatória</SecondaryTitle>
          <Text></Text>
        </Grid>
      </Wrapper>
    </main>
  )
}
