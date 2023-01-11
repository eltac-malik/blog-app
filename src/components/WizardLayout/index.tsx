import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Close } from "@mui/icons-material";
import cn from "classnames";

import { routes } from "routes/route";
import { CustomRoute } from "types";
import { setViewWizard } from "redux/wizardSlice";

import style from "./WizardLayout.module.scss";

function Index() {
  const location = useLocation();
  let activeLocation: string = location.pathname.substring(1);
  const dispatch = useDispatch();
  const viewWizard = useSelector((state: any) => state.wizard.viewWizard);

  const handleClose = () => dispatch(setViewWizard(!viewWizard));

  return (
    <div
      className={`${style.wizard} ${cn({
        [style.wizard_active_side]: viewWizard
      })}`}
    >
      <div className={style.wizard_side_close_section}>
        <p></p>
        <p onClick={handleClose} className={style.wizard_close_icon}>
          <Close sx={{ fontSize: 30 }} />
        </p>
      </div>
      <ul className={style.wizard_list}>
        {routes
          .filter((item: CustomRoute) => Boolean(item.isSeenable))
          .map((e: any) => {
            return (
              <Link
                to={e.path}
                className={`${style.wizard_list_element} ${cn({
                  [style.wizard_active_item]: e.name.toLowerCase() === activeLocation
                })} `}
              >
                <p className={style.wizard_list_icon}>{e.icon}</p>
                <p>{e.name}</p>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}

export default Index;
