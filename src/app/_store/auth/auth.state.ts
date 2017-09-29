//
// export interface AuthState {
//   currentUser: any;
// }
//
// export const INITIAL_AUTH_STATE: AuthState = {
//   currentUser: undefined
// };


export interface AuthState {
  uid: string;
  displayName: string;
  loading?: boolean;
  error?: string;
}

export const INITIAL_AUTH_STATE: AuthState = {
  uid: '',
  displayName: '',
  loading: false,
  error: ''
};

export class User implements AuthState {
  constructor(public uid: string, public displayName: string) {}
}
