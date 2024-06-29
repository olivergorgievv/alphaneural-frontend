import { Link, useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */

const BlogSection = () => {
  const location = useLocation();

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6 ">
        <div className=" text-left mb-8 lg:mb-10">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Our Blog
          </h2>
          <div className="flex justify-between items-center">
            <p className="font-normal text-description-gray sm:text-xl">
              Explore us and be up to date!
            </p>
            {location.pathname === "/" && (
              <Link to={"blog"}>
                <button className="items-center justify-center px-8 py-1 gap-4 rounded-full border-2 border-primary/50 md:px-10 md:py-2 text-description-gray md:flex">
                  See all
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Article
            imgSrc="https://alphaneural.io/assets/img/AI-future.webp"
            imgAlt="office laptop working"
            title="The Future of AI in Decentralized Markets: Opportunities and Challenges"
            description="The convergence of Artificial Intelligence (AI) and decentralized technology is poised to redefine traditional market structures and operational protocols across industries."
            date="Aug 15, 2021"
            readTime="16 min read"
          />
          <Article
            imgSrc="https://alphaneural.io/assets/img/AI-solutions.webp"
            imgAlt="Google HQ"
            title="Scaling AI Solutions on Blockchain: Solana Role in Next-Gen Applications"
            description="The integration of Artificial Intelligence (AI) and blockchain technology is spearheading remarkable innovations across various sectors."
            date="Aug 15, 2021"
            readTime="16 min read"
          />
          <Article
            imgSrc="https://alphaneural.io/assets/img/AI-future.webp"
            imgAlt="office laptops"
            title="Web3 and AI: Redefining User Experience in Digital Platforms"
            description="The integration of Web3 technologies with artificial intelligence (AI) is poised to dramatically transform the user experience across digital platforms."
            date="Aug 15, 2021"
            readTime="16 min read"
          />
        </div>
      </div>
    </section>
  );
};
const Article = ({ imgSrc, imgAlt, title, description, date, readTime }) => {
  return (
    <article className="p-4 rounded-2xl border border-primary/15 shadow-md flex flex-col h-full bg-[#0E061D]">
      <a href="#" className="mb-5">
        <img className="rounded-xl w-full" src={imgSrc} alt={imgAlt} />
      </a>
      <div className="pb-4 flex justify-between text-sm font-normal text-description-gray/70 mt-auto">
        <p>{date}</p>
        <p>{readTime}</p>
      </div>
      <div className="flex flex-col flex-grow">
        <h2 className="my-2 text-[19px] font-bold tracking-tight">
          <a href="#">{title}</a>
        </h2>
        <p className="mb-4 text-[15px] font-normal text-description-gray">
          {description}
        </p>
      </div>
    </article>
  );
};

export default BlogSection;
