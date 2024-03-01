import { Header } from ".";

export const Layout = ({ children }) => {
  return (
    <>
      <div className=" container max-w-[1440px] mx-auto flex  flex-col">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};
export default Layout;
