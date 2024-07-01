import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../../../_lib/supabase";
import TextHeavy from "../../components/TextHeavy";
import ArticleHero from "../../components/ArticleHero";
import EmailInput from "../../components/EmailInput";

const ArticlePage = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        setArticle(data);
      }
    };
    fetchArticle();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <>
      <ArticleHero
        image={article.image_url}
        title={article.title}
        date={new Date(article.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        desc={article.description}
      />
      <TextHeavy sections={JSON.parse(article.content)} />
      <EmailInput alignment="left" />
    </>
  );
};

export default ArticlePage;
