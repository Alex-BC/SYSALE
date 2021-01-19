import s from "./Section.module.css";
import Counter from '../Counter/Counter';

function Section() {

  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.section}>

          <div className={s.title}>
            <p>NEW</p>
            <img alt="" src=""></img>
            <img alt="" src=""></img>
          </div>

          <div className={s.title}>
            <h2 className={s.heading}>Шампунь</h2>
            <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>

          <Counter />
         
        </div>
        <div className={s.section}></div>
        <div className={s.section}></div>
      </div>
    </div>
  );
}

export default Section;
