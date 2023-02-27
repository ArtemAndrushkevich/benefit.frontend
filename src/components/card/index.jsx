export default function Card({ title = '', img }) {
  return (
    <div className="shop">
      <span className="card-title">{title}</span>
      <img src={img} alt="картинка" className="card-img" />
    </div>
  );
}
