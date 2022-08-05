import { StyledPaginationContainer } from "./pagination.style";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = () => {
  return (
    <StyledPaginationContainer>
      <span className="pagination-item disabled">
        <MdKeyboardArrowLeft size={20} />
      </span>
      <span className="pagination-item active">1</span>
      <span className="pagination-item">2</span>
      <span className="pagination-item hide">3</span>
      <span className="pagination-item">...</span>
      <span className="pagination-item">230</span>
      <span className="pagination-item">
        <MdKeyboardArrowRight size={20} />
      </span>
    </StyledPaginationContainer>
  );
};

export { Pagination };
