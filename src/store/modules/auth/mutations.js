export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didLogout=true;
  },

  didLogout(state){
    state.didLogout=true
  }
};