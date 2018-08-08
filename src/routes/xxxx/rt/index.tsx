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
    const { vss } = this.props.rt;
    const { dispatch } = this.props;
    const onIncrement = () => {
      dispatch({ type: "rt/fetch" });
    };
    return (
      <div className="first">
        {vss}
        <span onClick={onIncrement}>{vss}</span>
      </div>
    );
  }
}
export default connect(({ rt, loading }) => ({ rt, loading }))(HelloComponent);
