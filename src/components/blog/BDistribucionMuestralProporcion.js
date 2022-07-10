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

export default function BDistribucionMuestralProporcion() {
  return (
    <main>
      <Wrapper>
        <Grid>
          <MenuBlog />
          <div>
            <SecondaryTitle>
              Distribución muestral de la proporción (p)
            </SecondaryTitle>
            <Text>
              Sea <Latex>{`X_1, X_2, ..., X_n`}</Latex> una muestra aleatoria de
              tamaño <Latex>{`n(grande)`}</Latex> extraída de la población de{" "}
              <Latex>{`Bernoulli \\space B(1, p)`}</Latex>, donde p es el
              porcentaje de éxitos en la población y sea.
              <br />
              <Latex>{`\\overline{p} \\cfrac{X_1, X_2, ..., X_n}{n}=\\cfrac{X}{n}`}</Latex>
              <br />
              La proporción de éxitos en la muestra, siendo.{" "}
              <Latex>{`X_1 + X_2 + ... + X_n`}</Latex> una variable binomial{" "}
              <Latex>{`B(n, p)`}</Latex>, entonces.
              <br />
              a){" "}
              <Latex>{`\\mu_{\\overline{p}}=E(\\overline{P})=E(\\cfrac{X}{n})=\\cfrac{1}{n}E(X)=\\cfrac{1}{n}(np)=p`}</Latex>
              <br />
              b){" "}
              <Latex>{`\\sigma^2_{\\overline{p}}=V(\\overline{P})=V(\\cfrac{X}{n})=\\cfrac{1}{n^2}V(X)=\\cfrac{1}{n^2}[np(1-p)]=\\cfrac{p(1-p)}{n}`}</Latex>
              <br />
              c) Si <Latex>{`n`}</Latex> no es suficientemente grande, entonces
              la variable es aleatoria:
              <br />
              <Latex>{`Z=\\cfrac{P-p}{\\sqrt{p(1-p)/n}}`}</Latex>
              <br />
              Tiene aproximadamente distribución N(0,1)
            </Text>
            <TertiaryTitle>FÓRMULAS</TertiaryTitle>
            <Text>
              a) Si <Latex>{`n`}</Latex> es grande:
              <Latex>{`(n.p>5 \\wedge n.q>5)`}</Latex>
              <br />
              <TertiaryTitle>Fórmula 1:</TertiaryTitle>
              <Latex>{`Z=\\cfrac{\\overline{P}-p}{\\sqrt{\\cfrac{p.q}{n}}}\\thicksim N(0,1)`}</Latex>
              <br />
              <TertiaryTitle>Fórmula 2:</TertiaryTitle>
              Si el muestreo es sin reemplazo y población binomial finita (N)
              <br />
              <Latex>{`Z=\\cfrac{\\overline{P}-p}{\\sqrt{\\cfrac{p.q}{n}\\bigg(\\cfrac{N-n}{N-1}\\bigg)}}\\thicksim N(0,1)`}</Latex>
              <br />
              b) Si <Latex>{`n`}</Latex> es pequeño (Se agrega el factor de
              correción de continuidad)
              <Latex>{`\\to \\pm \\cfrac{1}{2n}`}</Latex>
              <br />
              <Latex>{`Z=\\cfrac{\\overline{P}\\pm \\cfrac{1}{2n}-p}{\\sqrt{\\cfrac{p.q}{n}}}`}</Latex>
              <br />
            </Text>
            <TertiaryTitle>NOTAS</TertiaryTitle>
            <Text>
              1. El error estándar de <Latex>{`\\overline{P}`}</Latex> es:{" "}
              <Latex>{`\\sigma_{\\overline{P}}=\\sqrt{\\cfrac{p(1-p)}{n}}`}</Latex>
              <br />
              2. Si la población es finita de tamaño <Latex>{`N`}</Latex> y el
              muestreo es sin reposición el error estándar (desviación estándar
              de la hipergeometrica) es:
              <br />
              <Latex>{`\\sigma_{\\overline{P}}=\\sqrt{\\cfrac{p(1-p)}{n}}\\sqrt{\\cfrac{N-n}{n-1}}`}</Latex>
              <br />
              3. Si <Latex>{`n`}</Latex> es suficientemente grande{" "}
              <Latex>{`(n>30)`}</Latex>
              <br />
              <Latex>{`P[\\overline{P} \\leq c] \\cong P[Z \\leq \\cfrac{(c+1/(2n))-p}{\\sigma_{\\overline{P}}}]`}</Latex>
              <br />
              4. Observar que las dos expresiones de <Latex>{`Z`}</Latex>
              <br />
              <Latex>{`Z=\\cfrac{X-np}{\\sqrt{np(1-p)}}=\\cfrac{\\overline{P}-p}{\\sqrt{p(1-p)}}`}</Latex>
              <br />
              Donde <Latex>{`X`}</Latex> es binomial y{" "}
              <Latex>{`\\overline{P}`}</Latex> es el porcentaje de éxitos en la
              muestra, tienen distribución <Latex>{`N(0,1)`}</Latex>
            </Text>
            <TertiaryTitle>EJEMPLOS:</TertiaryTitle>
            <Text>
              El departamento de compras de una compañía de hardware rechaza,
              por sistema, remesas de refacciones si en una muestra aleatoria de
              100 de un lote de 10000 partes presenta 10 o más productos
              defectuosos. Encuentre la probabilidad de que se rechace el lote
              si se tiene un porcentaje de producción del 5%.
              <br />
              Solución:
              <br />
              <Latex>{`X: \\#productos \\space defectuosos \\newline n=10 \\newline N=10 000 \\newline Rechaza \\space si \\space x \\geq 10`}</Latex>
              <br />
              a){" "}
              <Latex>{`P(rechace \\space el \\space lote) = ?; \\space Si \\space P = 0.05)`}</Latex>
              <br />
              <Latex>{`P(x \\geq 10) \\newline P\\bigg(\\cfrac{x}{n}\\geq \\cfrac{10}{100}\\bigg) = P(\\widehat{p}\\geq 0.10)`}</Latex>
              <br />
              Utilizando la fórmula 2:
              <br />
              <Latex>{`P\\Bigg(\\cfrac{\\overline{P}-p}{\\sqrt{\\cfrac{p.q}{n}\\bigg(\\cfrac{N-n}{N-1}\\bigg)}} \\geq \\cfrac{0.10 - 0.05}{\\sqrt{\\cfrac{0.05 \\times 0.95}{100}\\times \\cfrac{9900}{9999}}}\\Bigg)`}</Latex>
              <br />
              <Latex>{`P(Z \\geq 2.31) \\newline 1-P(Z \\geq 2.31) \\newline 1-0.9896 \\newline 0.0104`}</Latex>
            </Text>
          </div>
        </Grid>
      </Wrapper>
    </main>
  );
}
