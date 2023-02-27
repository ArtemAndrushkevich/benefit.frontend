/* eslint-disable import/no-named-as-default */
import './App.css';
import Card from './components/card';
import Good from './components/good';
import Logo from './Images/logo.png';
import Cart from './Images/cart.png';
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

function App() {
  return (

    <header>
      <div className="header">
        <div className="conteiner">

          <div className="header-line">
            <img src={Logo} width="50" height="50" alt="@" className="logo" />
            <div className="nav">
              <a className="nav-item" href="@">Главная</a>
              <a className="nav-item" href="@">О нас</a>
              <a className="nav-item" href="@">Новости</a>
              <a className="nav-item" href="@">Листовки</a>
            </div>
            <div className="search">
              <form>
                <input type="text" name="text" className="search" placeholder="Поиск" />
              </form>
            </div>
            <div className="cart">
              <a href="@">
                <img src={Cart} width="30" height="30" alt="cart" />
              </a>
            </div>

          </div>
          <div className="header-down">
            <div className="header-title">
              <h1 className="title"> Benefit - поиск выгодных предложений в магазинах</h1>
            </div>
            <div className="shops">
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
            <h1 className="title2"> Товары</h1>
            <div className="good">
              <Good img={banans} goodsName="Виталюр" name="Бананы" priсe="2,99" volume="0,76" />
              <Good img={banans} goodsName="Виталюр" name="Бананы" priсe="2,99" volume="0,76" />
              <Good img={banans} goodsName="Виталюр" name="Бананы" priсe="2,99" volume="0,76" />
              <Good img={banans} goodsName="Виталюр" name="Бананы" priсe="2,99" volume="0,76" />
              <Good img={banans} goodsName="Виталюр" name="Бананы" priсe="2,99" volume="0,76" />
              <Good img={banans} goodsName="Виталюр" name="Бананы" priсe="2,99" volume="0,76" />
              <Good img={banans} goodsName="Виталюр" name="Бананы" priсe="2,99" volume="0,76" />
              <Good img={banans} goodsName="Виталюр" name="Бананы" priсe="2,99" volume="0,76" />
              <Good img={banans} goodsName="Виталюр" name="Бананы" priсe="2,99" volume="0,76" />
              <Good img={banans} goodsName="Виталюр" name="Бананы" priсe="2,99" volume="0,76" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
