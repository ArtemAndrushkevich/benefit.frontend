/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import like from '../../Images/like.png';
import onLike from '../../Images/onLike.png';

export default function Good({
  goodsName = '',
  img,
  name = ' ',
  priсe = ' ',
  volume = ' ',
}) {
  const [isLike, setIsLike] = React.useState(false);
  const onClickLike = () => {
    setIsLike(!isLike);
  };
  return (
    <div className="m-5 p-2.5 h-80 w-48 rounded-xl bg-gray-200 border-none flex flex-col justify-between">
      <div>

        <div className="flex justify-between p-1">
          <button className="rounded-xl bg-blue-400 border-none text-center w-20 h-6" type="submit">{goodsName}</button>

          <img width="25px" height="24px" className="cursor-pointer" onClick={onClickLike} src={isLike ? like : onLike} alt="like" />
        </div>
        <div><img width="80%" className="scale-1 ml-4" src={img} alt="banana" /></div>
        <div className="">
          <h2 className="">{priсe}</h2>
          <p>{name}</p>
          <span>{volume}</span>

        </div>

      </div>

      <div className="flex flex-col">
        <button className="border-none cursor-pointer m-2.5 h-10 rounded-xl bg-purple-200 relative inline-block shadow-inner bg-gradient-to-r from-violet-200 to-fuchsia-200 hover:shadow-lg shadow-indigo-500/50" type="button">Добавить</button>
      </div>
    </div>
  );
}
