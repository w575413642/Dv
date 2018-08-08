import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';
// import createHistory from 'history/createBrowserHistory';
import createHistory from 'history/createHashHistory';
import example from './models/example'
import menu from './models/menu'
require('../mock/mock')
const models = [example, menu];
// 1. Initialize
const app = dva({
  history: createHistory(),
});
// 2. Plugins
// app.use({});
app.use(createLoading());
// 3. Model
models.forEach(m => app.model(m))

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
