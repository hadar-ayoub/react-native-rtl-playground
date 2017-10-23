const defaultState = {
    isRTL:false
};

export default function complaintReducer(state = defaultState, action) {
    switch (action.type) {
        case "CHANGE_TO_AR":
            return {
                ...state,             // keep the existing state,
                isRTL:true
            };
        case "CHANGE_TO_EN":
            return {
                ...state,             // keep the existing state,
                isRTL:false
            };
        default:
            return state;
    }
};
