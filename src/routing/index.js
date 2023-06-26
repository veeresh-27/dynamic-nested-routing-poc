import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages'/home";
import { FolderContext } from "../context/folderContext";
import { useFolderLinks } from "../hooks/useFolderLinks";
import FileContent from "../pages'/fileContent.js";
import NotFound from "../pages'/notFound";

function Routing() {
  const { allFolders } = useContext(FolderContext);
  const folderLinks = useFolderLinks(allFolders, "");
  // console.log(folderLinks);
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={"/"} element={<Home />} />
        {folderLinks.map((folder, index) => {
          return (
            <Route
              key={folder.id}
              path={folderLinks[index].link}
              element={
                <>
                  <FileContent />
                </>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default Routing;
