import React from "react";
interface CardProps {
  url: string;
  img: string;
  title: string;
}
const Cards: React.FC<CardProps> = ({ url, img, title }) => {
  return (
    <>
      <a
        href={url}
        className="group relative max-h-[150px] max-w-[150px] cursor-pointer rounded-lg bg-white"
      >
        <img
          className="relative mx-auto aspect-square overflow-hidden object-contain"
          src={img}
          title={title}
        />
        <p
          title={title}
          className="absolute inset-x-0 bottom-0 max-h-[50%] overflow-hidden text-ellipsis rounded-md bg-black/70 p-2 text-sm leading-4 tracking-normal text-white opacity-0 duration-300 group-hover:opacity-100"
        >
          {title}
        </p>
      </a>
    </>
  );
};
export default Cards;
