import { Fragment } from "react";
// 디스트럭처링으로 Fragment만 가져오면 React.Fragment대신 Fragment로 더 짧게 사용할 수 있다
import mealsImg from "../../assets/meals.jpg";
// 리액트에서 로컬 이미지를 추가하는 방법. 임포트 시킨 후 사용
import classes from "./Header.module.css";
// classes라는 이름으로 해당 파일을 불러옴. 객체처럼 .abcd로 파일 안에 있는 클래스에 접근할 수 있다.
import Button from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <Button />
      </header>
      <div className={classes["main-image"]}>
        {/* 클래스명에 -가 있으면 .표기법으로 접근 할 수 없기 때문에 이렇게 표기 */}
        <img src={mealsImg} alt="headerimg" />
      </div>
    </Fragment>
  );
};

export default Header;
