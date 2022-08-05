import styled from "styled-components";
export const StyledPaginationContainer = styled.div`
  display: flex;

  .pagination-item {
    padding: 0px 12px;
    height: 3.5rem;
    text-align: center;
    margin: auto 4px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 1rem;
    font-size: 1.4rem;
    font-weight: 500;
    min-width: 2.5rem;
    background-color: #eceff5;

    @media only screen and (max-width: 500px) {
      &.hide {
        display: none;
      }
    }

    &.disabled {
      color: #a5a7a9;
    }

    &.active {
      background-color: #1d202d;
      color: #abaebb;
    }
  }
`;
