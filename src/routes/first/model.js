import request from '../../utils/request'
export default {
    namespace: "first",
    state: {aaa:123},
  
    subscriptions: {
      setup({ dispatch, history }) {
      }
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {
        // eslint-disable-line
        yield put({ type: "save", payload: { aaa: 456 } });
      }
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      }
    }
  };
  