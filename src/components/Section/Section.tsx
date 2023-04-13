import style from "./Section.module.css";
interface ISectionProp {
  children: JSX.Element[];
}
function Section({ children }: ISectionProp): JSX.Element {
  return <div className={style.container}>{children}</div>;
}

export default Section;
