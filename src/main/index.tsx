import * as React from "react";
import { connect } from "dva";
import { Router, Route, Switch } from "dva/router";
import getRouterData from "../router.config";
import dynamic from "dva/dynamic";
import Menus from "../Layout";
import { Layout, Alert } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import NProgress from 'nprogress'
// interface IProps {
//   name: string;
//   enthusiasmLevel?: number;
//   onIncrement?: () => void;
//   onDecrement?: () => void;
// }
class Main extends React.Component {
  //   constructor(props: IProps) {
  //     super(props);
  //   }
  public render() {
    const { history, app, loading } = this.props;
    console.log(loading)
    NProgress.start()
      return (
        
      <Layout style={ {height: '100%'} }>
        <Sider>
        <img src="http://www.kingmon.cn/resources/desk/images/logo.png" style={{height:64}} alt=""/>
          <Menus />
        </Sider>
        <Layout>
          <Header>{`THIS IS HEADER`}</Header>
          <Content>
            <Router history={history}>
              <Switch>
                {getRouterData(app).map(rows => {
                  return (
                    <Route
                      key={rows.path}
                      exact
                      path={rows.path}
                      component={dynamic({ app, models:rows.models, component: rows.component })}
                    />
                  );
                })}
              </Switch>
            </Router>
          </Content>
          <Footer>test</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default connect(({ example, loading }) => ({ example, loading }))(Main);
