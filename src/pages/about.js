import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {FaCheckCircle} from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const AboutPage = (props) => {
    const labels = props.data.site.siteMetadata.labels
    const aboutTags = ["react", "nodejs", "html", "css"]
    const tags = {}
    labels.forEach(label => {
        aboutTags.forEach(tag => {
            if (tag === label.tag) {
                tags[tag] = label.name
            }
        })
    })

    return (
        <Layout>
            <SEO title="About"/>
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar/>
                </div>

                <div className="post-main">
                    <SEO title="About"/>
                    <div className="mt-3">
                        <h2 className="heading">About - A little introduction of myself</h2>
                        <p>
                            <i>
                                Everything written here is also on my linkedin profile, in a much more visual way...
                            </i>
                        </p>
                        <p>
                            I began my college formation at the university of Bordeaux with what we call in France a
                            'Technological University Diploma',
                            a two-year program of heavy maths and computer science introduction where I grasped every
                            aspects of computer science, from assembly to web dev through C++ and Ocaml.
                        </p>
                        <p>
                            During my second year I had the chance of participating in a sandwich course with the GFI
                            company.
                            There I worked in a 15 people team on a huge Java Spring codebase, the clients were
                            University Hospitals everywhere in France.
                            The app we maintained was used to optimize the process and finances of clinical researches.
                        </p>
                        <p>
                            I continued my studies with a professional bachelor nicknamed DAWIN (Web App Development and
                            Technological Innovations).
                            This year was a sandwich course too but this time I worked for a young startup called
                            DynamicScreen as a fullstack developer.
                            DynamicScreen propose a solution to manage fleets of screens displaying informations (digital
                            signage).
                        </p>
                        <p>
                            I am now in a private school called Digital Campus in Bordeaux to obtain a master degree, my
                            formation is nicknamed "Tech Lead", it's the professional role I'm aiming for in the future.
                            And again... this formation in an apprenticeship, I'm working this year for a communication,
                            print and web company called AWAM in downtown Bordeaux.
                            I work there as a full-stack web developer in a small team of 5 very talented colleagues.
                        </p>
                        <p>
                            I'm a pretty chill yet determined guy and I gather knowledge like a loot hoarder.
                            I strive to become a versatile Web Developer to fulfil the projects entrusted to me.
                        </p>
                        <p>
                            I put online this blog to share to the world my meager knowledge in the form of articles on
                            diverse development subjects.
                        </p>
                        <br/>
                        {/*<h4>Features</h4>*/}
                        {/*<div>*/}
                        {/*     <span className="text-success d-inline-block" title="blazing">*/}
                        {/*         <FaCheckCircle size={26} style={{color: "success"}}/>*/}
                        {/*     </span>*/}
                        {/*    <p className="d-inline-block ml-3 w-75 align-top">Blazing fast, as you'd expect from a*/}
                        {/*        Gatsby site</p>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*     <span className="text-success d-inline-block" title="tags">*/}
                        {/*         <FaCheckCircle size={26} style={{color: "success"}}/>*/}
                        {/*     </span>*/}
                        {/*    <p className="d-inline-block ml-3 w-75 align-top">Tech tags designed for web developers</p>*/}
                        {/*    <div className="ml-5">*/}
                        {/*        <TechTag tag="react" tech="React" name={tags["react"]} size={20} color="deepskyblue"/>*/}
                        {/*        <TechTag tag="nodejs" tech="Node.js" name={tags["nodejs"]} size={20}*/}
                        {/*                 color="lightgreen"/>*/}
                        {/*        <TechTag tag="html" tech="HTML" name={tags["html"]} size={20} color="darkorange"/>*/}
                        {/*        <TechTag tag="css" tech="CSS" name={tags["css"]} size={20} color="teal"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="mt-4">*/}
                        {/*     <span className="text-success d-inline-block" title="prism">*/}
                        {/*         <FaCheckCircle size={26} style={{color: "success"}}/>*/}
                        {/*    </span>*/}
                        {/*    <p className="d-inline-block ml-3 w-75 align-top">Includes Prism for code block styling in*/}
                        {/*        markdown files</p>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <span className="text-success d-inline-block" title="icons">*/}
                        {/*        <FaCheckCircle size={26} style={{color: "success"}}/>*/}
                        {/*    </span>*/}
                        {/*    <p className="d-inline-block ml-3 w-75 align-top">Developer-relevant social-media icon links*/}
                        {/*        including GitHub, Stack Overflow and freeCodeCamp</p>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <span className="text-success d-inline-block" title="mobile">*/}
                        {/*        <FaCheckCircle size={26} style={{color: "success"}}/>*/}
                        {/*    </span>*/}
                        {/*    <p className="d-inline-block ml-3 w-75 align-top">Mobile responsive, of course</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query aboutQuery {
        site {
            siteMetadata {
                labels {
                    tag
                    tech 
                    name 
                    size 
                    color
                }
            }
        }
    }
`

export default AboutPage

