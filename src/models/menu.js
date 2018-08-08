import {
  routerRedux
} from 'dva/router';
export default {

  namespace: 'menu',

  state: {
    current: 'mail'
  },

  subscriptions: {
    setup({
      dispatch,
      history
    }) { // eslint-disable-line
    },
  },

  effects: {
    * fetch({
      payload
    }, {
      call,
      put
    }) { // eslint-disable-line
      yield put({
        type: 'save',
        payload: {
          current: payload
        }
      });
      yield put(routerRedux.push('/' + payload));
    },
  },

  reducers: {
    save(state, action) {
      return { ...state,
        ...action.payload
      };
    },
  },

};
