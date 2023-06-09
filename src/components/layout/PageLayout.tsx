import { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return <div className="py-4 mx-auto max-w-4xl">{children}</div>;
};

export default PageLayout;
