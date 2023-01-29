// eslint-disable-next-line react/prop-types, no-use-before-define
export default function Categories({ title = '' }) {
  return (
    <div className="categories">
      <span className="categories-title">{title}</span>

    </div>
  );
}
