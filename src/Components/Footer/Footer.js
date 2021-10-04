import React from 'react';

const Footer = () => {
    return (
        < >
        <footer className="bg-dark text-light py-3">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a className="text-decoration-none text-light" href="#biology">Master of Biology</a></li>
                            <li><a className="text-decoration-none text-light" href="#english">Master of English</a></li>
                            <li><a className="text-decoration-none text-light" href="#computer">Master of Computer Science</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <h3>About</h3>
                        <ul >
                            <li><a className="text-decoration-none text-light" href="#success">Success Story</a></li>
                            <li><a className="text-decoration-none text-light" href="#team">Team</a></li>
                            <li><a className="text-decoration-none text-light" href="#careers">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3>Havard Academy</h3>
                        <p>Dedicated to increasing our knowledge of the culture, history, and institutions
                        of the world's major regions and countries.</p>
                    </div>
                </div>
                <p className="copyright">Havard Academy © 2021</p>
            </div>
        </footer>
        </>
    );
};
export default Footer;