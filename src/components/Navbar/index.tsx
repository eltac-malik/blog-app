import style from "./Navbar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { setViewWizard } from "redux/wizardSlice";

function Navbar() {
  const dispatch = useDispatch();
  const viewWizard = useSelector((state: any) => state.wizard.viewWizard);
  return (
    <div className={style.navbar}>
      <p onClick={() => dispatch(setViewWizard(!viewWizard))}>
        <MenuIcon sx={{ fontSize: 35 }} />
      </p>
      <p>navbar</p>
    </div>
  );
}

export default Navbar;
