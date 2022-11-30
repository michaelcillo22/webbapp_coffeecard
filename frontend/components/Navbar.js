import React, { useContext } from 'react'
import { useState } from 'react'
import navStyle from '../styles/Navibar.module.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import AppContext from './context'
import newLogo from '../public/Logo2.png'
import Image from 'next/image'

const Navibar = () => {
  // const { user } = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const user = true

  switch (user) {
    case true:
      return (
        <Navbar expand='sm' light className={navStyle.zindex}>
          <style jsx>
            {`
              .navbar {
                justify-content: space-around;
              }
            `}
          </style>
          <NavbarBrand href='/'>
            <Image src={newLogo} style={{ width: '25px', height: '30px' }} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className={navStyle.border} />
          <Collapse isOpen={isOpen} navbar fixed>
            <Nav className='container-fluid justify-content-end' navbar>
              <NavItem>
                <NavLink href='/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/profile'>Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/shops'>Shops</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/contactus'>Contact</NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href='/'
                  onClick={() => {
                    logout()
                    setUser(null)
                  }}
                >
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      )

    default:
      return (
        <Navbar expand='sm' light className={navStyle.zindex}>
          <NavbarBrand href='/'>
            {' '}
            <Image src={newLogo} style={{ width: '25px', height: '30px' }} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar fixed>
            <Nav className='container-fluid justify-content-end' navbar>
              <NavItem>
                <NavLink href='/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/register' className='inactive'>
                  Sign up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/login'>Sign In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      )
  }
}

export default Navibar
