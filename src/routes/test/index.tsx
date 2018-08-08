import * as React from "react";
import { connect } from "dva";
import Menus from "../../Layout";
// interface IProps {
//   name: string;
//   enthusiasmLevel?: number;
//   onIncrement?: () => void;
//   onDecrement?: () => void;
// }

class HelloComponent extends React.Component {
  //   constructor(props: IProps) {
  //     super(props);
  //   }
  public render() {
    const { aaa } = this.props.example;
    const { dispatch } = this.props;
    console.log(this.props);
    const onIncrement = () => {
      dispatch({ type: "example/fetch", payload: "123" });
    };
    return (
      <div className="hello">
        <b onClick={onIncrement}>1111</b>
        <div className="greeting">{aaa}</div>
        {/* <div>
            <Button type="primary" onClick={onDecrement}>
              -
            </Button>
            <Button onClick={onIncrement}>+</Button>
          </div> */}
      </div>
    );
  }
}
export default connect(({ example, loading }) => ({ example, loading }))(
  HelloComponent
);
