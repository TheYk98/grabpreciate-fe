import React from 'react';
import {observer} from "mobx-react-lite";
import Store from "../store";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Appreciation.scss';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Appreciation = observer(({id, fromUserId, fromUserName, toUserId, toUserName, type, message, congratulated}) => {
    let congratulationJSX = null;
    let likes = Math.max(1,Math.floor(Math.random() * 20));    
    console.log(congratulated);
    if(congratulated) {
        congratulationJSX = <div><FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} /> &nbsp; {likes}</div>
    } else { 
        congratulationJSX = (<div class="likes" onClick={() => Store.Dashboard.updateCongrats(id)} >
        
        <button type="button" class="btn btn-outline-success congrats-btn">Say Congrats!</button>
      </div>);
    }

    return (
        <div className="appreciation">
            <Card className="cardlayout">
                <Card.Body>
                    <div className="header">
                        <Link to={`/profile/${fromUserId}`}>{fromUserName}</Link>
                        {` Grabpreciated `}
                        <Link to={`/profile/${toUserId}`}>{toUserName} </Link>
                        {`🎉`}
                    </div>
                    <div className="message-tag"> Message:</div>
                    <div className="message-Box">
                        
                    <div className="message">
                        {message}
                    </div>

                    </div>
                </Card.Body>
                <footer>
                    {congratulationJSX}
                </footer>
            </Card>
        </div>
    );
});

export default Appreciation;
