import styled from "styled-components";

export const StyledFolderView = styled.div`
  display: flex;
  width: ${({ width }) => width};
  background-color: grey;
  padding: 6px 6px 6px 12px;
  border-radius: 6px;
  margin-bottom: 8px;
  align-items: center;
`;

export const StyledFileView = styled.div`
  display: flex;
  width: ${({ width }) => width};
  background-color: lightgray;
  padding: 6px 6px 6px 12px;
  border-radius: 6px;
  margin-bottom: 8px;
  align-items: center;
`;
