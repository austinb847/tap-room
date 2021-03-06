import React from 'react'
import PropTypes from 'prop-types'

function Keg(props) {
  return (
    <React.Fragment>
      <div>
        <h3 onClick = {() => props.whenKegClicked(props.id)} className='keg'>{props.name} - {props.brand}</h3>
        <p>Total Pints: {props.pints}</p>
        <button onClick= {() => props.whenKegSold({name: props.name, brand: props.brand, price: props.price, alcoholContent: props.alcoholContent, 
                                                    id: props.id, pints: props.pints})}>Sell Pint</button>
        <br/>
        <button onClick={() => props.whenKegDeleted(props.id)}>Delete Keg</button>
        <hr/>
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenKegSold: PropTypes.func,
  whenKegDeleted: PropTypes.func,
  pints: PropTypes.number
}

export default Keg

