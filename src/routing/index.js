import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages'/home";
import DynamicRoutes from "../pages'/dynamicRoutes";
import Product from "../components/product";
import AdvancedDynamicRoutes from "../pages'/AdvancedDynamicRoutes";
import { useFolderLinks } from "../hooks/useFolderLinks";
import { folderList } from "../data/folders";



function Routing() {

  const folderLinks = useFolderLinks(folderList, "");
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
          <Route path="any" element={<>ANy</>} />
          {folderLinks.map((folder, index) => {
            return <Route key={folder.id} path={folderLinks[index].link} element={<>Hello</>} />;
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default Routing;
