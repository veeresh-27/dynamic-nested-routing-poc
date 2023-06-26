import { Route, createBrowserRouter } from "react-router-dom";
import FileContent from "../pages'/fileContent.js";

export const createDynamicRoute = ({ link, children, id, name, folder }) => {
  const childrenLoop = (link, children) => {
    return {
      path: `${link}`,
      element: <FileContent />,
      children:
        children.length > 0 &&
        children.map((child) => childrenLoop(child.link, child.children)),
    };
  };
  if (folder === true) {
    return createBrowserRouter([
      {
        path: `${link}`,
        element: (
          <>
            {name}-{link}
          </>
        ),
        children:
          children.length > 0
            ? children.map((child) => childrenLoop(child.link, child.children))
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

// export const DynamicRouteGenerator = ({ link, children, id, name, folder }) => {
//   if (folder === true) {
//     return (
//       <Route path={`${link}`}>
//         <Route index element={<>HI</>} />
//         {children.length > 0 &&
//           children.map((child) => (
//             <Route.component>
//               <DynamicRouteGenerator
//                 link={child?.link}
//                 children={child?.children}
//                 id={child?.id}
//                 name={child?.name}
//                 folder={child?.folder}
//               />
//             </Route.component>
//           ))}
//       </Route>
//     );
//   } else {
//     return <Route path=":id" element={<FileContent />} />;
//   }
// };

export const DynamicRouteGenerator = ({ link, children, id, name, folder }) => {
  if (folder === true) {
    return (
      <Route path={`${link}`}>
        <Route index element={<>HI</>} />
        {children.length > 0 &&
          children &&
          children.map(
            (child) =>
              child && (
                <Route
                  key={id}
                  path={link}
                  element={
                    child.folder ? (
                      <DynamicRouteGenerator
                        link={child?.link}
                        children={child?.children}
                        id={child?.id}
                        name={child?.name}
                        folder={child?.folder}
                      />
                    ) : (
                      <FileContent />
                    )
                  }
                />
              )
          )}
      </Route>
    );
  } else {
    return <Route path=":id" element={<FileContent />} />;
  }
};
