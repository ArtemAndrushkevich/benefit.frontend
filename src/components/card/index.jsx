export default function Card({ img }) {
  return (

    <button type="button" className="h-32 w-32 flex rounded-3xl  border-none justify-center flex-col items-center cursor-pointer bg-gradient-to-r from-white to-white hover:from-gray-300 hover:to-gray-300">

      <img src={img} alt="картинка" className="object-contain px-1 w-32 h-20" />
    </button>

  );
}
