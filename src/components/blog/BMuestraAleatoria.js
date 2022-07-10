import React from "react";
import { Wrapper } from "../../styles/generalStyles";
import { Grid } from "./../../styles/boxesGeneral";
import MenuBlog from "./MenuBlog";
import {
  SecondaryTitle,
  Text,
  TertiaryTitle,
} from "./../../styles/textGeneral";

import { Latex } from "../katex/Latex";

export default function BMuestraAleatoria() {
  return (
    <main>
      <Wrapper>
        <Grid>
          <MenuBlog />
          <div>
            <SecondaryTitle>Muestra aleatoria</SecondaryTitle>
            <TertiaryTitle>Muestra aleatoria:</TertiaryTitle>
            <Text>
              El muestreo aleatorio es un proceso que permite obtener una
              muestra sobre una población, basada en una determinada
              probabilidad de elección de los individuos que la conforman. Con
              el muestreo aleatorio, por tanto, lo que hacemos es plantear un
              método de elección. Un método que tiene en cuenta diferentes
              probabilidades.
            </Text>
            <TertiaryTitle>Tipos de muestras aleatorias:</TertiaryTitle>
            <Text>
              <Latex>{`\\bullet`}</Latex> <b>Muestra aleatoria simple:</b> Este
              tipo de muestra aleatoria selecciona directamente cuando todas las
              potenciales observaciones de la población son equiponderables.
              <br />
              <Latex>{`\\bullet`}</Latex> <b>Muestra Auto-ponderada:</b> Es
              aquella muestra en la que cada individuo u objeto de la población
              tienen la misma oportunidad de ser seleccionadas para la muestra.
              Por eso se podría decir que las muestras aleatorias simples son
              auto-ponderadas.
              <br />
              <Latex>{`\\bullet`}</Latex> <b>Muestra estratificada:</b> Este
              tipo de muestra implica seleccionar muestras independientes de un
              número de subpoblaciones, grupo o estratos dentro de una
              población.
              <br />
              <Latex>{`\\bullet`}</Latex> <b>Muestra por clusters:</b> Este tipo
              de muestra consiste en seleccionar las observaciones de la muestra
              por grupos con interés relacionados.
            </Text>
            <TertiaryTitle>Distribuciones Muestrales</TertiaryTitle>
            <Text>
              Una distribución de muestral es una distribución de probabilidad
              de una estadística obtenida de un mayor número de muestras
              extraídas de una población específica. La distribución muestral de
              una población dada es la distribución de frecuencias de un rango
              de resultados diferentes que posiblemente podrían ocurrir para una
              estadística de una población.
            </Text>
          </div>
        </Grid>
      </Wrapper>
    </main>
  );
}
