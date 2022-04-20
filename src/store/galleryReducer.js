// declare initial value object
const intial_value = {
    photosList: [],
}

// reducer check type of action and compare values 
export default function getPhotosReducer (state = intial_value, action){
    // first, check action type
    switch (action.type) {
        // if likr type "LIST_PHOTOS" then store data instead of initial state
        case 'LIST_PHOTOS':
            return {
                ...state,
                photosList: action.payload,
            }
        // else keep the data of the initial state
        default:
            return state
    }
}
