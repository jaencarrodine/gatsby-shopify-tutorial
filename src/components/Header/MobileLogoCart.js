import React from 'react'

import logo from '../../images/logo.png'
import {Link} from 'gatsby'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './styles.css'
import useStore from '../../context/StoreContext'

export default function MobileLogoCart() {

    const { cart } = useStore()

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            
            backgroundColor:"#000000"
            
        },
    }));

        
    return (
        <div className = 'mobile-logo-cart' >
            <img src = {logo} style = {{width:'55%', height: 'auto', marginLeft:'22.5%'}} />
            <div className = 'mlc-cart' style = {{width:'22.5%'}}>
                <Link to = '/cart' style = {{textDecoration:'none', color:'black', display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}}  >
                <StyledBadge badgeContent={cart?.length} color="primary">
                    <ShoppingCartOutlinedIcon/>
                </StyledBadge>
                </Link>
            </div>
            
        </div>
    )

}