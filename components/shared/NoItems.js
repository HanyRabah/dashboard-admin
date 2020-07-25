import React from "react";
import Link from "next/link";

const NoItems = ({ link }) => {
  return (
    <div className="no-items-found">
      <img src="./images/no-data.jpg" />
      {link && (
        <p>
          No items found, Add items{" "}
          <Link href={link || ""}>
            <a href="#">here</a>
          </Link>
        </p>
      )}
      {!link && <p>Opps nothing here yet!</p>}
    </div>
  );
};

export default NoItems;
