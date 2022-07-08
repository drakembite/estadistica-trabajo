import React from 'react'
import { Wrapper } from '../../styles/generalStyles'
import { Grid } from './../../styles/boxesGeneral'
import MenuBlog from './MenuBlog'

export default function MainBlog() {
  return (
    <main>
      <Wrapper>
        <Grid>
          <MenuBlog />
          Blog
        </Grid>
      </Wrapper>
    </main>
  )
}
