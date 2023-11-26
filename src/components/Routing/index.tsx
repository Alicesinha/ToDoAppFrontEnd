import { Routes, Route } from "react-router-dom";
import { breadcrumbItems } from "./rotas";


function Routing() {
  return (
    <Routes>
      {
        breadcrumbItems.map((item) => (
          <Route
            key={item.url}
            path={item.url}
            element={item.element}
          />
        ))}
    </Routes>
  );
}

export default Routing;
