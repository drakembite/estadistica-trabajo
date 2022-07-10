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

export default function BDistribucionMuestralMedia() {
  return (
    <main>
      <Wrapper>
        <Grid>
          <MenuBlog />
          <div>
            <SecondaryTitle>
              Distribución muestral de la media
              <Latex>{`(\\overline{X})`}</Latex>
            </SecondaryTitle>
            <Text>
              Es la media de la población de la que se muestrean los elementos.
              Si la distribución de la población es normal, es probable que la
              distribución muestral de la media sea normal para las muestras de
              todos los tamaños.
            </Text>
            <Text>
              Sea <Latex>{`X_1, X_2, ..., X_n`}</Latex>, una muestra aleatoria
              de tamaño n, entonces llamamos media muestral o promedio muestral
              a la expresión:
            </Text>
            <Latex>{`\\overline{X}=\\frac{\\textstyle\\sum x_i}{\\textstyle n}`}</Latex>
            <TertiaryTitle>TEOREMA 1</TertiaryTitle>
            <Text>
              Sea <Latex>{`X_1, X_2, ..., X_n`}</Latex>, una muestra de una
              población infinita, con media <Latex>{`\\mu`}</Latex> y varianza{" "}
              <Latex>{`\\sigma_2`}</Latex>, entonces:
              <Latex>{`a) E(\\overline{X})=\\mu \\newline b) V(\\overline{X})=\\sigma^2_{\\overline{x}}=\\frac{\\sigma^2}{n}`}</Latex>
            </Text>
            <Text>
              Si la población es finita de tamaño <Latex>{`N`}</Latex>,
              entonces: <br />
              <Latex>{`\\sigma^2_{\\overline{x}}=\\frac{\\sigma^2}{n}\\times(\\frac{N-n}{N-1})`}</Latex>
            </Text>

            <TertiaryTitle>TEOREMA 2</TertiaryTitle>
            <Text>
              Sea <Latex>{`X_1, X_2, ..., X_n`}</Latex>, una muestra de una de
              tamaño <Latex>{`n`}</Latex> de una población que se distribuye
              Normal con media <Latex>{`\\mu`}</Latex> y varianza{" "}
              <Latex>{`\\sigma^2`}</Latex>, entonces:
              <br />
              <Latex>{`\\overline{X}=\\frac{\\textstyle\\Sigma x_i}{n} \\thicksim N(\\mu, \\frac{\\sigma^2}{n})`}</Latex>
              <br />
              <Latex>{`\\bullet`}</Latex> Distribución de la media muestral
              <br />
              Si <Latex>{`X = N(\\mu, \\sigma)`}</Latex>
              <br />
              <Latex>{`\\overline{X}=N(\\mu, \\frac{\\sigma}{\\sqrt{n}}) \\lrarr \\frac{\\underline{X-\\mu}}{\\sigma/\\sqrt{n}}=N(0,1)`}</Latex>
              <br />
              Aunque la variable no sea normal, lo anterior también se cumple si{" "}
              <Latex>{`n`}</Latex> es grande <Latex>{`(>30)`}</Latex>. Si la
              población es normal, pero <Latex>{`\\sigma`}</Latex> es
              desconocida.
              <br />
              <Latex>{`\\cfrac{\\overline{X}-\\mu}{\\widehat{s}/\\sqrt{n}}=t_{n-1}`}</Latex>
            </Text>
            <TertiaryTitle>TEOREMA 3</TertiaryTitle>
            <Text>
              Sea <Latex>{`X_1, X_2, ..., X_n`}</Latex>, una muestra de tamaño{" "}
              <Latex>{`n`}</Latex> de una población que se distribuye Normal con
              media <Latex>{`\\mu`}</Latex> y varianza{" "}
              <Latex>{`\\sigma^2`}</Latex>, entonces:
              <br />
              <Latex>{`\\cfrac{\\overline{X}-\\mu}{\\textstyle\\frac{\\sigma}{\\sqrt{n}}} \\approx N(0,1)`}</Latex>
            </Text>
            <TertiaryTitle>TEOREMA 4</TertiaryTitle>
            <Text>
              Sea <Latex>{`X_1, X_2, ..., X_n`}</Latex>, una muestra de tamaño{" "}
              <Latex>{`n`}</Latex> de una población infinita con media{" "}
              <Latex>{`\\mu`}</Latex> y varianza <Latex>{`\\sigma^2`}</Latex>,
              entonces, la distribución límite de la variable aleatoria{" "}
              <Latex>{`Z`}</Latex> definida por:
              <br />
              <Latex>{`Z=\\frac{\\textstyle\\sum_{i=1}^n X_i - n\\mu}{\\textstyle\\sigma\\sqrt{n}}=\\frac{\\overline{X}-\\mu}{\\textstyle\\frac{\\sigma}{\\sqrt{n}}}`}</Latex>
              Es la distribución normal estándar, cuando <Latex>{`n`}</Latex>{" "}
              tiende a infinito.
              <br />
              <Latex>{`n \\rarr \\infin`}</Latex>
              <br />
              <Latex>{`Z \\thicksim N(0,1)`}</Latex>
            </Text>
            <TertiaryTitle>EJEMPLO</TertiaryTitle>
            <Text>
              La vida media de una máquina para hacer pasta es de siete años,
              con una desviación estándar de un año. Supongamos que las vidas de
              estas máquinas siguen aproximadamente una distribución normal.
            </Text>
            <TertiaryTitle>Calcular:</TertiaryTitle>
            <Text>
              a) La probabilidad de que la vida media de una muestra aleatoria
              de nueve de estas máquinas esté entre 6.4 y 7.2 años.
            </Text>
            <TertiaryTitle>SOLUCIÓN</TertiaryTitle>
            <Text>
              <Latex>{`\\bullet X:`}</Latex> vida útil de la{" "}
              <Latex>{`\\thicksim N(\\mu=7; \\sigma=1)`}</Latex>
              <br />
              <Latex>{`\\bullet`}</Latex> Hallando el inciso "a" con el Teorema
              4 <Latex>{`(n=9)`}</Latex>
              <br />
              <Latex>{`P(6.4 < \\overline{X} < 7.2) \\newline P(\\frac{6.4 - 7}{\\textstyle\\frac{1}{\\sqrt{9}}} < \\frac{\\overline{X} - \\mu}{\\textstyle\\frac{\\sigma}{\\sqrt{n}}} < \\frac{7.2 - 7}{\\textstyle\\frac{1}{\\sqrt{9}}}) \\newline P(-1.8 < Z < 0.6) \\newline P(Z < 0.6) - P(Z<1.8) \\newline 0.7257-0.0359 \\newline 0.6898`}</Latex>
            </Text>
          </div>
        </Grid>
      </Wrapper>
    </main>
  );
}
