import Navbar from "../Navbar";
import Footer from "../Footer";
import FullPageLoader from "../FullPageLoader";
import { useState } from "react";

const Layout = (props) => {
  const { children } = props;
  const [showLoader, setShowLoader] = useState(false);
  return (
    <div>
      <Navbar />
      <main>
        {children}
        <button
          onClick={() => {
            setShowLoader(true)
          }}
        >
          Show Loader
        </button>
      </main>
      <FullPageLoader show={showLoader} setShow={setShowLoader} />
    </div>
  );
}

export default Layout;