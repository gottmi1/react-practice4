import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* input의 모든 키 값 쌍을 props.input에서 받아서 input에 props로 추가할 수가 있다  */}
    </div>
  );
};

export default Input;
