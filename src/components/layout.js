import { Header } from ".";

export const Layout = ({ children }) => {
  return (
    <>
      <div className=" container max-w-[1440px] mx-auto flex  flex-col">
        <Header />
        <main className=" container max-w-[1440px] mx-auto">{children}</main>
      </div>
    </>
  );
};
