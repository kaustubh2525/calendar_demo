import { ErrorBoundary } from "@/components/customui/ErrorBoundary";
import ErrorFallback from "@/components/customui/ErrorFallback";
import SuspenseWrapper from "@/components/customui/SuspenseWrapper";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <SuspenseWrapper>
        <Outlet />
      </SuspenseWrapper>
    </ErrorBoundary>
  );
};

export default MainLayout;
