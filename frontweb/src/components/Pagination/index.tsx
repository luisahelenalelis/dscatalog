import { ReactComponent as ArrowIcon } from 'assets/images/Seta.svg';
import ReactPaginate from 'react-paginate';

import './styles.css';

const Pagination = () => {
  return (
      <ReactPaginate 
        pageCount={10}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        containerClassName="pagination-container"
        pageLinkClassName="pagination-icon"
        breakClassName="pagination-icon"
        previousClassName="arrow-previous"
        nextClassName="arrow-next"
        activeLinkClassName="pagination-link-active"
        disabledClassName="arrow-inactive"
        previousLabel={<ArrowIcon />}
        nextLabel={<ArrowIcon />}
      />
  );
};

export default Pagination;
