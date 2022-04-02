import React, { useEffect } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
      // categories = [],
      // setCurrentCategory,
      // contactSelected,
      currentCategory,
      // setContactSelected,
      currentPageSelected,
      setCurrentPageSelected,
    } = props;

    useEffect(() => {
      document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
  
    return (
      <header className="flex-row px-1">
        <h2>
          <a data-testid="link" href="/">
                <span role="img" aria-label="skull">&#9760;</span> Mattrick127s Page
          </a>
        </h2>
        <nav>
          <ul className="flex-row">

            <li className={`mx-2 ${currentPageSelected === 'about' && 'navActive'}`}>
              <span onClick={() => setCurrentPageSelected("about")}>
                About me
              </span>
            </li>

            <li className={`mx-2 ${currentPageSelected === 'contact' && 'navActive'}`}>
              <span onClick={() => setCurrentPageSelected("contact")}>
                  Contact
              </span>
            </li>

            <li className={`mx-2 ${currentPageSelected === 'resume' && 'navActive'}`}>
              <span onClick={() => setCurrentPageSelected("resume")}>
                  Resume
              </span>
            </li>

            <li className={`mx-2 ${currentPageSelected === 'portfolio' && 'navActive'}`}>
              <span onClick={() => setCurrentPageSelected("portfolio")}>
                  Portfolio
              </span>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  

export default Nav;