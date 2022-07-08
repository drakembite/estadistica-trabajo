import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Wrapper } from '../../styles/generalStyles'
import { HeaderContent, HeaderContainer } from './styles/sHeader'

export default function Header({ type }) {
  return (
    <HeaderContainer type={type}>
			<Wrapper>
				<HeaderContent type={type}>
					<Link to="/">UNSCH</Link>
					<ul>
						<li>
							<NavLink
								to="/"
								className={({ isActive }) => isActive ? "menuActive": "" }
							>
								Inicio
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/alumnos"
								className={({ isActive }) => isActive ? "menuActive": "" }
							>
								Alumnos
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contenido"
								className={({ isActive }) => isActive ? "menuActive": "" }
							>
								Contenido
							</NavLink>
						</li>
					</ul>
				</HeaderContent>
			</Wrapper>
    </HeaderContainer>
  )
}
