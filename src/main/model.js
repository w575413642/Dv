export default {
    namespace: "first",
    state: {test:213123},
  
    subscriptions: {
      setup({ dispatch, history }) {
      }
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {
        // eslint-disable-line
        yield put({ type: "save", payload: { aaa: payload } });
      }
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      }
    }
  };
  