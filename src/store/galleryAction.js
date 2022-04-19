import axios from 'axios'
// import { setLoaderAction } from "./setLoader"

export const getPhotosAction = () => (dispatch) => {

    return axios.get('https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy')
    .then((res) => 
    {
        dispatch({
            type: "LIST_PHOTOS",
            payload: res.data,

        })
        // dispatch(setLoaderAction(false))
        
    }        
    )
    .catch((err) => console.log(err));
}