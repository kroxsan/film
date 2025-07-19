import React from 'react';
import logo from '../icons/logo.png';

function Header() {
   return (
      <div>
         {/* Header Satırı */}
         <div className="header d-flex align-items-center bg-dark p-2">
            <div>
               <img className="logo" src={logo} alt="logo" />
            </div>

            <div className="ms-auto d-flex align-items-center">
               <input
                  type="text"
                  placeholder="Enter a movie name..."
                  className="rounded-input mx-2 me-3"
                  style={{ maxWidth: '300px' }}
               />

               <button
                  className="navbar-toggler navbar-dark mx-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarToggleExternalContent"
                  aria-controls="navbarToggleExternalContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
            </div>
         </div>

         {/* Collapse İçerik */}
         <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
               <h4 className="text-white">Filter</h4>

               <div className="accordion custom-accordion accordion-horizontal" id="accordionExample">
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingOne">
                        <button
                           className="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapseOne"
                           aria-expanded="true"
                           aria-controls="collapseOne"
                        >
                           Genres
                        </button>
                     </h2>
                     <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                     >
                        <div className="accordion-body">item1</div>
                     </div>
                  </div>

                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingTwo">
                        <button
                           className="accordion-button collapsed"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapseTwo"
                           aria-expanded="false"
                           aria-controls="collapseTwo"
                        >
                           Year
                        </button>
                     </h2>
                     <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                     >
                        <div className="accordion-body">item2</div>
                     </div>
                  </div>

                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingThree">
                        <button
                           className="accordion-button collapsed"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapseThree"
                           aria-expanded="false"
                           aria-controls="collapseThree"
                        >
                           Duration
                        </button>
                     </h2>
                     <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                     >
                        <div className="accordion-body">item3</div>
                     </div>
                  </div>

                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingFour">
                        <button
                           className="accordion-button collapsed"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapseFour"
                           aria-expanded="false"
                           aria-controls="collapseFour"
                        >
                           IMDB
                        </button>
                     </h2>
                     <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                     >
                        <div className="accordion-body">item4</div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default Header;
