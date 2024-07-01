/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import supabase from "../../_lib/supabase";

const BlogSection = () => {
  const [articles, setArticles] = useState([]);
  const location = useLocation();
  console.log(articles);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("date", { ascending: false })
        .limit(3);

      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        setArticles(data);
      }
    };

    fetchArticles();
  }, []);

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
          {articles.map((article) => (
            <Article
              key={article.id}
              id={article.id}
              imgSrc={article.image_url}
              imgAlt={article.title}
              title={article.title}
              description={article.description}
              date={new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              readTime={`${article.read_time} min read`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Article = ({
  id,
  imgSrc,
  imgAlt,
  title,
  description,
  date,
  readTime,
}) => {
  return (
    <article className="p-4 rounded-2xl border border-primary/15 shadow-md flex flex-col h-full bg-[#0E061D]">
      <Link to={`/blog/${id}`} className="mb-5">
        <div className="relative w-full aspect-w-16 aspect-h-9">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            src={imgSrc}
            alt={imgAlt}
          />
        </div>
      </Link>
      <div className="pb-4 flex justify-between text-sm font-normal text-description-gray/70 mt-auto">
        <p>{date}</p>
        <p>{readTime}</p>
      </div>
      <div className="flex flex-col flex-grow">
        <h2 className="my-2 text-[19px] font-bold tracking-tight">
          <a href={``}>{title}</a>
        </h2>
        <p className="mb-4 text-[15px] font-normal text-description-gray">
          {description}
        </p>
      </div>
    </article>
  );
};

export default BlogSection;
