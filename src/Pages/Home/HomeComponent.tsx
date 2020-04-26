import React, { useState, useEffect } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { CardComponent } from "../../Components/Card/CardComponent";
import { mock } from "./mockHomeList";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { HomeService } from "./HomeService";
const Home = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [contents, setContents] = useState(mock);
  const [contentsSelected, setContensSelected] = useState<any>([]);

  useEffect(() => {
    HomeService.getCategories(setCategories);
    HomeService.getContent(setContents);
    setContensSelected(contents);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterCard = (categorieToSearch: string) => {
    const newArticlesSelected = contents.filter(content =>
      content.categories.includes(categorieToSearch)
    );
    setContensSelected(newArticlesSelected);
  };

  const resetCards = () => {
    setContensSelected(contents);
  };

  return (
    <Layout marginTop={true} overflow={true}>
      <div className="w-full">
        <button
          className="text-gray-800 font-semibold py-2 px-4 ml-8"
          onClick={() => resetCards()}
        >
          No Filter
        </button>
        {categories?.map((categorie, index) => (
          <button
            key={index}
            className="text-gray-800 font-semibold py-2 px-4 my-2"
            onClick={() => filterCard(categorie)}
          >
            {categorie}
          </button>
        ))}
        <hr className="my-2 mx-8" />
      </div>
      <TransitionGroup className="flex flex-wrap w-full justify-center items-center">
        {contentsSelected.map((content: any, index: any) => (
          <CSSTransition key={index} timeout={200} classNames="card">
            <CardComponent key={index} {...content} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Layout>
  );
};

export { Home };
