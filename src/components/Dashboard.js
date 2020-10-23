import React from 'react';
import {observer} from "mobx-react-lite";
import {Col, Container, Row} from "react-bootstrap";
import Store from "../store";
import Appreciations from "./Appreciations";
import './Dashboard.scss';


const Dashboard = observer(() => {

    React.useEffect(() => {
        Store.Dashboard.loadAppreciations();
    }, []);

    return (
        <div className="dashboard">
            <Container>
                <Row>
                    <Col>
                        <div className="greeting">
                            Welcome!!
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="instruction">
                            Here are the appreciations our Grabbers has shared recently.
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Appreciations appreciations={Store.Dashboard.getAppreciations} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
});

export default Dashboard;
