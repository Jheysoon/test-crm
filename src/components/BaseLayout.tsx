import { memo } from "react";

import { Outlet } from "react-router";

const BaseLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default memo(BaseLayout);
