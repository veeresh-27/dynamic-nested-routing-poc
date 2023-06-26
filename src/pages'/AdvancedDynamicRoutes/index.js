import React, { useEffect, useState } from "react";
import FileExplorer from "../../components/fileExplorer";
import { folderList } from "../../data/folders";
import { FolderContext } from "../../context/folderContext";
import { useAlterFolder } from "../../hooks/useAlterFolder";
import { useFolderLinks } from "../../hooks/useFolderLinks";

function AdvancedDynamicRoutes() {
  const [allFolders, setAllFolders] = useState(folderList);
  const { insertNode } = useAlterFolder();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(allFolders, folderId, item, isFolder);
    setAllFolders(finalTree, "finalTree");
  };

  const links = useFolderLinks(folderList, "");

  return (
    <div>
      <FileExplorer
        folder={allFolders}
        handleInsertNode={handleInsertNode}
        links={links}
      />
    </div>
  );
}

export default AdvancedDynamicRoutes;
