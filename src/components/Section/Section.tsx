import style from "./Section.module.css";

function Section({ children }) {
  return <div className={style.container}>{children}</div>;
}

export default Section;
