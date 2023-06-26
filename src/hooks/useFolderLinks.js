import { useEffect, useState } from "react";
import { folderList, routeArray } from "../components/fileExplorer";

export const useFolderLinks = (folderList, link) => {
  const [folderLinks, setFolderLinks] = useState([]);

  const routeArray = (folders, link) => {
    if (folders.folder != true) {
      let tempLink = { link: link + "/" + folders.name, id: folders.id };

      setFolderLinks((prev) => [...prev, tempLink]);
      return { link: link + "/" + folders.name, id: folders.id };
    } else {
      // console.log(folders.name, "Folder-Link");
      if (folders.name == "root") {
        link = folders.name;
      } else {
        link = link + "/" + folders.name;
      }
      let links = [];
      if (folders.children && folders.children.length > 0) {
        links = folders.children.map((child) => {
          return routeArray(child, link);
        });
      }
    }
  };

  useEffect(() => {
    setFolderLinks([]);
    routeArray(folderList, link);
  }, []);

  return folderLinks;
};
