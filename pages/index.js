import Link from 'next/link'
import Layout from '../components/layout'

export default function Index() {
    return (
        <Layout>
            <div>
                <ul className="list">
                    <li>
                        <Link href='/about'><a>About</a></Link>
                    </li>
                    <li>
                        <Link href="/project"><a>Project Showcase</a></Link>
                    </li>
                    <li>
                        <Link href="/contact"><a>Contact</a></Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Welcome!</h3>
                <img src ='../assets/Headshot.jpg' alt="Headshot"></img>
                <p>Welcome to my personal website! The purpose of this website is for it to be 
                    my professional portfolio as well as a project showcase. 
                </p>
            </div>
            <div>
                <p>I also felt that if I wanted a a job as a web application developer or a software
                    developer, I should have a website where I can show that I am competent in development
                    as well as the willingness and desire to learn.
                </p>
            </div>
            <div>
                <h4>Here the daily quote to get you through the day!</h4>
              
            </div>
        </Layout>
    );
}