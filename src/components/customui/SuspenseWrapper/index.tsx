import { Suspense } from "react";
import FallBackUI from "../FallBackUI";

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<FallBackUI />}>{children}</Suspense>;
};

export default SuspenseWrapper;
