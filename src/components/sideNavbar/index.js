import React, { useContext, useEffect } from "react";
import { StyledSideNavbar, StyledSideNavbarEle } from "./style";
import { Link } from "react-router-dom";
import { FolderContext } from "../../context/folderContext";
import { useAlterFolder } from "../../hooks/useAlterFolder";
import FileExplorer from "../fileExplorer";
import { useFolderLinks } from "../../hooks/useFolderLinks";

function SideNavbar() {
  const { allFolders, setAllFolders } = useContext(FolderContext);

  const { insertNode } = useAlterFolder();

  const links = useFolderLinks(allFolders, "");
  // console.log(links);

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(allFolders, folderId, item, isFolder);
    setAllFolders(finalTree, "finalTree");
  };
  useEffect(()=>{
    // console.log('refreshed')
  }, [])
  return (
    <StyledSideNavbar>
      <FileExplorer
        folder={allFolders}
        handleInsertNode={handleInsertNode}
        links={links}
      />
    </StyledSideNavbar>
  );
}

export default SideNavbar;
