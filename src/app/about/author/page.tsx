import "../../chapters/[...slug]/page.scss"
import "../about.scss";
import "./author.scss";
import { IoMdGlobe, IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div className="content about-page">
      <article>
        <div className="book-content">
          <h1>About the Author</h1>
          <div className="author-layout">
            <div className="author-photo">
              <img src="/assets/about/author-joao-uchoa.png" alt="Joao Uchoa" />
            </div>
            <div className="author-bio">
              <h2>Joao Uchoa</h2>
              <p>
                Hi, I am <a href="https://www.linkedin.com/in/jampauchoa/" target="_blank" rel="noopener noreferrer">Joao Uchoa</a> (or Jampa Uchoa), an engineering leader and entrepreneur with over a decade spent 
                building and guiding high-performing teams. I've led teams across startups and high-growth companies through 
                complex projects, scaling challenges, and organizational change.
              </p>
              <p>
                In The Art of Engineering Management, I provide practical, hands-on advice on the finer details of the 
                engineering manager role. While other books are excellent (and you should check them out), they do not 
                explore the direct management of engineers and day-to-day operations.
              </p>
              <p>
                As you'll discover in this book, the engineering manager role is incredibly flexible. Your ultimate goal 
                is to do whatever it takes to make your team successful.
              </p>
              <p>
                I firmly believe that "information should be free", which is why all the content in this book is <a href="https://github.com/JampaUchoa/the-art-of-engineering-management" target="_blank" rel="noopener noreferrer">open source</a>.
              </p>
              
              <div className="author-links">
                <a href="https://jampa.dev" target="_blank" rel="noopener noreferrer" className="author-link" title="Website">
                  <IoMdGlobe />
                </a>
                <a href="https://www.linkedin.com/in/jampauchoa/" target="_blank" rel="noopener noreferrer" className="author-link" title="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="mailto:book@taoem.com" className="author-link" title="Email">
                  <IoMdMail />
                </a>
                <a href="https://github.com/JampaUchoa" target="_blank" rel="noopener noreferrer" className="author-link" title="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}