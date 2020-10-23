import axios from "axios";

const HOST = "http://34.71.13.199:8080";

const getAppreciations = (fromUserId, toUserId, callback) => {
    axios.post(`${HOST}/grapreciate/posts`, {
        fromUserUUID: fromUserId ? `${fromUserId}` : null,
        toUserUUID: toUserId ? `${toUserId}` : null,
    }).then(function (response) {
        callback(response.data.posts);
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
};

const getUser = (userId, callback) => {
    axios.post(`${HOST}/grapreciate/user`, {
        userUUID: `${userId}`,
    }).then(function (response) {
        callback(response.data);
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
};

const addAppreciation = (fromUserUUID, toUserUUID, message, callback) => {
    axios.post(`${HOST}/grapreciate/posts/add`, {
        fromUserUUID,
        toUserUUID,
        message,
        type: "Kudos",
    }).then(function (response) {
        callback();
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
};

export default {
    getAppreciations,
    getUser,
    addAppreciation,
};