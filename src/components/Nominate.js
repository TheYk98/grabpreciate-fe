
import React from 'react';
import {observer} from "mobx-react-lite";
import {Col, Container, Row} from "react-bootstrap";
import Store from "../store";

import './Nominate.scss';
import heart from './HEART-WhiteBG.png'
import honour from './HONOUR-WhiteBG.png'
import humility from './HUMILITY-WhiteBG.png'
import hunger from './HUNGER-WhiteBG.png'
const Nominate = () => {

    return (
        <div class="container">  
  <form id="contact" action="" method="post">
    <h3>Grabber Spot Award Nomination</h3>
    <h4>Nominate a deserving Grabber</h4>
    <fieldset>
      <input placeholder="Nominee" type="text" tabindex="1" required autofocus/>
    </fieldset>
    
    <input type="radio" id="male" name="gender" value="male"/>
    <img className="4h"   style={{width:'100px',height:'100px'}} src={humility}/>
    <br/>
    <input type="radio" id="male" name="gender" value="male"/>
    <img className="4h" style={{width:'100px',height:'100px'}} src={honour}/>
    <br/>
    <input type="radio" id="male" name="gender" value="male"/>
      <img className="4h" style={{width:'100px',height:'100px'}} src={heart}/>
    <br/>
    <input type="radio" id="male" name="gender" value="male"/>
    <img className="4h" style={{width:'100px',height:'100px'}}  src={hunger}/>
    <br/>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" optional></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>

    );}


export default Nominate;

