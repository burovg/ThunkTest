import axios from 'axios';

export const FETCH_USERS = 'fetch_users';

export function fetchUsers(){
    const req = axios.get("http://jsonplaceholder.typicode.com/users");

    return (dispatch) => {
        req.then(({data}) => 
            {
                dispatch({type : FETCH_USERS,payload : data});
            }
        );
    };
}