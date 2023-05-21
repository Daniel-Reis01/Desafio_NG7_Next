
import React, { useEffect, useRef } from 'react';
import { Grid } from "gridjs";

import "gridjs/dist/theme/mermaid.css";

const UserTable = ({ filteredUsers }) => {
  const tableRef = useRef(null);

  useEffect(() => {
    const grid = new Grid({
      columns: ['Name', 'Age', 'Gender','City','State','Country'],
      data: filteredUsers.map((user) => [`${user.name.first} ${user.name.last}`, user.dob.age, user.gender, user.location.city, user.location.state,user.location.country]),
      pagination: {
        limit: 10,
      }
    });

    grid.render(tableRef.current);

    return () => {
      grid.destroy();
    };
  }, [filteredUsers]);

  return <div>
  <div ref={tableRef}></div>
</div>
};

export default UserTable;
