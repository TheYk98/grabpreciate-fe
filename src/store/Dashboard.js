import {action, computed, observable, set} from "mobx";
import api from "../api";

const _storage = observable({
    appreciations: [],
});

const loadAppreciations = action(() => {
    api.getAppreciations(null, null, setAppreciations);
});

const setAppreciations = action((appreciations) => {
    _storage.appreciations.replace(appreciations);
});

const getAppreciations = _storage.appreciations;
const updateCongrats = action((id) => {
    const filteredApprications = _storage.appreciations.filter((appreciation)=>appreciation.id === id);
    if (filteredApprications.length > 0) {
        filteredApprications[0].congratulated = true;
    }
});

export const Dashboard = {
    loadAppreciations,
    getAppreciations,
    updateCongrats
};


