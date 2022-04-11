import React, {useState, useEffect} from 'react'
import {Link, withPrefix} from 'gatsby'
import {Menu, Container, Icon} from 'semantic-ui-react'
import ShoppingCartIcon from './ShoppingCartIcon'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import logo from '../../images/logo.png'
import './Header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import useStore from '../../context/StoreContext'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    
    backgroundColor:"#000000"
    
  },
}));

const DesktopMenu = ({location: {pathname}, token, cartCount, signout}) => {

  const { cart } = useStore()
  const [activeItem, setActiveItem] = useState(pathname)

  useEffect(() => {
    setActiveItem(pathname)
  }, [pathname])

  return (
    <div className = 'desktop-menu'>
      <div className = 'desktop-menu-tr'>
        <Link to = '/' className = 'logo-link'>
          <img className = 'desktop-menu-logo' src = {logo} />
        </Link>
      </div>

      <div className= 'desktop-menu-br' >
        <div className = 'desktop-menu-link'>
          <Link to = '/' style = {{textDecoration:'none', color:'#808080'}} id = {activeItem === withPrefix('xs')? '#selected': ''}>
            Home
          </Link>
        </div>
        <div className = 'desktop-menu-link'>

          <Link to = '/products' style = {{textDecoration:'none', color:'#808080'}} id = {activeItem === withPrefix('/products')? 'selected': ''}>
            Shop
          </Link>
        </div>
        <div className = 'desktop-menu-link'>
         
            <Link to = '/cart' style = {{textDecoration:'none', color:'#808080', display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}} id = {activeItem === withPrefix('/cart')? 'selected': ''} >
              <div style = {{marginRight:'2px'}}>Cart</div>
              <StyledBadge badgeContent={cart?.length} color="primary">
                <ShoppingCartOutlinedIcon fontSize = "small"/>
              </StyledBadge>
            </Link>
          
        </div>
      </div>
    
    </div>
  )
}

export default DesktopMenu
