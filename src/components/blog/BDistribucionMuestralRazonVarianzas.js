import React from "react";
import { Wrapper } from "../../styles/generalStyles";
import { Grid } from "../../styles/boxesGeneral";
import MenuBlog from "./MenuBlog";
import { SecondaryTitle, Text, TertiaryTitle } from "../../styles/textGeneral";

import { Latex } from "../katex/Latex";

export default function BDistribucionMuestralRazonVarianzas() {
  return (
    <main>
      <Wrapper>
        <Grid>
          <MenuBlog />
          <div>
            <SecondaryTitle>
              Distribución muestral de la razón de dos varianzas
            </SecondaryTitle>
            <Text>
              En estadística, la distribución muestral es lo que resulta de
              considerar todas las muestras posibles que pueden ser tomadas de
              una población. Su estudio permite calcular la probabilidad que se
              tiene, dada una sola muestra, de acercarse al parámetro de la
              población. Mediante la distribución muestral se puede estimar el
              error para un tamaño de muestra dado.
              <br />
              Requsitos:
              <br />
              <Latex>{`\\checkmark`}</Latex> Tamaño de muestra es menor a 30.
              <br />
              <Latex>{`\\checkmark`}</Latex> Sea{" "}
              <Latex>{`X_1, X_2, ..., X_n`}</Latex> una muestra de tamaño{" "}
              <Latex>{`n`}</Latex> de una variable <Latex>{`X`}</Latex> con
              distribución <Latex>{`N(\\mu_x,\\sigma_{x}^2)`}</Latex>.
              <br />
              <Latex>{`\\checkmark`}</Latex> Sea{" "}
              <Latex>{`Y_1, Y_2, ..., Y_n`}</Latex> una muestra aleatoria de
              tamaño <Latex>{`m`}</Latex> de una variable aleatoria{" "}
              <Latex>{`Y`}</Latex> con distribución{" "}
              <Latex>{`N(\\mu_y,\\sigma_{y}^2)`}</Latex>.
              <br />
              <Latex>{`\\checkmark`}</Latex> <Latex>{`X`}</Latex> e{" "}
              <Latex>{`Y`}</Latex> son independientes.
            </Text>
            <TertiaryTitle>TEOREMA 1</TertiaryTitle>
            <Text>
              Sea <Latex>{`X_1, X_2, ..., X_n`}</Latex> una muestra de tamaño{" "}
              <Latex>{`n`}</Latex> de una variable <Latex>{`X`}</Latex> con
              distribución <Latex>{`N(\\mu_x,\\sigma_{x}^2)`}</Latex>.
              <br />
              Sea <Latex>{`\\overline{X} \\space y \\space S^2`}</Latex> la
              media muestral y varianza muestral, respectivamente.
              <br />
              La función de la varianza muestral{" "}
              <Latex>{`\\cfrac{(n-1)s^2}{\\sigma_{x}^2}`}</Latex> tiene una
              distribución <Latex>{`X^2(n-1)`}</Latex>.
            </Text>
            <TertiaryTitle>TEOREMA 2</TertiaryTitle>
            <Text>
              Sea <Latex>{`Y_1, Y_2, ..., Y_n`}</Latex> una muestra de tamaño{" "}
              <Latex>{`n`}</Latex> de una variable <Latex>{`Y`}</Latex> con
              distribución <Latex>{`N(\\mu_y,\\sigma_{y}^2)`}</Latex>.
              <br />
              La función de la varianza muestral{" "}
              <Latex>{`\\cfrac{(m-1)s^2}{\\sigma_{y}^2}`}</Latex> tiene una
              distribución <Latex>{`X^2(m-1)`}</Latex>.
              <br />
              <Latex>{`\\cfrac{(n-1)s^2}{\\sigma_{x}^2}`}</Latex>
              <Latex>{`\\qquad\\cfrac{(m-1)s^2}{\\sigma_{y}^2}`}</Latex>
            </Text>
            <TertiaryTitle>
              Distribución muestral de razón de varianza
            </TertiaryTitle>
            <Text>
              Función de densida
              <br />
              ¿En dónde podemos utilizarla?
              <br />
              Cosas que necesitamos saber para usar la distribución
              <br />
              Distribución F de Fisher
              <br />
              Se usa en situaciones de dos muestras para extraer inferencias
              acerca de las varianzas de población
            </Text>
            <TertiaryTitle>Ejemplo</TertiaryTitle>
            <Text>
              Dos empresas C y D fabrican producto eléctrico cuya vida útil se
              distribuye normalmente. La duración del producto de C tiene una
              desviación estándar poblacional de 30 horas y en tanto que la
              duración para los de D tiene una desviación de 40 horas. Se toma
              una muestra de 6 piezas de C y 12 piezas del fabricante D. Hallar
              la probabilidad que la varianza de la primera muestra sea más de
              1.2.
              <br />
              Solución: <br />
              <Latex>{`X: Duración \\space (h) \\space de \\space las \\space piezas \\space de \\space la \\space C`}</Latex>{" "}
              <br />
              <Latex>{`Y: Duración \\space (h) \\space de \\space las \\space piezas \\space de \\space la \\space D`}</Latex>
              <br />
              Datos: <br />
              <Latex>{`G_x=30;\\quad G_y=40`}</Latex>
              <br />
              <Latex>{`n_x=6;\\quad G_x=12`}</Latex>
              <br />
              <Latex>{`F=\\cfrac{\\cfrac{mS_{y}^2}{(m-1)s^2}}{\\cfrac{nS_{y}^2}{(n-1)s^2}}`}</Latex>
              <br />
              Calculando las varianzas
              <br />
              <Latex>{`\\sigma_{1}^2=(30)^2=900; \\quad \\sigma_{2}^2=(40)^2=1600`}</Latex>
              <br />
              El problema para resolver es <br />
              <Latex>{`P\\bigg(\\cfrac{S_{x}^2}{S_{y}^2}\\bigg) \\gt 1.2`}</Latex>
              <br />
              Calculando el valor estadístico <Latex>{`F`}</Latex>
              <br />
              <Latex>{`P\\Bigg(\\cfrac{\\cfrac{6s_{1}^2}{5(900)}}{\\cfrac{12s_{2}^2}{11(1600)}}\\Bigg)=1.63\\Bigg(\\cfrac{s_{1}^2}{s_{2}^2}\\Bigg)`}</Latex>
              <br />
              Pero se tiene que ser la razón mayor que 1.2, entonces vamos
              considerar que la razón en un valor critico fuese igual a 1.2.
              <br />
              <Latex>{`\\cfrac{s_{1}^2}{s_{2}^2} = 1.2`}</Latex>
              <br />
              Por lo tanto, el valor estadístico <Latex>{`F`}</Latex> sería:
              <br />
              <Latex>{`F = (1.63)(1.2)=1.956`}</Latex>
              <br />
              <Latex>{`P\\bigg(\\cfrac{s_{x}^2}{s_{y}^2}\\bigg) \\gt 1.2 = P(F \\gt 1.956)=0.1643`}</Latex><br/> 
              La probabilidad de que la razón de varianza sea mayor que 1.2 es 16.43%
            </Text>
          </div>
        </Grid>
      </Wrapper>
    </main>
  );
}
