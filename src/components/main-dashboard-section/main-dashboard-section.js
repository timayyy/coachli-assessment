import { Table } from "../table/table";
import {
  AdornmentWrapperDiv,
  ExtraTableButtons,
  InputWrapperDiv,
  StyledBottomSection,
  StyledContainer,
  StyledEmailContainer,
  StyledFilterSection,
  StyledInputField,
  StyledMainSectionWrapper,
  StyledNameContainer,
  StyledSelectInput,
  StyledStatusPill,
  StyledTopSection,
  TableWrapper,
} from "./main-dashboard-section.style";
import { TabHeader } from "./tabs-header";
import { MdCreate, MdDelete } from "react-icons/md";
import { TableData } from "../../services/tableData";
import { Pagination } from "./pagination";
import { IoSearch, IoChevronDownOutline } from "react-icons/io5";

const MainDashBoardSection = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      cell: (row) => {
        return (
          <StyledNameContainer>
            <div className="image-container">
              <img src={row.name.imgSrc} alt="contact" />
            </div>
            <div className="name-info">
              <p className="full-name">{row.name.fullName}</p>
              <p className="first-name">{row.name.firstName}</p>
            </div>
          </StyledNameContainer>
        );
      },
    },
    {
      name: "Contact",
      selector: (row) => row.contact,
      cell: (row) => {
        return (
          <StyledEmailContainer>
            <p>{row.contact.email}</p>
            <p>{row.contact.phoneNumber}</p>
          </StyledEmailContainer>
        );
      },
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => {
        return (
          <StyledStatusPill status={row.status}>
            {row.status ? "Come in" : "Not come"}
          </StyledStatusPill>
        );
      },
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      // width: "50px",
      cell: () => {
        return (
          <ExtraTableButtons>
            <div className="icon-container">
              <MdCreate />
            </div>
            <div className="icon-container">
              <MdDelete />
            </div>
          </ExtraTableButtons>
        );
      },
    },
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <TabHeader />
      <StyledContainer>
        <StyledMainSectionWrapper>
          <StyledTopSection>
            <StyledFilterSection>
              <span>Show</span>
              <StyledSelectInput>
                <select>
                  <option>8</option>
                  <option>10</option>
                </select>
                <IoChevronDownOutline />
              </StyledSelectInput>
              <span>entries</span>
            </StyledFilterSection>
            <div>
              <InputWrapperDiv>
                <AdornmentWrapperDiv>
                  <IoSearch size={15} color="#C4C4C4" />
                </AdornmentWrapperDiv>
                <StyledInputField
                  type="text"
                  placeholder="Search name,email or etc."
                  onChange={handleChange}
                />
              </InputWrapperDiv>
            </div>
          </StyledTopSection>
          <TableWrapper>
            <Table columns={columns} data={TableData || []} />
          </TableWrapper>
          <StyledBottomSection>
            <div className="data-count">
              <p>Showing 1 to 8 of 230 entries</p>
            </div>
            <Pagination />
          </StyledBottomSection>
        </StyledMainSectionWrapper>
      </StyledContainer>
    </>
  );
};

export { MainDashBoardSection };
