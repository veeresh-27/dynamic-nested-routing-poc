import React, { useContext, useEffect } from "react";
import { StyledSideNavbar } from "./style";
import { FolderContext } from "../../context/folderContext";
import { useAlterFolder } from "../../hooks/useAlterFolder";
import FileExplorer from "../fileExplorer";
import { useFolderLinks } from "../../hooks/useFolderLinks";
import { setStorage } from "../../functions/localstorage";

function SideNavbar() {
  const { allFolders, setAllFolders } = useContext(FolderContext);

  const { insertNode, deleteNode } = useAlterFolder();

  const links = useFolderLinks(allFolders, "");
  // console.log(links);



  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(allFolders, folderId, item, isFolder);
    setAllFolders(finalTree);
  };

  function handleDeleteNode(itemId) {
    const finalTree = deleteNode(allFolders, itemId, false);
    setAllFolders(finalTree);
    setStorage("folderList", finalTree);
  }

  useEffect(() => {
    // console.log('refreshed')
  }, []);
  return (
    <StyledSideNavbar>
      <FileExplorer
        folder={allFolders}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        links={links}
      />
    </StyledSideNavbar>
  );
}

export default SideNavbar;
