import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;