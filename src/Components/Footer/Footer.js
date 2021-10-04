import React from 'react';

const Footer = () => {
    return (
        < >
          <footer className=" bg-dark py-3 px-3">
            <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-4 text-white">
                    <h6 className="fw-bold">Useful links</h6>
                    <div>
                        <li> <a className="text-decoration-none text-white" href="#Learn">Learn More</a> </li>
                        <li> <a className="text-decoration-none text-white" href="#Learn">Careers</a> </li>
                        <li> <a className="text-decoration-none text-white" href="#Learn">FAQs</a> </li>
                    </div>
                </div>

                <div className="col-md-4 col-lg-4 col-sm-4 text-white mt-5">
                   <p className="text-center">Copyright &#169; by tanzir-razu</p>
                </div>

                <div className="col-md-4 col-lg-4 col-sm-4 text-white text-end">
                    <h6 className="fw-bold">Contact</h6>
                    <div className="d-block">
                        <span>Email: tanzirrazu@gmail.com</span>
                        <br />
                        <span>Phone: 01995879410</span>
                        <br />
                        <span>Tel: 00889463</span>
                    </div>
                </div>
            </div>
          </footer>
        </>
    );
};
{/* <p ></ */}
export default Footer;