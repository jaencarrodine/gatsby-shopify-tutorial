import React from 'react'

//hooks
import {useState, useEffect} from 'react'
import useDrag from "./useDrag";

//components
import {Card, Image, Container} from 'semantic-ui-react'
import {Link} from 'gatsby'
import GetImage from '../GetImage'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import AddToCart from '../AddToCart';

//data
import {productList} from '../../../lib/products'



//css
import './ProductCardRow.css'

export default function({price}) {
    const [cardGroup, setCardGroup] = useState([])

    useEffect(() => {
        mapProductsToItems(productList, price)
    }, [])

    useEffect(() => {
        mapProductsToItems(productList, price)
    }, [price])

    const { dragStart, dragStop, dragMove, dragging } = useDrag();
    const handleDrag = ({ scrollContainer }) => (ev) => dragMove(ev, (posDiff) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += posDiff;
      }
    });

    async function mapProductsToItems(products, price) {
        if(price === null){
            price = await localStorage.getItem('price')
        }
        
        const soldOut = (await JSON.parse(localStorage.getItem('soldOutMode'))) ? 'Sold Out' : ''
        //console.log(price)
        let items = products.map(product => {
        return (
            
            <Card childKey = {product.id}>
                <Link to={`/product/${product.id}/`} >
                  <GetImage id = {product.id} size = 'large' />
                </Link>
                <Card.Content>
                    
                    <Card.Header>{product.name}</Card.Header>

                    <Card.Description>
                        <div className="PCR-card-br">
                            <Card.Meta style={{color: 'dimgray'}}>${price}</Card.Meta>
                            <div style = {{marginLeft: 'auto'}} > <AddToCart productId={product.id} buttonOnly = {true} /></div>
                            
                        </div>
                        <Card.Meta style={{color: 'red', marginLeft: 'auto'}}>
                            {soldOut}
                        </Card.Meta>
                    </Card.Description>

                </Card.Content>
                
            </Card>
           
        )
        })
        
        setCardGroup(items)
  }


  return (
    <div className = 'scroll-container' onMouseLeave={dragStop}>
          <ScrollMenu
            
            onWheel={onWheel}
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {cardGroup.map((card, id) => (
                
                <div 
                    className = "PCR-card-container"
                    title={id}
                    itemId={id} // NOTE: itemId is required for track items
                    key={id}
                >
                    {card}
                </div>
           
            ))}
            {/*<Container text>{cardGroup}</Container>*/}
          </ScrollMenu>
        </div>
  
    )
}


function onWheel(apiObj, ev){
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

