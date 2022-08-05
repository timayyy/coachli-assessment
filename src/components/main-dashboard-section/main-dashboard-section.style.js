import styled from "styled-components";
export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 121.5rem;
`;
export const StyledMainSectionWrapper = styled.div`
  margin: 3rem 0;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border-radius: 1.2rem;
  padding: 1.5rem;
`;

export const ExtraTableButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  .icon-container {
    cursor: pointer;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;
export const TableWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border-radius: 1.2rem;
  border: 1px solid #ebebeb;
`;
export const StyledStatusPill = styled.div`
  background-color: ${({ status }) => (status ? "#F4EDFD" : "#E8FAFB")};
  color: ${({ status }) => (status ? "#B291D0" : "#5DCCCD")};
  border-radius: 1.2rem;
  padding: 1.5rem;
  text-align: center;
`;
export const StyledEmailContainer = styled.div`
  font-size: 1.4rem;
  text-transform: none;
`;
export const StyledNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 900px) {
    .image-container {
      display: none;
    }
  }

  .image-container {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .name-info {
    font-size: 1.4rem;
    text-transform: capitalise;

    .full-name {
      font-weight: 700;
      color: #000000;
    }
    .first-name {
      color: #aaaaaa;
    }
  }
`;
export const StyledBottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2.5rem;

  @media (max-width: 650px) {
    flex-direction: column;
  }

  .data-count {
    font-size: 1.4rem;
    font-weight: 700;
    color: #4f5156;
  }
`;
export const StyledTopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2.5rem;
  margin-bottom: 2rem;

  @media (max-width: 650px) {
    flex-direction: column-reverse;
  }
`;
export const StyledFilterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #4f5156;
`;

export const AdornmentWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: absolute;
  left: 1rem;
`;

export const InputWrapperDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledInputField = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.2rem;
  appearance: none;
  padding: 0 1.2rem 0 3rem;
  box-sizing: border-box;
  height: 3.5rem;
  color: #111827;
  border-radius: 6px;
  border: 1px solid #e9e9e9;

  &::placeholder {
    font-size: 1.2rem;
    font-weight: 400;
    color: #9ca3af;
  }
`;
export const StyledSelectInput = styled.label`
  position: relative;
  min-width: 8rem;

  select {
    appearance: none;
    border: none;
    padding: 7px 40px 7px 12px;
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-family: inherit;
    font-weight: 500;
    font-size: 1.4rem;
    color: rgb(33, 63, 125);
    transition: all 150ms ease 0s;
    border: 1px solid #e9e9e9;
  }

  svg {
    position: absolute;
    right: 1.3rem;
    top: 1rem;
  }
`;
