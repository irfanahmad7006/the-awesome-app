
export type AuthState = {
    isAuthenticated: boolean;
    userName: string;
    accessToken: string;
    refreshToken: string;
}

const initialState: AuthState = {
    isAuthenticated: false,
    userName: "",
    accessToken: "",
    refreshToken: ""

}

export type AuthAction = {
    type:"auth_login" | "auth_logout";
    payload?: AuthState
}

//action invoke on login 



//action invoke on logout

export const authReducer = (currentState=initialState, action:AuthAction)=>{
    if(action.type === "auth_login" && action.payload){

        return action.payload;
    }

    if(action.type === "auth_logout"){
        return initialState;

    }

    return currentState;

}