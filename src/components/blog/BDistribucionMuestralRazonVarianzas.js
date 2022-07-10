import React from "react";
import { Wrapper } from "../../styles/generalStyles";
import { Grid } from "../../styles/boxesGeneral";
import MenuBlog from "./MenuBlog";
import {
  SecondaryTitle,
  Text,
  TertiaryTitle,
} from "../../styles/textGeneral";

import { Latex } from "../katex/Latex";

export default function BDistribucionMuestralRazonVarianzas() {
  return (
    <main>
      <Wrapper>
        <Grid>
          <MenuBlog />
          <div>
            <SecondaryTitle>Distribución muestral de la razón de las varianzas</SecondaryTitle>
            <Text>
            </Text>
          </div>
        </Grid>
      </Wrapper>
    </main>
  );
}
