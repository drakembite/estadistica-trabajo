import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './theme/globalStyles'
import theme from './theme/theme'
import LandingPage from './pages/LandingPage'
import Blog from './pages/Blog'
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
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
