import React from "react";
import FileExplorer, { folderList } from "../../components/fileExplorer";

function AdvancedDynamicRoutes() {
  // console.log(folderList);
  return (
    <div>
      {folderList.map(({ id, name, link, folder, children }) => (
        <FileExplorer  id={id} name={name} link={link} folder={folder} children={children} />
      ))}
    </div>
  );
}

export default AdvancedDynamicRoutes;
