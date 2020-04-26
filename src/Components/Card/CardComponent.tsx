import React from "react";

interface CardProps {
  title: string;
  content: string;
  categories: [string];
}

const CardComponent = (props: CardProps) => (
  <div className="max-w-sm w-full lg:w-1/3 lg:flex m-2 cursor-pointer">
    <div
      className="shadow transition-all ease-out duration-100 transform scale-100 hover:scale-105 
      bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 
      flex flex-col justify-between leading-normal"
    >
      <div className="text-gray-900 font-bold text-xl mb-2">{props.title}</div>
      <p className="text-gray-700 text-base">{props.content}</p>
      <div className="py-4">
        {props.categories.map((categorie, index: number) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {categorie}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export { CardComponent };
