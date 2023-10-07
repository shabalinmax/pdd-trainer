import {User} from "@firebase/auth";
export enum ViewAuthMode {
    Login = 'login',
    Register = 'register',
}
export interface ViewerState {
    viewer: null | User;
    viewMode: null | ViewAuthMode
}