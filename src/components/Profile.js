import React from 'react';
import Store from "../store";
import {Button, Form, FormControl, Tab, Tabs} from "react-bootstrap";
import './Profile.scss';
import Appreciations from "./Appreciations";
import {observer} from "mobx-react-lite";
import {set} from "mobx";

const Profile = observer((props) => {
    const [appreciation, setAppreciation] = React.useState("");
    const userId = props.match.params.userId || Store.User.currentUserId;

    React.useEffect(() => {
        Store.Profile.loadProfile(userId);
    }, [userId]);

    if (Store.Profile.getAppreciationsGiven.length == 0 && Store.Profile.getAppreciationsReceived.length == 0) {
        return null;
    }

    const awardsJSX = Store.Profile.getAwards.map((award, i) => (
        <div key={i} className="award">
            <img className="award-icon" src={award.iconUrl}/>
            <div className="award-name">{award.awardName}</div>
        </div>
    ));

    const onAppreciate = () => {
        Store.Profile.appreciate(Store.User.currentUserId, props.match.params.userId, appreciation);
        setAppreciation("");
    };

    let appreciateJSX = null;

    if ((props.match.params.userId !== undefined) && (props.match.params.userId !== Store.User.currentUserId)) {
        appreciateJSX = (
            <div className="margin appreciate">
                <Form>
                    <FormControl type="text" placeholder="Enter your appreciation here..." value={appreciation} onChange={(e) => {setAppreciation(e.target.value)}}/>
                </Form>
                <Button className="margin grabpreciate-btn" variant="success" onClick={onAppreciate}>GrabPreciate</Button>
            </div>
        );
    }

    return (
        <div className="profile">
            <div className="profile-header">
                <div className="user-info">
                    <div className="user-name">{Store.Profile.getUserName()}</div>
                </div>
                <div className="awards">
                    {awardsJSX}
                </div>
                {appreciateJSX}
            </div>
            <div className="margin">
                <Tabs defaultActiveKey="given">
                    <Tab eventKey="given" title="Appreciations Given">
                        <div className="margin"></div>
                        <Appreciations appreciations={Store.Profile.getAppreciationsGiven}/>
                    </Tab>
                    <Tab eventKey="received" title="Appreciations Received">
                        <div className="margin"></div>
                        <Appreciations appreciations={Store.Profile.getAppreciationsReceived}/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
});

export default Profile;
