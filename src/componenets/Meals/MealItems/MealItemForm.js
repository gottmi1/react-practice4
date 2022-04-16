import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItmeForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          // 이런 값들은 모든 input 요소에 기본으로 추가 가능함 중요한 건 input에 분배된 props들이다
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItmeForm;
