import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { MdOutlineArrowOutward, MdOutlineFileDownload } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <main className="lg:flex lg:flex-row lg:h-fit w-screen p-[10vw]">
      <div className="lg:h-fit w-[77vw] md:w-[80vw] lg:w-[45vw] lg:justify-between mb-[10vh] lg:sticky lg:top-[10vw]">
        <div className="flex flex-col mb-[5vh]">
          <h1>
            <strong className="text-6xl">Jonathan Chen</strong>
          </h1>
          <h3 className="text-2xl my-[1vh]">Full-stack software developer</h3>
          <p>
            Interested in building impactful applications with beautiful user
            experiences and efficient, scalable services.
          </p>

          <ul className="my-[1vh] hidden lg:block">
            <li className="flex flex-row group w-fit">
              <IoIosArrowForward className="group-hover:opacity-100 opacity-70 transition self-center mx-1" />
              <a
                href="#education"
                className="group-hover:opacity-100 opacity-70 transition group-hover:translate-x-1"
              >
                Education
              </a>
            </li>
            <li className="flex flex-row group w-fit">
              <IoIosArrowForward className="group-hover:opacity-100 opacity-70 transition self-center mx-1" />
              <a
                href="#experience"
                className="group-hover:opacity-100 opacity-70 transition group-hover:translate-x-1"
              >
                Experience
              </a>
            </li>
            <li className="flex flex-row group w-fit">
              <IoIosArrowForward className="group-hover:opacity-100 opacity-70 transition self-center mx-1" />
              <a
                href="#extracurriculars"
                className="group-hover:opacity-100 opacity-70 transition group-hover:translate-x-1"
              >
                Extracurriculars
              </a>
            </li>
          </ul>

          <div className="underline text-lg flex flex-row group w-fit">
            <a
              href="Jonathan_Chen_Resume.pdf"
              download="Jonathan_Chen_Resume.pdf"
              className="group-hover:opacity-50"
            >
              Full Resume Here
            </a>
            <MdOutlineFileDownload className="self-center ml-1 group-hover:opacity-50" />
          </div>
        </div>

        <div className="flex flex-row">
          <a
            href="mailto:jonathanyangchen@gmail.com"
            className="mx-2 hover:opacity-50 hover:scale-105 transition"
            rel="noreferrer"
          >
            <FaEnvelope size={32} />
          </a>
          <a
            href="https://github.com/jonathanychen"
            className="mx-2 hover:opacity-50 hover:scale-105 transition"
            rel="noreferrer"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-y-chen/"
            className="mx-2 hover:opacity-50 hover:scale-105 transition"
            rel="noreferrer"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://x.com/jonchendev"
            className="mx-2 hover:opacity-50 hover:scale-105 transition"
            rel="noreferrer"
          >
            <FaTwitter size={32} />
          </a>
        </div>
      </div>

      <div className="flex flex-col w-[77vw] md:w-[80vw] lg:w-[50vw] lg:pl-[1vw] lg:h-fit lg:border-current lg:border-l-[1px]">
        <div className="text-lg -top-[10vw]" id="education">
          EDUCATION
        </div>

        <div className="w-full divide-current mb-8">
          <a href="https://illinois.edu/" className="flex flex-row group w-fit">
            <strong className="text-xl">
              University of Illinois Urbana-Champaign
            </strong>
            <MdOutlineArrowOutward
              size={16}
              className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
            />
          </a>
          <hr />
          <p className="text-lg">Master of Computer Science</p>
          <p>January 2025 – May 2026</p>
        </div>

        <div className="w-full divide-current mb-8">
          <a
            href="https://www.northeastern.edu/"
            className="flex flex-row group w-fit"
          >
            <strong className="text-xl">Northeastern University</strong>
            <MdOutlineArrowOutward
              size={16}
              className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
            />
          </a>
          <hr />
          <p className="text-lg">Bachelor of Science in Computer Science</p>
          <p>August 2021 – December 2024</p>
          <p>GPA: 3.95/4.0</p>
        </div>

        <div className="text-lg -top-[10vw]" id="experience">
          EXPERIENCE
        </div>

        <div className="w-full divide-current mb-8">
          <a
            href="https://www.capitalone.com/"
            className="flex flex-row group w-fit"
          >
            <strong className="text-xl">Capital One</strong>
            <MdOutlineArrowOutward
              size={16}
              className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
            />
          </a>

          <hr />
          <p className="text-lg">Incoming Software Engineer Intern</p>
        </div>

        <div className="w-full divide-current mb-8">
          <a
            href="https://www.klaviyo.com/"
            className="flex flex-row group w-fit"
          >
            <strong className="text-xl">Klaviyo</strong>
            <MdOutlineArrowOutward
              size={16}
              className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
            />
          </a>

          <hr />
          <p className="text-lg">Incoming Software Engineer Co-op</p>
        </div>

        <div className="w-full divide-current mb-8">
          <a href="https://www.pnnl.gov/" className="flex flex-row group w-fit">
            <strong className="text-xl">
              Pacific Northwest National Laboratory
            </strong>
            <MdOutlineArrowOutward
              size={16}
              className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
            />
          </a>
          <hr />
          <p className="text-lg">Software Engineer Intern</p>
          <p>
            Creating solutions to combat illicit finance across the United
            States.
          </p>
          <p>
            <span className="opacity-50 hover:opacity-100">Python</span>{" "}
            <span className="opacity-50 hover:opacity-100">React</span>{" "}
            <span className="opacity-50 hover:opacity-100">TypeScript</span>{" "}
            <span className="opacity-50 hover:opacity-100">AWS</span>{" "}
            <span className="opacity-50 hover:opacity-100">Docker</span>{" "}
            <span className="opacity-50 hover:opacity-100">GitLab</span>
          </p>
        </div>

        <div className="w-full divide-current mb-8">
          <a
            href="https://www.instawork.com/"
            className="flex flex-row group w-fit"
          >
            <strong className="text-xl">Instawork</strong>
            <MdOutlineArrowOutward
              size={16}
              className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
            />
          </a>
          <hr />
          <p className="text-lg">Software Engineer Co-op</p>
          <p>
            Developed core backend services to reshape the gig-work industry.
          </p>
          <p>
            <span className="opacity-50 hover:opacity-100">Python</span>{" "}
            <span className="opacity-50 hover:opacity-100">Django</span>{" "}
            <span className="opacity-50 hover:opacity-100">FastAPI</span>{" "}
            <span className="opacity-50 hover:opacity-100">Pydantic</span>{" "}
            <span className="opacity-50 hover:opacity-100">JavaScript</span>{" "}
            <span className="opacity-50 hover:opacity-100">PostgreSQL</span>
          </p>
        </div>
        <div className="w-full divide-current mb-8">
          <a
            href="https://www.khoury.northeastern.edu/"
            className="flex flex-row group w-fit"
          >
            <strong className="text-xl">
              Khoury College of Computer Sciences
            </strong>
            <MdOutlineArrowOutward
              size={16}
              className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
            />
          </a>
          <hr />
          <div className="mb-[1vh]">
            <p className="text-lg flex flex-row hover group">
              Teaching Assistant –{" "}
              <a
                href="https://4700.network/docs/syllabus/"
                className="underline ml-1"
              >
                CS4700
              </a>
              <MdOutlineArrowOutward
                size={16}
                className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
              />
            </p>
            <p>
              Helping students with concepts related to how computers
              communicate.
            </p>
            <p>
              <span className="opacity-50 hover:opacity-100">Golang</span>{" "}
              <span className="opacity-50 hover:opacity-100">Python</span>{" "}
            </p>
          </div>

          <div className="mb-[1vh]">
            <p className="text-lg flex flex-row hover group">
              Teaching Assistant –{" "}
              <a
                href="https://course.ccs.neu.edu/cs3500/"
                className="underline ml-1"
              >
                CS3500
              </a>
              <MdOutlineArrowOutward
                size={16}
                className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
              />
            </p>
            <p>
              Aiding students with the principles of object-oriented
              programming.
            </p>
            <p>
              <span className="opacity-50 hover:opacity-100">Java</span>{" "}
              <span className="opacity-50 hover:opacity-100">IntelliJ</span>{" "}
            </p>
          </div>
        </div>

        <div className="text-lg -top-[10vw]" id="extracurriculars">
          EXTRACURRICULARS
        </div>

        <div className="w-full divide-current" id="extracurriculars">
          <a
            href="https://generatenu.com/"
            className="flex flex-row group w-fit"
          >
            <strong className="text-xl">Generate</strong>
            <MdOutlineArrowOutward
              size={16}
              className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
            />
          </a>
          <hr />

          <div className="mb-[1vh]">
            <p className="text-lg flex flex-row hover group">
              Technical Lead –
              <a href="https://www.apprenta.co/" className="underline ml-1">
                Apprenta
              </a>
              <MdOutlineArrowOutward
                size={16}
                className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
              />
            </p>
            <p>
              Leading development on a scholarship platform for aspiring medical
              professionals currently enrolled in community college.
            </p>
            <p>
              <span className="opacity-50 hover:opacity-100">TypeScript</span>{" "}
              <span className="opacity-50 hover:opacity-100">React</span>{" "}
              <span className="opacity-50 hover:opacity-100">GraphQL</span>{" "}
              <span className="opacity-50 hover:opacity-100">PostgreSQL</span>{" "}
            </p>
          </div>

          <div className="mb-[1vh]">
            <p className="text-lg">Software Engineer – Couplet</p>
            <p>
              Created a mobile app that connects people through shared interests
              in events rather than superficial swipes
            </p>
            <p>
              <span className="opacity-50 hover:opacity-100">TypeScript</span>{" "}
              <span className="opacity-50 hover:opacity-100">ReactNative</span>{" "}
              <span className="opacity-50 hover:opacity-100">Golang</span>{" "}
              <span className="opacity-50 hover:opacity-100">GORM</span>{" "}
              <span className="opacity-50 hover:opacity-100">PostgreSQL</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
