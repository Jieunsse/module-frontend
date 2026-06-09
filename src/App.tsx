import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

function App() {
  const { pathname } = useLocation();

  // 라우트 변경 시 스크롤 최상단으로.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return <Outlet />;
}

export default App;
