import * as React from "react";
import { connect } from "dva";
import Menus from "../../Layout";
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
  QueueAnim
} from "antd";
import numeral from "numeral";
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart
} from "../../components/Charts";
import Trend from "../../components/Trend";
import NumberInfo from "../../components/NumberInfo";
import styles from "./first.less";
// interface IProps {
//   name: string;
//   enthusiasmLevel?: number;
//   onIncrement?: () => void;
//   onDecrement?: () => void;
// }
const { Meta } = Card;
class HelloComponent extends React.Component {
  //   constructor(props: IProps) {
  //     super(props);
  //   }
  public render() {
    const topColResponsiveProps = {
      lg: 12,
      md: 12,
      xl: 6,
      sm: 12,
      xs: 24,
      style: { boxShadow: "1px 1px 1px 1px #dcdcdc" }
    };
    function identity<T>(arg: T): T {
      return arg;
  }
  let myIdentity: <U>(arg: U) => U = identity;
    let a = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]
    return (
      <div className="first">
        <Row>
         {a.map(rows => {
            return <Col {...topColResponsiveProps}>
            <ChartCard
              title={rows}
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={126560}
              footer={
                <Field
                  label="日均销售额"
                  value={`￥${numeral(12423).format("0,0")}`}
                />
              }
              contentHeight={46}
            >
              <Trend flag="up" style={{ marginRight: 16 }}>
                周同比<span className={styles.trendText}>12%</span>
              </Trend>
              <Trend flag="down">
                日环比<span className={styles.trendText}>11%</span>
              </Trend>
            </ChartCard>
          </Col>
         })}
        </Row>
        {/* <Bar height={295} title="销售额趋势" data={salesData} /> */}
      </div>
    );
  }
}
export default connect(({ example, loading }) => ({ example, loading }))(
  HelloComponent
);
