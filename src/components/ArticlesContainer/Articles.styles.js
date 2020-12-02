import styled from "styled-components";
import Articles from "../../pages/articles";

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
`;

export const Article = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 15px;
  border: 1px solid #f1f1f1;
  height: 250px;
  width: 250px;
  border-radius: 6px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  background: #f9f9f9;
  padding: 15px 25px;

  img {
    border-radius: 8px;
    border: 1px solid #333;
    margin-bottom: 10px;
  }
`;
