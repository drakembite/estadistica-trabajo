import React from 'react'
import { Button } from './../../styles/buttonGeneral'
import { CoverPageContainer, LandingPageContainer } from './styles/sMainLandingPage'
import { Wrapper } from './../../styles/generalStyles'
import { PrincipalTitle, Text } from './../../styles/textGeneral'
import { Link } from 'react-router-dom'

export default function MainLandingPage() {
  return (
    <main>
      <LandingPageContainer>
        <CoverPageContainer>
          <h1>Estadística Inferencial</h1>
          <h2>ES - 244</h2>
          <Link to="/contenido">
            <Button primary>Ver contenido</Button>
          </Link>
        </CoverPageContainer>
        <Wrapper>
          <div>
            <PrincipalTitle top>Presentación</PrincipalTitle>
            <Text centerReducer>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames risus, convallis blandit integer congue aliquam ipsum cras. Porta sodales mi enim facilisis velit sit. Suspendisse quisque id faucibus gravida. Est interdum elit auctor pulvinar urna. Orci urna non quisque sit nisi, cras viverra eget. Tincidunt at urna, a quam libero urna proin. Ullamcorper laoreet metus egestas tellus nunc pellentesque penatibus. Urna interdum feugiat sed ornare facilisi elit quam.</Text>
          </div>
          <div>
            <PrincipalTitle top>Objetivos</PrincipalTitle>
            <Text centerReducer>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames risus, convallis blandit integer congue aliquam ipsum cras. Porta sodales mi enim facilisis velit sit. Suspendisse quisque id faucibus gravida. Est interdum elit auctor pulvinar urna.</Text>
          </div>
          <div className="buttonFinal">
            <Link to="/contenido">
              <Button secondary>Ingresar</Button>
            </Link>
          </div>
        </Wrapper>
      </LandingPageContainer>
    </main>
  )
}
