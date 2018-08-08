import request from "../../../utils/request";
export default {
  namespace: "rt",
  state: { vss: "asdasdasd" },

  subscriptions: {
    setup({ dispatch, history }) {}
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({
        type: "save",
        payload: {vss: (yield request("/api/users", {method: "POST"})).data.id}
      });
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
