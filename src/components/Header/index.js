import React, {useContext} from 'react'
import {Responsive} from 'semantic-ui-react'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import AuthContext from '../Context/AuthContext'
import CartContext from '../Context/CartContext'
import MediaQuery from 'react-responsive'
import MobileLogoCart from './MobileLogoCart'
import "./styles.css";
const Header = ({location}) => {
  const {cartCount} = useContext(CartContext)
  const {token, signOut} = useContext(AuthContext)

  return (
    <>
      
      <MediaQuery maxWidth= {600}>
        <MobileMenu
          location={location}
          token={token}
          cartCount={cartCount}
          signout={signOut}
        />
        <MobileLogoCart />
      </MediaQuery>
      <MediaQuery minWidth= {601}>

        <DesktopMenu
          location={location}
          token={token}
          cartCount={cartCount}
          signout={signOut}
        />

      </MediaQuery>
  
    </>
  )
}

export default Header
