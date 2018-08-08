import * as React from "react";
import { connect } from "dva";
import { Menu, Icon, Avatar, Badge } from "antd";
import router from '../.rs.js'
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Layout extends React.Component {
  // constructor(props: Menu) {
  //   super(props);
  // }
  public render() {
    const { current } = this.props.menu;
    const { dispatch } = this.props;
    const handleClick = e => {
      dispatch({ type: "menu/fetch", payload: e.key });
    };
    return (
      <div>
        <Menu
        onClick={handleClick}
        style={{ width: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
      {router.menus.map(row => {
        return  <SubMenu key={row} title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
        <Menu.Item key={row}>{row}</Menu.Item>
      </SubMenu>
      })}
       
      </Menu>
      </div>
    );
  }
}
{/* <SubMenu key="row" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          </SubMenu>
        </SubMenu> */}
export default connect(({ menu, loading }) => ({ menu, loading }))(Layout);
