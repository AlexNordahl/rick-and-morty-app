import React from "react";
import { Button } from "semantic-ui-react";

const Pagination = ({ page, setPage }) => {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Poprzednia
      </Button>
      <span style={{ margin: "0 10px" }}>Strona {page}</span>
      <Button onClick={() => setPage(page + 1)}>Następna</Button>
    </div>
  );
};

export default Pagination;
