import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuBlogContainer } from './styles/sMenuBlog'

export default function MenuBlog() {
  return (
    <MenuBlogContainer>
      <ul>
        <li className='principalTitle'>
          <NavLink
            to="/contenido"
            className={({ isActive }) => isActive ? "menuActive": "" }
          >
            Distribuciones muestrales
          </NavLink>
        </li>
        <ul className='secondaryTitles'>
          <li>
            <NavLink
              to="/contenido/muestra-aleatoria"
              className={({ isActive }) => isActive ? "menuActive": "" }
            >
              Muestra aleatoria
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contenido/distribucion-muestral-media"
              className={({ isActive }) => isActive ? "menuActive": "" }
            >
              Distribuciones muestrales de la media
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contenido/distribucion-muestral-proporcion"
              className={({ isActive }) => isActive ? "menuActive": "" }
            >
              Distribuciones muestrales de la proporción
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contenido/distribucion-muestral-varianza"
              className={({ isActive }) => isActive ? "menuActive": "" }
            >
              Distribuciones muestral de la varianza
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contenido/distribucion-muestral-razon-varianzas"
              className={({ isActive }) => isActive ? "menuActive": "" }
            >
              Distribuciones muestral de la razon de las varianzas
            </NavLink>
          </li>
        </ul>
      </ul>
    </MenuBlogContainer>
  )
}
