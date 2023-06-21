import React, { useState } from "react";
import { StyledFileView, StyledFolderView } from "./style";

export const folderList = [
  {
    id: 19283,
    name: "root",
    link: "/",
    folder: true,
    children: [
      {
        id: 19284,
        name: "Folder1",
        link: `Folder1`,
        folder: true,
        children: [
          {
            id: 19285,
            name: "file1",
            folder: false,
            link: `file1`,
          },
          {
            id: 192857,
            name: "Folder4",
            folder: true,
            link: "folder4",
            children: [
              {
                id: 19288,
                name: "File5",
                folder: false,
                link: `file5`,
              },
            ],
          },
        ],
      },
      {
        id: 19286,
        name: "Folder2",
        link: `Folder2`,
        folder: true,
        children: [],
      },
    ],
  },
];

function FileExplorer({ id, name, link, folder, children }) {
  const [expand, setExpand] = useState(false);
  console.log(children);
  return (
    <div>
      {folder === true ? (
        <div style={{ paddingLeft: "8px" }}>
          <StyledFolderView width="120px" onClick={() => setExpand(!expand)}>
            {name}
            {expand !== true ? <>👉</> : <>👇</>}
          </StyledFolderView>{" "}
          {expand === true &&
            children.map((child) => (
              <FileExplorer
                id={child.id}
                name={child.name}
                link={child.link}
                folder={child.folder}
                children={child.children}
              />
            ))}
        </div>
      ) : (
        <StyledFileView width="120px">{name}</StyledFileView>
      )}
    </div>
  );
}

export default FileExplorer;
