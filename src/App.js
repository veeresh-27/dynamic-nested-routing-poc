import { useEffect, useState } from "react";
import Layout from "./layout";
import Routing from "./routing";
import { FolderContext } from "./context/folderContext";
import { folderList } from "./data/folders";
import { useFolderLinks } from "./hooks/useFolderLinks";
import { getStorage, setStorage } from "./functions/localstorage";

function App() {
  const data = getStorage("folderList");
  const [allFolders, setAllFolders] = useState(data ? data : folderList);
  useEffect(() => {
    setStorage("folderList", allFolders);
  }, [allFolders]);
  return (
    <div className="App">
      <FolderContext.Provider value={{ allFolders, setAllFolders }}>
        <Layout>
          <Routing />
        </Layout>
      </FolderContext.Provider>
    </div>
  );
}

export default App;
