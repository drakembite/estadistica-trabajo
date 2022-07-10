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

export default function BDistribucionMuestralVarianza() {
  return (
    <main>
      <Wrapper>
        <Grid>
          <MenuBlog />
          <div>
            <SecondaryTitle>
              Distribución muestral de la varianza
            </SecondaryTitle>
            <Text>
              Sea una población donde se observa la variable aleatoria{" "}
              <Latex>{`X`}</Latex>. Supongamos que{" "}
              <Latex>{`X \\to N(\\mu, \\sigma)`}</Latex>.
              <br />
              Consideramos una muestra aleatoria simple, de tamaño{" "}
              <Latex>{`n`}</Latex>, formada por las variables aleatorias,{" "}
              <Latex>{`X_1, X_2, ..., X_n`}</Latex>.
              <br />
              <Latex>{`X_1, X_2, ..., X_n \\begin{cases} Independientes\\space entre \\space si \\newline X_i \\to N(\\mu, \\sigma)\\end{cases}`}</Latex>
              .
            </Text>
            <TertiaryTitle>Teorema</TertiaryTitle>
            <Text>
              El estadístico <Latex>{`X^2`}</Latex>, definido como:
              <br />
              <Latex>{`X^2= \\frac{\\textstyle nS^2}{\\textstyle \\sigma^2}=\\frac{\\textstyle (n-1)S^2}{\\textstyle\\sigma^2} \\to X_{n-1}^2`}</Latex>
            </Text>
            <TertiaryTitle>Ejemplo:</TertiaryTitle>
            <Text>
              Se considera una medición física realizada con un instrumento de
              precisión, donde el interés se centra en la variabilidad de la
              lectura. Se sabe que la medición es una variable aleatoria con
              distribución Normal y desviación típica 4 unidades. Se toma una
              muestra aleatoria simple de tamaño 25. Obtener la probabilidad de
              que el valor de la varianza muestral sea mayor de 12.16 unidades
              cuadradas.
              <br />
              <Latex>{`X_i: "Medición" \\to N(\\mu, 4) \\newline n=25 \\newline X^2=\\frac{\\textstyle nS^2}{\\textstyle \\sigma^2} = \\frac{\\textstyle(n-1)S^2}{\\textstyle\\sigma^2} \\to X_{n-1}^2 \\newline P(S^2 \\ge 12.16) \\newline P\\bigg(\\cfrac{nS^2}{\\sigma^2} \\ge 12.16\\bigg) \\newline P\\bigg(X_{n-1}^2 \\ge \\cfrac{25 \\times 12.16}{16}\\bigg) \\newline P(X_{n-1}^2 \\ge 19) \\newline 0.75`}</Latex>
            </Text>
          </div>
        </Grid>
      </Wrapper>
    </main>
  );
}
