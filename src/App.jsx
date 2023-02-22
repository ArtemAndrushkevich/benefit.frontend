import './App.css';
import Card from './components/card';
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
import like from './Images/like.png';
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
            {/* <div className="btn">
                    <a className="button" href="@">Скачать</a>
                </div>  */}
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
            <div className="products">
              <div className="prodHeard">
                <button className="buttonShop" type="submit">Виталюр</button>
                <img src={like} alt="like" />
              </div>
              <div><img width="80%" className="pictures" src={banans} alt="banana" /></div>
              <div className="prodText">
                <h2 className="price">2,99</h2>
                <p>Бананы</p>
                <span>0,76 л</span>
              </div>
              <div className="buttonAdd">
                <button className="buttonAdd1" type="button">Добавить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
