import React from "react";

const ArticlesSection = () => {
  const articles = [
    {
      path: "/Image 171.png",
      title: "Tus cursos",
    },
    {
      path: "/Image 153.png",
      title: "Personaliza tus sitios",
    },
    {
      path: "/Image 155.png",
      title: "Crea un campaña",
    },
    {
      path: "/muneca.png",
      title: "Conoce a tus clientes",
    },
  ];

  return (
    <section className="content__section--articles">
      {articles.map((item) => (
        <article key={item.path}>
          <div>
            <img src={item.path} alt={item.path} />
          </div>
          <span>{item.title}</span>
        </article>
      ))}
    </section>
  );
};

export default ArticlesSection;
