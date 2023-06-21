import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages'/home";
import DynamicRoutes from "../pages'/dynamicRoutes";
import Product from "../components/product";
import { folderList } from "../components/fileExplorer";
import { createDynamicRoute } from "./dynamicRouteGenerator";
import AdvancedDynamicRoutes from "../pages'/AdvancedDynamicRoutes";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"dynamic-routes"}>
          <Route index element={<DynamicRoutes />} />
          <Route path={"product/:id"} element={<Product />} />
        </Route>
        <Route path={"advanced-dynamic-routes"}>
          <Route index element={<AdvancedDynamicRoutes />} />
          {/* {folderList.map((folder) =>
            createDynamicRoute(
              folder.link,
              folder.children,
              folder.id,
              folder.name,
              folder.folder
            )
          )} */}
        </Route>
      </Routes>
    </div>
  );
}

export default Routing;
