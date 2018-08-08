import React from "react";
import Main from'./main'
function RouterConfig({ history, app }) {
  return (
    <Main history={history} app={app}/>
  );
}

export default RouterConfig;
