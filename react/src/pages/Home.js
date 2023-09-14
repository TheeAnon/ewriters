import React from "react";
import Header from "../components/Header";
import Job from "../components/Job";
import chatImg from "../images/chat.gif";

function Home() {
  return (
    <div>
      <Header />
      <div className="hero">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">
              Best Freelancing Marketplace.
            </h1>
            <p className="py-6 lg:text-lg">
              Are you a talented freelancer looking for exciting opportunities
              to showcase your skills? Or are you a client seeking top-notch
              freelancers to help you achieve your projects with utmost
              excellence? Look no further! At eWriters, we pride ourselves on
              being a leading freelancing platform that brings together
              exceptional talents and clients in search of their expertise.
            </p>
            <a href="/login" className="btn btn-ghost border-neutral-900 mr-3">
              Sign in
            </a>
            <a href="/signup" className="btn">
              Get started
            </a>
          </div>
        </div>
      </div>

      <div className="p-5 text-center bg-base-200">
        <h1 className="text-2xl font-bold">
          Empowering Clients for Seamless Project Success: Your Vision, Our
          Mission
        </h1>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:grid lg:grid-cols-2">
          <div className="text-center">
            <h1 className="text-2xl font-bold">A Diverse Talent Pool</h1>
            <p className="p-6 text-lg">
              Gain access to a global community of proficient freelancers, each
              armed with a unique skill set and a passion for excellence. Browse
              through a diverse talent pool and connect with the professionals
              who resonate with your project objectives.
            </p>
            <a
              href="/signup"
              className="text-md text-gray-600 hover:underline hover:text-blue-600"
            >
              Find a Freelancer
            </a>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Seamless Project Management</h1>
            <p className="p-6 text-lg">
              Our user-friendly platform ensures a smooth and efficient project
              management process. Collaborate with your chosen freelancers,
              track progress, and communicate effortlessly to ensure your
              project stays on track.
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Personalized Job Posting</h1>
            <div className="text-center">
              <p className="p-6 text-lg">
                Share the specifics of your project through personalized job
                postings. Describe your requirements, set deadlines, and outline
                your expectations to attract the best-matched talent.
              </p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Exceptional Support</h1>
            <p className="p-6 text-lg">
              Our dedicated support team is always ready to assist you on your
              journey. From answering queries to resolving issues, we are here
              to provide you with an exceptional support experience.
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 text-center">
        <h1 className="text-2xl font-bold">
          Empower Your Freelance Career: Unleash Your True Potential
        </h1>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:grid lg:grid-cols-2">
          <div className="text-center">
            <h1 className="text-2xl font-bold">
              Build Your Professional Profile
            </h1>
            <p className="p-6 text-lg">
              Showcase your skills, experience, and expertise through a
              captivating and comprehensive profile. Highlight your portfolio of
              past projects and let your work speak for itself. At eWriters, we
              understand that a strong and appealing profile is the key to
              attracting top-notch clients and projects that align with your
              passions.
            </p>
            <a
              href="/signup"
              className="text-md text-gray-600 hover:underline hover:text-blue-600"
            >
              Create a freelancer profile right now
            </a>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Explore Exciting Projects</h1>
            <p className="p-6 text-lg">
              Browse a diverse range of projects posted by clients from around
              the globe. From creative writing assignments to web development
              gigs and everything in between, eWriters offers a plethora of
              opportunities for freelancers in various domains. Filter projects
              based on your preferences, skills, and expertise, and find the
              perfect match that resonates with your talents.
            </p>
            <a href="/signup" className="btn">
              Browse jobs
            </a>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">
              Direct Communication with Clients
            </h1>
            <div className="text-center">
              <img className="w-full" src={chatImg} alt="chat" />
              <p className="p-6 text-lg">
                Communication is at the heart of successful collaborations. At
                eWriters, we facilitate direct communication channels between
                freelancers and clients with our inbuilt messaging system. Enjoy
                seamless interactions to discuss project details, clarify
                requirements, and ensure a smooth workflow. Transparent
                communication nurtures strong working relationships and fosters
                long-term partnerships.
              </p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Get Discovered by Clients</h1>
            <p className="p-6 text-lg">
              Stand out from the crowd and increase your visibility with
              eWriters' innovative algorithms. Our platform recommends top
              freelancers to clients based on their project requirements,
              enhancing your chances of getting noticed by potential clients.
              Leverage our cutting-edge technology to let your skills shine and
              attract exciting opportunities.
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Flexible Work Arrangements</h1>
            <p className="p-6 text-lg">
              As a freelancer, we understand the value of flexibility in
              managing your work-life balance. eWriters allows you to choose the
              projects that fit your schedule and preferences. Whether you
              prefer short-term gigs or long-term collaborations, we have a
              diverse array of projects that cater to freelancers with different
              working preferences.
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">
              Secure Payments and Hassle-Free Transactions
            </h1>
            <p className="p-6 text-lg">
              Rest assured that your hard work will be rewarded. eWriters
              ensures secure and timely payments for your completed projects.
              Say goodbye to payment delays and uncertainties, as we prioritize
              seamless transactions to keep your focus on delivering exceptional
              results.
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 bg-base-200">
        <h1 className="text-5xl font-bold">Why us?</h1>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col md:grid md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h1 className="text-2xl font-bold">1. Diverse Talent Pool</h1>
            <p className="p-6 text-lg">
              eWriters offers a vast and diverse talent pool comprising skilled
              professionals from various fields. From seasoned writers,
              designers, developers, marketers, virtual assistants, to experts
              in finance, legal, and more, our platform has the talent you need
              for any project.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">2. Seamless Connectivity</h1>
            <p className="p-6 text-lg">
              Clients and freelancers can connect effortlessly through our
              user-friendly platform. With advanced search filters and
              personalized recommendations, finding the perfect match for your
              project is quick and efficient.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">3. Verified Profiles</h1>
            <p className="p-6 text-lg">
              Your peace of mind is essential to us. At eWriters, we thoroughly
              vet every freelancer's profile to ensure they possess the skills
              they claim. Similarly, clients' identities are verified to foster
              trust and authenticity on the platform.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">4. Secure Payment System</h1>
            <p className="p-6 text-lg">
              We understand the significance of secure transactions. Our robust
              payment system ensures hassle-free payments and protects both
              clients and freelancers from potential fraud.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">5. Transparent Communication</h1>
            <p className="p-6 text-lg">
              Effective communication is key to successful projects. eWriters
              provides seamless messaging and video conferencing tools, enabling
              clear and direct communication between clients and freelancers.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold"> 6. Feedback and Ratings</h1>
            <p className="p-6 text-lg">
              eWriters encourages an environment of growth and improvement.
              Clients can rate freelancers based on their experiences, and vice
              versa. This feedback system fosters a community of accountability
              and mutual respect.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              7. Time Tracking and Milestones
            </h1>
            <p className="p-6 text-lg">
              For hourly projects, eWriters offers time tracking features that
              allow clients to monitor the progress of their projects
              effectively. For fixed-rate projects, milestones can be set to
              ensure timely deliverables.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">8. Supportive Community</h1>
            <p className="p-6 text-lg">
              Our platform is not just about transactions; it's about building
              relationships. We foster a supportive community where freelancers
              can seek guidance and clients can share their visions, thus
              bringing the best out of each project.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">9. Cost-Effective Solutions</h1>
            <p className="p-6 text-lg">
              We strive to maintain competitive pricing for both clients and
              freelancers. With the elimination of unnecessary overhead costs,
              eWriters provides cost-effective solutions for clients while
              ensuring fair compensation for freelancers.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">10. Continuous Innovation</h1>
            <p className="p-6 text-lg">
              At eWriters, we believe in staying ahead of the curve. We
              continually enhance our platform to adapt to changing industry
              needs, providing clients and freelancers with the latest tools and
              features for a superior experience.
            </p>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="hero-content flex flex-col">
          <h1 className="text-2xl font-bold">Join eWriters Today</h1>
          <p className="p-6 text-lg">
            Whether you're a client seeking exceptional freelancers or a
            talented individual searching for exciting projects, eWriters
            invites you to join our thriving freelancing community. Create an
            account, build your profile, and embark on a journey of endless
            possibilities. Experience the seamless collaboration, secure
            transactions, and boundless opportunities that await you at
            eWriters.
          </p>
          <p className="p-6 pt-0 text-lg">
            With us, every project becomes a remarkable success story. Join us
            today, and let's create something extraordinary together!
          </p>
          <a href="/signup" className="btn">
            Create an account
          </a>
        </div>
      </div>

      <Job />
    </div>
  );
}

export default Home;
