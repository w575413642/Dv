import * as React from "react";
import { connect } from "dva";

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
   console.log(this)
    const { vs } = this.props.xxxx;
    const { dispatch } = this.props;
    const onIncrement = () => {
      console.log(dispatch)
      dispatch({ type: "xxxx/fetch", payload: 1111 });
    };
    return (
      <div className="first">
      <span onClick={onIncrement}>{vs}</span>
      </div>
    );
  }
}
export default connect(({ xxxx, loading }) => ({ xxxx, loading }))(
  HelloComponent
);
