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
								style={isActive => ({
									color: isActive ? "menuActive" : ""
								})}
							>
								Inicio
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/alumnos"
								style={isActive => ({
									color: isActive ? "menuActive" : ""
								})}
							>
								Alumnos
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contenido"
								style={isActive => ({
									color: isActive ? "menuActive" : ""
								})}
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
