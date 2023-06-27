import styled from "styled-components";

const selectPostition = {
  top: "top:0;",
};

export const StyledModalBackdrop = styled.div`
  ${({ fullScreen }) =>
    fullScreen
      ? `
   

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  `
      : ``};

  position: absolute;
  z-index: 9;
`;

export const StyledModal = styled.div`
  background-color: #5d5c5f;
  padding: 12px;
  min-width: 80px;
  color: white;
  border-radius: 6px;
`;

export const StyledTitle = styled.h2`
  font-size: 20px;

`

export const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  
`;
