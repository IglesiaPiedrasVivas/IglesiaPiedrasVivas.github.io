import React from 'react';

function Footer() {
    return (
        <div className="container-fluid bg-dark">
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24">
                            <use href="#bootstrap" />
                        </svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-light">&copy; 2024 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-light" href="#"><svg className="bi" width="24" height="24">
                        <use href="#twitter" />
                    </svg></a></li>
                    <li className="ms-3"><a className="text-light" href="#"><svg className="bi" width="24" height="24">
                        <use href="#instagram" />
                    </svg></a></li>
                    <li className="ms-3"><a className="text-light" href="#"><svg className="bi" width="24" height="24">
                        <use href="#facebook" />
                    </svg></a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;