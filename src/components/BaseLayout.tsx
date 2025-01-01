import { memo } from "react";

import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default memo(BaseLayout);
