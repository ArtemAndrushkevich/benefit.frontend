/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-as-default */

import './App.css';
import Card from './components/card';
import Good from './components/good';
import Sosedi from './Images/sosedi.png';
import Evroopt from './Images/evroopt.png';
import Green from './Images/green.png';
import Emall from './Images/emall.png';
import Belmarket from './Images/belmarket.png';
import Kopeechka from './Images/kopeechka.png';
import Santa from './Images/santa.png';
import Gippo from './Images/gippo.png';
import banans from './Images/banans.png';
import Sidebar from './components/sidebar';
import Gallery from './components/gallery';

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
    <div className="flex bg-gray-500 ">
      <Sidebar />
      <div className="flex flex-col min-h-max ">
        <header>
          <div className="bg-white bg-cover ">
            <div className="m-0">

              <div className="flex items-center justify-center bg-gray-500  text-3xl h-14 text-pink-300  ">
                {/* <img src={Logo} width="80" height="80" alt="@" /> */}
                <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Benefit</h1>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div>
            <Gallery img={Evroopt} />
          </div>

          <div className="bg-gray-200 h-40 rounded-3xl mx-10 flex flex-wrap">

            <div className="flex flex-auto justify-between m-4 ">
              <Card title="Евроопт" img={Evroopt} />
              <Card title="Грин" img={Green} />
              <Card title="Емолл" img={Emall} />
              <Card title="Соседи" img={Sosedi} />
              <Card title="Санта" img={Santa} />
              <Card title="Копеечка" img={Kopeechka} />
              <Card title="Белмаркет" img={Belmarket} />
              <Card title="Гиппо" img={Gippo} />
            </div>

            {/* <h1 className="text-3xl font-bold underline">Товары</h1> */}
            <div className="flex  flex-wrap">

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
