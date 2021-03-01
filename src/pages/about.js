import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {FaCheckCircle} from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
// import TechTag from "../components/tags/TechTag"

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
                            a two-year program of 'heavy' maths and computer science introduction where I grasped every
                            aspects of computer science, from assembly to web dev through C++ and Ocaml.
                        </p>
                        <p>
                            During my second year I had the chance of participating in a sandwich course with the GFI
                            company (now named <a href="https://gfi.world/fr-en/">Inetum</a>).
                            There I worked in a 15 people team on a huge Java Spring codebase, the clients were
                            University Hospitals everywhere in France.
                            The app we maintained was used to optimize the processes and finances of clinical researches.
                        </p>
                        <p>
                            I continued my studies with a professional bachelor nicknamed DAWIN (Web Applications Development and
                            Technological Innovation).
                            This year was a sandwich course too but this time I worked for a young startup called
                            <a href="https://dynamicscreen.com/"> DynamicScreen</a> as a fullstack developer.
                            DynamicScreen propose a solution to manage fleets of screens displaying informations (digital
                            signage).
                        </p>
                        <p>
                            I am now in a private school called Digital Campus in Bordeaux to obtain a master degree, my
                            formation is nicknamed "Tech Lead", it's the professional role I'm aiming for in the future.
                            And again this formation in an apprenticeship, I'm working this year for a communication,
                            print and web company called <a href="https://www.agence-awam.fr/">AWAM</a> in downtown Bordeaux.
                            I work there as a full-stack web developer with a small team of 5 very talented colleagues.
                        </p>
                        <p>
                            I'm a pretty chill yet determined guy.
                            I strive to become a versatile Web Developer to fulfil the projects entrusted to me.
                        </p>
                        <p>
                            I put online this blog to share to the world my meager knowledge in the form of articles about
                            diverse development subjects, also to work as a memory of what I used to do.
                        </p>
                        <br/>

                        <h2 className="heading">My personality</h2>
                        <p>
                            Everything about my personality can be found following this link :
                            <a href="https://www.16personalities.com/profiles/ab383cd23b3cc"> Link to 16 personalities</a>
                        </p>
                        <p>
                            TLDR : I'm a ISFJ-T a turbulent defender, a sentinel and my strategy in life should be constant improvement (which means basically nothing without explanations => no TLDR, go read the link).
                        </p>
                        <h2 className="heading">My interests</h2>
                        <div>
                             <span className="text-success d-inline-block" title="blazing">
                                 <FaCheckCircle size={26} style={{color: "success"}}/>
                             </span>
                             <p className="d-inline-block ml-3 w-75 align-top">Typing practice</p>
                             <p>
                                 In the beginning of 2020 I launched myself on a journey to learn touchtyping (typing fast without looking at the keyboard).
                                 I spent most of my time practicing on <a href="https://www.typingclub.com/">typing club </a>
                                 and more recently on <a href="https://www.keybr.com/profile/e3lbx06">keybr</a>
                             </p>
                        </div>

                        <div>
                             <span className="text-success d-inline-block" title="blazing">
                                 <FaCheckCircle size={26} style={{color: "success"}}/>
                             </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Competitive programming</p>
                            <p>
                                Early 2021 I started working on my problem solving skills.
                                You can check my progress on Project Euler by adding me as a friend (my friend key : 1770528_pUsdY92K6YVHcr61vRigJbRZVeaJWe5e) and <a href="https://www.codewars.com/users/oui/stats">codeWars</a>
                            </p>
                        </div>

                        <div>
                             <span className="text-success d-inline-block" title="blazing">
                                 <FaCheckCircle size={26} style={{color: "success"}}/>
                             </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Game development</p>
                            <p>
                               Early 2021 I also began to learn to use <a href="https://godotengine.org/">Godot</a> in order to put down some of my ideas and develop my creativity.
                            </p>
                        </div>

                        <div>
                             <span className="text-success d-inline-block" title="blazing">
                                 <FaCheckCircle size={26} style={{color: "success"}}/>
                             </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Gaming</p>
                            <p>
                                I used to play a lot of video games, not so much these days.
                                I am very fond of independant games made by independant studios.
                                I play on <a href="https://steamcommunity.com/id/zulutetard">Steam</a>, BattleNet and Nintendo Switch.
                            </p>
                        </div>

                        <div>
                             <span className="text-success d-inline-block" title="blazing">
                                 <FaCheckCircle size={26} style={{color: "success"}}/>
                             </span>
                            <p className="d-inline-block ml-3 w-75 align-top">What I read & what I watch</p>
                            <p>I'm not very fond of talking about what I read and watch as I hate being part of fandoms that do more harm to the work of the author.</p>
                            <p>I also often come up with my own opinions which are not very popular so I lose credibility very fast haha (and I mostly don't care about yours).</p>

                            <p>I keep track of the animes and mangas I watch with MyAnimeList (it's almost up-to-date)</p>
                            <p>You can check out what I watched <a href="https://myanimelist.net/animelist/impperio">here</a> and what I read <a href="https://myanimelist.net/mangalist/impperio">here</a>.</p>

                            <p>I also watch a lot of series and movies, my favorite genres are SF and Psychological horror.</p>
                            <p>I love to occasionally read self improvement books even if it's hard to find the good ones.</p>
                        </div>

                        <div>
                             <span className="text-success d-inline-block" title="blazing">
                                 <FaCheckCircle size={26} style={{color: "success"}}/>
                             </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Sports</p>
                            <p>
                                My favorite sport by far is Badminton,
                                I'm not very competitive overall but I consider that I have pretty decent skills
                                as I began practicing when I was around 12 years old.

                                I'm in a constant quest to improve my cardio so I began practicing long distance running at the end of 2020.
                            </p>
                        </div>

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

