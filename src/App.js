import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './theme/globalStyles'
import theme from './theme/theme'
import LandingPage from './pages/LandingPage'
import Blog from './pages/Blog'
import BMuestraAleatoria from './components/blog/BMuestraAleatoria'
import BDistribucionMuestralMedia from './components/blog/BDistribucionMuestralMedia'
import BDistribucionMuestralProporcion from './components/blog/BDistribucionMuestralProporcion'
import BDistribucionMuestralVarianza from './components/blog/BDistribucionMuestralVarianza'
import BDistribucionMuestralRazonVarianzas from './components/blog/BDistribucionMuestralRazonVarianzas'
import LandingLayout from './components/layout/LandingLayout'
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={<LandingLayout children={<LandingPage />} />}
        />
        <Route
          path="/contenido"
          element={<LandingLayout type="content" children={<Blog />} />}
        />
        <Route
          path="/contenido/muestra-aleatoria"
          element={<LandingLayout type="content" children={<BMuestraAleatoria />} />}
        />
        <Route
          path="/contenido/distribucion-muestral-media"
          element={<LandingLayout type="content" children={<BDistribucionMuestralMedia />} />}
        />
        <Route
          path="/contenido/distribucion-muestral-proporcion"
          element={<LandingLayout type="content" children={<BDistribucionMuestralProporcion/>} />}
        />
        <Route
          path="/contenido/distribucion-muestral-varianza"
          element={<LandingLayout type="content" children={<BDistribucionMuestralVarianza/>} />}
        />
        <Route
          path="/contenido/distribucion-muestral-razon-varianzas"
          element={<LandingLayout type="content" children={<BDistribucionMuestralRazonVarianzas/>} />}
        />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
