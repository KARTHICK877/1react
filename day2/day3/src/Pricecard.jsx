import React from 'react'
import './Pricecard.css'
function pricecard() {
  return (
    React.createElement('div', {className: 'pricecard'},),
 
    React.createElement('div', {className: "fornt"},"Free",   React.createElement('h1',{className:"big-fornt"},"$0/month"),<hr/>,

    React.createElement('li',{className:"dark"}, "single"),
    React.createElement('li',{className:"dark"},"50GB Storage"),
    React.createElement('li',{className:"dark"},"unlimited Public Project"),
    React.createElement('li',{className:"dark"},"community"),
    React .createElement ('li',{className:"light"},"Unlimited Private Project"),
    React .createElement ('li',{className:"light"},"Dedicate phone project"),
    React .createElement ('li',{className:"light"},"Free Subdomain"),
    React .createElement ('li',{className:"light"},"mounthy Status Report"),
    
    
    React .createElement ('button',{className:"button"},"button"))
  )
}

export default pricecard