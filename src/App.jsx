/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-as-default */
import './App.css';
import Card from './components/card';
import Good from './components/good';
import Logo from './Images/logo.png';
import Sosedi from './Images/sosedi.png';
import Evroopt from './Images/evroopt.png';
import Green from './Images/green.png';
import Emall from './Images/emall.png';
import Vitalur from './Images/vitalur.png';
import Belmarket from './Images/belmarket.png';
import Kopeechka from './Images/kopeechka.png';
import Santa from './Images/santa.png';
import Gippo from './Images/gippo.png';
import banans from './Images/banans.png';
import Sidebar from './components/sidebar';

const goods = [
  {
    name: 'Виталюр',
    product: 'Бананы',
    priсe: 2.79,
    volume: 0.76,
  },
  {
    name: 'Соседи',
    product: 'Бананы',
    priсe: 2.79,
    volume: 0.76,
  },
  {
    name: 'Виталюр',
    product: 'Бананы',
    priсe: 2.79,
    volume: 0.76,
  },
  {
    name: 'Виталюр',
    product: 'Бананы',
    priсe: 2.79,
    volume: 0.76,
  },
  {
    name: 'Виталюр',
    product: 'Бананы',
    priсe: 2.79,
    volume: 0.76,
  },
  {
    name: 'Виталюр',
    product: 'Бананы',
    priсe: 2.79,
    volume: 0.76,
  },
  {
    name: 'Виталюр',
    product: 'Бананы',
    priсe: 2.79,
    volume: 0.76,
  },
  {
    name: 'Виталюр',
    product: 'Бананы',
    priсe: 2.79,
    volume: 0.76,
  },
  {
    name: 'Виталюр',
    product: 'Бананы',
    priсe: 2.79,
    volume: 0.76,
  },
  {
    name: 'Виталюр',
    product: 'Бананы',
    priсe: 2.79,
    volume: 0.76,
  },
  {
    name: 'Виталюр',
    product: 'Бананы',
    priсe: 2.79,
    volume: 0.76,
  },
  {
    name: 'Виталюр',
    product: 'Бананы',
    priсe: 2.79,
    volume: 0.76,
  },
];

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col min-h-max">
        <header>
          <div className="bg-white bg-cover">
            <div className="m-0">
              <div className="flex items-center justify-center bg-green-300  h-14 rounded-b text-pink-300">
                <img src={Logo} width="80" height="80" alt="@" />
                <h1>Benefit</h1>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="bg-green-300 h-72 rounded-3xl m-10">
            <h1 className="font-serif text-center "> Benefit - поиск выгодных предложений в магазинах</h1>
            <div className="flex justify-between m-5">
              <Card title="Евроопт" img={Evroopt} />
              <Card title="Грин" img={Green} />
              <Card title="Виталюр" img={Vitalur} />
              <Card title="Емолл" img={Emall} />
              <Card title="Соседи" img={Sosedi} />
              <Card title="Санта" img={Santa} />
              <Card title="Копеечка" img={Kopeechka} />
              <Card title="Белмаркет" img={Belmarket} />
              <Card title="Гиппо" img={Gippo} />
            </div>

            <h1 className="text-3xl font-bold underline">Товары</h1>
            <div className="flex bg-white flex-wrap">

              {goods.map((product) => (
                <Good
                  img={banans}
                  goodsName={product.name}
                  name={product.product}
                  priсe={product.priсe}
                  volume={product.volume}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
