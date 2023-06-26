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
      // console.log(tree, "tree");
      return tree;
    }

    let latestNode = [];
    latestNode = tree.children.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };

  const deleteNode = () => {}; // Do it Yourself

  const renameNode = () => {}; // Do it Yourself

  return { insertNode, deleteNode, renameNode };
};
