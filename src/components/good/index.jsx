/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import like from '../../Images/like.png';
import onLike from '../../Images/onLike.png';
import './index.css';

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
    <div className="products">
      <div>

        <div className="prodHeard">
          <button className="buttonShop" type="submit">{goodsName}</button>

          <img width="25px" height="24px" className="favorite" onClick={onClickLike} src={isLike ? like : onLike} alt="like" />
        </div>
        <div><img width="80%" className="pictures" src={img} alt="banana" /></div>
        <div className="prodText">
          <h2 className="price">{priсe}</h2>
          <p>{name}</p>
          <span>{volume}</span>

        </div>

      </div>

      <div className="buttonAdd">
        <button className="buttonAdd1" type="button">Добавить</button>
      </div>
    </div>
  );
}
