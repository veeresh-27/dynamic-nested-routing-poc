import React, { useState } from "react";
import { StyledFileView, StyledFolderView } from "./style";
import { useNavigate } from "react-router-dom";
import AddFolderIcon from "../../assets/icons/addFolderIcon.png";
import AddFileIcon from "../../assets/icons/addFileIcon.png";
import Modal from "../modal";

function FileExplorer({ folder, handleInsertNode, handleDeleteNode, links }) {
  const navigate = useNavigate();

  const [expand, setExpand] = useState(false);
  const [modal, setModal] = useState(false);
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

  const handleDeleteBtn = (folderId) => {
    const deleteAlertMessage = {
      true: "Deleting this folder will delete all the folders and files inside this folder!! Are you sure you want to delete?",
      false:
        "Deleting this file will delete all the data inside this file!! Are you sure you want to delete?",
    };
    if (window.confirm(`${deleteAlertMessage[folder.folder]}`)) {
      handleDeleteNode(folderId);
      console.log(folder.id);
    }
    window.location.reload();
  };

  const handleRightClickOnFile = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setModal(true);
  };

  const onAddFolder = (e) => {
    e.stopPropagation();
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(folder.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  return (
    <div>
      {folder.folder === true ? (
        <div style={{ paddingLeft: "8px" }}>
          <StyledFolderView width="100%" onClick={() => setExpand(!expand)}>
            <div>
              {expand !== true ? <>📁</> : <>📂</>}&nbsp;{folder.name}
            </div>
            <div
              style={{
                display: "flex",
                gap: "4px",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  height: "20px",
                  cursor: "pointer",
                }}
                onClick={(e) => handleNewFolder(e, true)}
              >
                <img width={"20px"} src={AddFolderIcon} alt="Add Folder" />
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  height: "20px",
                }}
                onClick={(e) => handleNewFolder(e, false)}
              >
                <img
                  width={"17px"}
                  style={{ objectFit: "fill" }}
                  src={AddFileIcon}
                  alt="Add Folder"
                />
              </button>
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
                handleDeleteNode={handleDeleteNode}
                links={links}
              />
            ))}
        </div>
      ) : (
        <StyledFileView
          onContextMenu={(e) => handleRightClickOnFile(e)}
          onClick={handleFileClick}
          onBlur={() => setModal(false)}
          width="100%"
        >
          📄 {folder.name}
          {modal && (
            <Modal close={setModal} visible={modal}>
              <button onClick={() => handleDeleteBtn(folder.id)}>Delete</button>
              <button>Rename</button>
            </Modal>
          )}
        </StyledFileView>
      )}
    </div>
  );
}

export default FileExplorer;
