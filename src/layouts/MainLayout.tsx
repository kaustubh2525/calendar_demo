import { ErrorBoundary } from "@/components/customui/ErrorBoundary";
import ErrorFallback from "@/components/customui/ErrorFallback";
import SuspenseWrapper from "@/components/customui/SuspenseWrapper";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    // This is just to make the component Lazy Load and Hold Any Error Boundaries with Suspense
    <ErrorBoundary fallback={<ErrorFallback />}>
      <SuspenseWrapper>
        <Outlet />
      </SuspenseWrapper>
    </ErrorBoundary>
  );
};

export default MainLayout;
