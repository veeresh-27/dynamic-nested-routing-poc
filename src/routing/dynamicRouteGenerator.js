import { Route, createBrowserRouter } from "react-router-dom";
import FileContent from "../pages'/fileContent.js";

export const createDynamicRoute = ({ link, children, id, name, folder }) => {
  if (folder === true) {
    return createBrowserRouter([
      {
        path: `${link}`,
        element: <>{name}-{link}</>,
        children:
          children.length > 0
            ? children.map((child) =>
                createDynamicRoute(
                  child.link,
                  child.children,
                  child.id,
                  child.name,
                  child.folder
                )
              )
            : [],
      },
    ]);
  } else {
    return createBrowserRouter([
      {
        path: `${link}`,
        element: <FileContent />,
      },
    ]);
  }
};

export const DynamicRouteGenerator = ({ link, children, id, name, folder }) => {
  if (folder === true) {
    return (
      <Route path={`${link}`}>
        <Route index element={<></>} />
        {children.length > 0 &&
          children.map((child) => (
            <DynamicRouteGenerator
              link={child.link}
              children={child.children}
              id={child.id}
              name={child.name}
              folder={child.folder}
            />
          ))}
      </Route>
    );
  } else {
    return <Route path=":id" element={<FileContent />} />;
  }
};
