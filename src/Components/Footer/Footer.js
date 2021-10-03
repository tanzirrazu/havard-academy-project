import React from 'react';

const Footer = () => {
    return (
        < >
          <footer>
            <div className="bg-dark text-white py-3 px-5 fixed-bottom">
                <h5>Useful Links</h5>
                <div className="d-flex">
                    <li>
                    <a className="text-white me-2 text-decoration-none" href="#learn">learn More</a>
                    </li>
                    <li>
                    <a className="text-white me-2 text-decoration-none" href="#carrees">Careers</a>
                    </li>
                    <li>
                    <a className="text-white me-2 text-decoration-none" href="/FAQs">FAQs</a>
                    </li>
                </div>
                <p className="text-center">Copyright &#169; by tanzir-razu</p>
            </div>
          </footer>
        </>
    );
};

export default Footer;