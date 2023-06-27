import React, { useState } from "react";
import {
  StyledHead,
  StyledModal,
  StyledModalBackdrop,
  StyledTitle,
} from "./style";

function Modal({ children, visible, close, fullScreen = false, title }) {
  const [show, setShow] = useState(visible);

  const handleClose = () => {
    setShow(false);
    close(false);
  };
  return (
    <>
      {visible && (
        <StyledModalBackdrop fullScreen={fullScreen}>
          <StyledModal>
            <StyledHead>
              {title && <StyledTitle>Title</StyledTitle>}
              <button onClick={handleClose}>Close</button>
            </StyledHead>
            <div>{children}</div>
          </StyledModal>
        </StyledModalBackdrop>
      )}
    </>
  );
}

export default Modal;
