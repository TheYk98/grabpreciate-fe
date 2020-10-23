import Appreciation from "./Appreciation";
import React from "react";
import {observer} from "mobx-react-lite";

const Appreciations = observer(({appreciations}) => (appreciations.map((app) =>
    <Appreciation
    key={app.id}
    id={app.id}
    fromUserId={app.fromUser.userUUID}
    fromUserName={app.fromUser.name}
    toUserId={app.toUser.userUUID}
    toUserName={app.toUser.name}
    type={app.type}
    message={app.message}
    congratulated={app.congratulated}
    />
)));

export default Appreciations;