
import { Vacancy } from "./components/Vacancy";

import style from "./Announce.module.scss";

export const Announce = () => {
  return <div className={style.announce}>
    <Vacancy/>
    <Vacancy/>
  </div>;
};
