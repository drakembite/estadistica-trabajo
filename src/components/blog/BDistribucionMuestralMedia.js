import React from 'react'
import { Wrapper } from '../../styles/generalStyles'
import { Grid } from './../../styles/boxesGeneral'
import MenuBlog from './MenuBlog'
import { SecondaryTitle, Text, TertiaryTitle } from './../../styles/textGeneral'

export default function BDistribucionMuestralMedia() {
  return (
    <main>
      <Wrapper>
        <Grid>
          <MenuBlog />
          <div>
            <SecondaryTitle>Distribución muestral de la media</SecondaryTitle>
            <Text>Es la media de la población de la que se muestrean los elementos. Si la distribución de la población es normal, es probable que la distribución muestral de la media sea normal para las muestras de todos los tamaños.</Text>
            <Text>Sea 𝑋1, 𝑋2, … , 𝑋𝑛 , una muestra aleatoria de tamaño n, entonces llamamos media muestral o promedio muestral a la expresión:</Text>
            <TertiaryTitle>TEOREMA 1</TertiaryTitle>
            <Text>Sea 𝑋1, 𝑋2, … , 𝑋𝑛 , una muestra de una población infinita, con media µ y varianza 𝜎2,entonces:</Text>
            <TertiaryTitle>TEOREMA 2</TertiaryTitle>
          </div>
        </Grid>
      </Wrapper>
    </main>
  )
}
