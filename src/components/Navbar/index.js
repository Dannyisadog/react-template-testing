const Navbar = () => {
  const helloAlert = (page) => {
    alert(`This is ${page} page`);
  }
  return (
    <nav className="fixed top-0 left-0 h-12 w-full bg-black px-12 flex items-center text-[#f0f0f0]">
      <ul className="flex">
        <li className="cursor-pointer" onClick={() => {
          helloAlert("Home")
        }}>Home</li>
        <li className="cursor-pointer ml-4" onClick={() => {
          helloAlert("About")
        }}>About</li>
        <li className="cursor-pointer ml-4" onClick={() => {
          helloAlert("Contact")
        }}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;