import { useState } from "react";
import ReactPaginate from "react-paginate";

import { PostParams } from "../types/api/post";
import classes from "../assets/styles/Paginate.module.scss";

type Props = {
  posts: PostParams[];
  itemsPerPage: number;
};

export const usePagination = (props: Props) => {
  const { posts, itemsPerPage } = props;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentPosts = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % posts.length;
    setItemOffset(newOffset);
  };

  const paginate = (
    <>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName={classes.pageItem}
        pageLinkClassName={classes.pageItem}
        previousLinkClassName={classes.pageItem}
        nextLinkClassName={classes.pageItem}
        breakLabel="..."
        breakClassName={classes.pageItem}
        breakLinkClassName={classes.pageItem}
        containerClassName={classes.pagination}
        activeClassName={classes.activePage}
      />
    </>
  );
  return { paginate, currentPosts };
};
