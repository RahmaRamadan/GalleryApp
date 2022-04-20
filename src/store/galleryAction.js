import axios from 'axios'

// action to fetch data from api request with axios 
export const getPhotosAction = () => (dispatch) => {

    return axios.get('https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy')
    // if succeed then dispatach with type and payload
    // dispatch -> event handler
    .then((res) => 
    {
        dispatch({
            type: "LIST_PHOTOS",
            payload: res.data,

        })
        
    }        
    )
    // if faild then show error message on the console
    .catch((err) => console.log(err));
}