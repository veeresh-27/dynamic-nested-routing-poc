import React, { useContext, useState } from "react";
import { StyledFileView, StyledFolderView } from "./style";
import { useNavigate } from "react-router-dom";

function FileExplorer({ folder, handleInsertNode, links }) {
  const navigate = useNavigate();

  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    
    visible: false,
    isFolder: false,
  });

  const handleFileClick = () => {
    links.forEach((ele) => {
      if (ele.id == folder.id) {
        navigate(ele.link);
      }
    });
  };

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    e.stopPropagation();
    if (e.keyCode === 13 && e.target.value) {
      // console.log(folder.id, "Id");
      // console.log(e.target.value, "NAme");
      handleInsertNode(folder.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  return (
    <div>
      {folder.folder === true ? (
        <div style={{ paddingLeft: "8px" }}>
          <StyledFolderView width="200px" onClick={() => setExpand(!expand)}>
            {expand !== true ? <>📁</> : <>📂</>}
            {folder.name}
            <div>
              <button onClick={(e) => handleNewFolder(e, true)}>
                Folder +
              </button>
              <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            </div>
          </StyledFolderView>{" "}
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                className="inputContainer__input"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {expand === true &&
            folder.children.map((child) => (
              <FileExplorer
                folder={child}
                handleInsertNode={handleInsertNode}
                links={links}
              />
            ))}
        </div>
      ) : (
        <StyledFileView onClick={handleFileClick} width="120px">
          📄 {folder.name}
        </StyledFileView>
      )}
    </div>
  );
}

export default FileExplorer;
