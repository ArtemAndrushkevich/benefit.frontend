export default function Card({ title = '', img }) {
  return (
    <div className="h-32 w-32 flex rounded-3xl bg-white border-none justify-center flex-col items-center cursor-pointer">
      <span className="text-xl text-cetnter ">{title}</span>
      <img src={img} alt="картинка" className="object-contain px-1 w-32 h-20" />
    </div>
  );
}
