import classes from "./MealItem.module.css";
import MealItmeForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  // 소수점 두 자리까지만 렌더링 하게하는 메서드

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItmeForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
