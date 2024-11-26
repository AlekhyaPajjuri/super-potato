export type AuthState = {

isAuthenticated: boolean;
userName: string;
accessToken: string;
refreshToken: string;

};

const initialState: AuthState = {

    isAuthenticated: false,
    userName: "",
    accessToken: "",
    refreshToken: ""
}

export type AuthAction = {
    type: string;
    payload: any;
};

export const authReducer = (currentState = initialState, action: AuthAction) => {
    console.log("authReducer", currentState, action);
    return currentState;
};
