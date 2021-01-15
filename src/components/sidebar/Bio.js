import React from "react"
import "./sidebar.css"

import author_img from '../../images/moi-min.png'

const Bio = ({ author, tagline }) => {
    return (
        <div className="bio-main w-75">
            <img src={author_img} style={{ maxWidth: `200px` }} className="profile-img" alt="" />
            <h3 className="mt-2 author-bio">{author}</h3>
            <small className="text-muted">{tagline}</small>
        </div>
    )
}

export default Bio