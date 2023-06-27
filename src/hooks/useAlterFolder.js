export const useAlterFolder = () => {
  const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.folder) {
      tree.children.unshift({
        id: new Date(),
        name: item,
        folder: isFolder,
        link: item,
        children: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.children.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });
    return { ...tree, children: latestNode };
  };

  const deleteNode = (tree, itemId, found) => {
    tree.children = tree.children.filter((ele) => {
      if (ele.id === itemId) {
        found = true;
      }
      return ele.id !== itemId;
    });
    if (found == false) {
      // console.log(tree,'tree')
      if (tree.children.length > 0) {
        tree.children = tree.children.map((ob) => {
          return deleteNode(ob, itemId, false);
        });
      }
    }
    return tree;
  };

  const renameNode = () => {}; // Do it Yourself

  return { insertNode, deleteNode, renameNode };
};
