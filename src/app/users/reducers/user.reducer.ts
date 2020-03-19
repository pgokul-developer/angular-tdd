import { createReducer, on, createSelector } from '@ngrx/store';
import { loginSuccess } from '../actions/user.actions';

export const userFeatureKey = 'user';


export interface State {
    loggedIn: boolean;
    userName: string;
}

export const initialState: State = {
    loggedIn: false,
    userName: '',
};

const _userReducer = createReducer(initialState,
    on(loginSuccess, state => ({
        ...state,
        loggedIn: true
    }))
);

export function userReducer(state, action) {
    return _userReducer(state, action);
}

export const getLoggedIn = (state: State) => state.loggedIn;

export const selectLoggedIn = createSelector((state: State) => state.loggedIn, loggedIn => true );
