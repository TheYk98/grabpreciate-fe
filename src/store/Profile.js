import {action, computed, observable, set} from "mobx";
import api from "../api";

let userName = "";

const _storage = observable({
    userName: "",
    awards: [],
    appreciationsGiven: [],
    appreciationsReceived: [],
    isLoading: true,
});

const loadProfile = action((userId) => {
    action(() => {
        _storage.isLoading = true;
        userName = "";
        _storage.awards.replace([]);
        _storage.appreciationsGiven.replace([]);
        _storage.appreciationsReceived.replace([]);
    })();
    api.getUser(userId, action((user) => {
        userName = user.user.name;
        _storage.awards.replace(user.awards);
        _storage.isLoading = false;
    }))
    api.getAppreciations(userId, null, action((appreciations) => {
        _storage.appreciationsGiven.replace(appreciations)
    }));
    api.getAppreciations(null, userId, action((appreciations) => {
        _storage.appreciationsReceived.replace(appreciations)
    }));
});

const appreciate = action((fromUserUUID, toUserUUID, message) => {
    api.addAppreciation(fromUserUUID, toUserUUID, message, action(() => {
        api.getAppreciations(null, toUserUUID, action((appreciations) => {
            _storage.appreciationsReceived.replace(appreciations);
        }));
    }));
});

const getUserName = () => userName;
const getAwards = _storage.awards;
const getAppreciationsGiven = _storage.appreciationsGiven;
const getAppreciationsReceived = _storage.appreciationsReceived;
const isLoading = _storage.isLoading;

export const Profile = {
    loadProfile,
    getUserName,
    getAwards,
    getAppreciationsGiven,
    getAppreciationsReceived,
    isLoading,
    appreciate,
};
