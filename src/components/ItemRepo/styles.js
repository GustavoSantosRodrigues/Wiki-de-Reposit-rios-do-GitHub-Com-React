import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  background: #1e1e1e;
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;

  h3 {
    font-size: 22px;
    color: #fff;
  }

  .actions {
    display: flex;
    gap: 12px;
    margin-top: 16px;
  }

  .view {
    text-decoration: none;
    color: #8257e5;
    font-weight: 500;
  }

  .view:hover {
    text-decoration: underline;
  }

  .remove {
    background: #e63946;
    color: white;
    border: none;
    padding: 6px 14px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s ease;
  }

  .remove:hover {
    background: #c1121f;
  }

  .owner {
    font-weight: 500;
    font-size: 18px;
    color: #fafafa60;
  }

  .name {
    font-weight: 500;
    font-size: 18px;
    color: #fafafa60;
  }
`;
