import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-between position-absolute p-3 pt-4 flex-wrap">
                <div>
                    <a href="/" ><img alt="" src="https://fontmeme.com/permalink/210513/92bf56934021c61ecd6be6872053c401.png" border="0" /></a>
                </div>
                <div>
                    <button className="btn bg-transparent text-white border-white px-3 py-2 mx-2" ><img src="https://img.icons8.com/wired/14/ffffff/globe.png" alt=""/>&nbsp;English</button>
                    <button className="btn bg-transparent text-white border-white px-3 py-2 text-white mx-2">Sign In</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;