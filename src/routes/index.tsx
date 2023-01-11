import { Route, Routes } from "react-router-dom";

import Wizard from "components/WizardLayout";
import Navbar from "components/Navbar";
import { DynamicContent } from "components/DynamicContent";

import { routes } from "./route";

export default function BaseRoute() {
  return (
    <div className="all-container">
      <Wizard />
      <Navbar />
      <Routes>
        {routes.map(e => (
          <Route path={e.path} element={e.element} />
        ))}
      </Routes>
      <DynamicContent/>
    </div>
  );
}
