function Navbar(props) {
  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          <div className="left">
            <div className="logo-box">{props.logo}</div>
          </div>
          {/* <div className="right"> 
            <div className="search-bar">
              <form id="search-form" className="search-form" role="search">
                <input
                  type="text"
                  name="search"
                  id="search"
                  autoComplete="off"
                />
              </form>
              <button
                id="search-button"
                className="search-button"
                type="submit"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
            */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
