// eslint-disable-next-line react/prop-types
export default function Card({ title = '', img }) {
  return (
    <div className="shop1">
      <span className="card-title">{title}</span>
      <img src={img} alt="картинка" className="card-img" />
    </div>
  );
}
