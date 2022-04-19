const intial_value = {
    photosList: [],
}

// reducer check type of action and compare values 
export default function getPhotosReducer (state = intial_value, action){
    switch (action.type) {
        case 'LIST_PHOTOS':
            return {
                ...state,
                photosList: action.payload,
            }
        default:
            return state
    }
}
