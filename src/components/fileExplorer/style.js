import styled from "styled-components";

export const StyledFolderView = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${({ width }) => width};
  background-color: lightgray;
  padding: 6px 6px 6px 12px;
  border-radius: 6px;
  margin-bottom: 8px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const StyledFileView = styled.div`
  text-decoration: none;
  color: inherit;
  display: flex;
  width: ${({ width }) => width};
  /* background-color: lightgray; */
  padding: 6px 6px 6px 12px;
  border: solid 2px lightgray;
  border-radius: 6px;
  margin-bottom: 8px;
  align-items: center;
  cursor: pointer;
`;
