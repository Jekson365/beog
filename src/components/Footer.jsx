import React from 'react'

export const Footer = () => {
    return (

        <>
            <div className="container-fluid" style={{"marginTop":"100px"}}>
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://assets.website-files.com/63d5ec0c84ce7a139b04638e/63e6fae264e26f6039829955_beog.svg" alt="" />
                        <p className="p">There are many variations of passages of Lorem
                            Ipsum available, but the majority.</p>
                    </div>
                    <div className="col-md-2">
                        <ul className='d-flex flex-column'>
                            <li>
                                <h3>Pages</h3>
                            </li>
                            <li>Home</li>
                            <li>Blog</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className='d-flex flex-column'>
                            <li>
                                <h3>Admin</h3>
                            </li>
                            <li>Syle Guide</li>
                            <li>License</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className='d-flex flex-column'>
                            <li>
                                <h3>Social</h3>
                            </li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
