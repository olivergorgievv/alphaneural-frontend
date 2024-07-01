import { useState, useEffect } from "react";
import supabase from "../../_lib/supabase";

function ArticleManager() {
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState({
    title: "",
    description: "",
    content: [],
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, []);

  async function fetchArticles() {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error("Error fetching articles:", error);
    else setArticles(data || []);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const articleToSave = {
      ...currentArticle,
      content: JSON.stringify(currentArticle.content),
    };

    if (isEditing) {
      const { error } = await supabase
        .from("articles")
        .update(articleToSave)
        .eq("id", articleToSave.id);
      if (error) console.error("Error updating article:", error);
    } else {
      const { error } = await supabase.from("articles").insert(articleToSave);
      if (error) console.error("Error creating article:", error);
    }

    setCurrentArticle({ title: "", description: "", content: [] });
    setIsEditing(false);
    fetchArticles();
  }

  async function handleDelete(id) {
    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (error) console.error("Error deleting article:", error);
    else fetchArticles();
  }

  function handleEdit(article) {
    setCurrentArticle({
      ...article,
      content: Array.isArray(article.content)
        ? article.content
        : JSON.parse(article.content || "[]"),
    });
    setIsEditing(true);
  }

  return (
    <div className="container max-w-screen-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">New Article</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          value={currentArticle.title}
          onChange={(e) =>
            setCurrentArticle({ ...currentArticle, title: e.target.value })
          }
          placeholder="Article Title"
          className="border mb-3 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 ocus:border-blue-500"
        />
        <input
          type="text"
          value={currentArticle.description}
          onChange={(e) =>
            setCurrentArticle({
              ...currentArticle,
              description: e.target.value,
            })
          }
          placeholder="Article Description"
          className="border mb-3 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 ocus:border-blue-500"
        />
        <ContentEditor
          content={currentArticle.content}
          onChange={(newContent) =>
            setCurrentArticle({ ...currentArticle, content: newContent })
          }
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded"
        >
          {isEditing ? "Update Article" : "Save Article"}
        </button>
      </form>
      <ul className="space-y-4">
        <p className="text-xl font-bold">All Articles</p>
        {articles.map((article) => (
          <li
            key={article.id}
            className="border border-primary/40 p-4 rounded-xl flex justify-between items-center"
          >
            <span>{article.title}</span>
            <div>
              <button
                onClick={() => handleEdit(article)}
                className="bg-primary text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(article.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContentEditor({ content, onChange }) {
  function handleChange(index, field, value) {
    const newContent = [...content];
    newContent[index] = { ...newContent[index], [field]: value };
    onChange(newContent);
  }

  function addSection() {
    onChange([...content, { title: "", paragraph: "", space: "mb-16" }]);
  }

  function removeSection(index) {
    const newContent = content.filter((_, i) => i !== index);
    onChange(newContent);
  }

  return (
    <div className="space-y-4 mb-4">
      {content.map((section, index) => (
        <div key={index} className=" border border-primary/50 p-4 rounded-xl">
          <input
            type="text"
            value={section.title || ""}
            onChange={(e) => handleChange(index, "title", e.target.value)}
            placeholder="Section Title"
            className="border mb-3 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 ocus:border-blue-500"
          />
          <textarea
            value={section.paragraph || ""}
            onChange={(e) => handleChange(index, "paragraph", e.target.value)}
            placeholder="Section Paragraph"
            className="border mb-3 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 ocus:border-blue-500"
            rows="4"
          />

          <div className="flex justify-end mt-2">
            <button
              onClick={() => removeSection(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove Section
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={addSection}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Section
        </button>
      </div>
    </div>
  );
}

export default ArticleManager;
