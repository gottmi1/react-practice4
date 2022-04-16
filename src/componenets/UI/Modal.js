import { Fragment } from "react/cjs/react.production.min";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModlaOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
// public의 index.html에 쓴 overlays

const Modal = (props) => {
  return (
    <Fragment>
      {/* <Backdrop />
      <ModlaOverlay>{props.children}</ModlaOverlay> */
      /*  portal을 사용하지 않으려면 이렇게 쓰면 됨 */}
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModlaOverlay>{props.children}</ModlaOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
