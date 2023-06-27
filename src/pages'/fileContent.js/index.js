import React, { useState } from "react";
import Modal from "../../components/modal";

function FileContent() {
  const [modal, setModal] = useState(false);
  const handleOpen = () => {
    setModal(true);
  };
  return (
    <div>
      FileContent
      <h2>Current Pathname 👉️ {window.location.pathname}</h2>
      <button onClick={handleOpen}>OPEN</button>
      {modal && (
        <Modal visible={modal} close={setModal}>
          Hello
        </Modal>
      )}
    </div>
  );
}

export default FileContent;
