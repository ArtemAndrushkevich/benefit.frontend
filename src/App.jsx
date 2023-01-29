import './App.css';
import Card from './components/card';
import Categories from './components/categories';
import logo from './Images/logo.png';
import cart from './Images/cart.png';
import Sosedi from './Images/sosedi.png';
import evroopt from './Images/evroopt.png';
import green from './Images/green.png';
import emall from './Images/emall.png';
import vitalur from './Images/vitalur.png';

function App() {
  return (
    <div>
      <header>

        <div className="header">
          <div className="conteiner">
            <div className="header-line">
              <div className="header-logo">
                <img src={logo} width="50" height="50" alt="@" className="logo" />
              </div>
              <div className="nav">
                <a className="nav-item" href="@">Главная</a>
                <a className="nav-item" href="@">О нас</a>
                <a className="nav-item" href="@">Новости</a>
                <a className="nav-item" href="@">Листовки</a>
              </div>
              <div className="search">
                <form>
                  <input type="text" name="text" className="search" placeholder="Поиск" />
                  {/* <input type="submit" name="submit" class="submit" value="Search">  */}
                </form>
              </div>
              <div className="cart">
                <a href="@">
                  <img src={cart} width="30" height="30" alt="cart" />

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
                <Card title="Евроопт" img={evroopt} />

                <Card title="Грин" img={green} />
                <Card title="Виталюр" img={vitalur} />
                <Card title="Емолл" img={emall} />
                <Card title="Соседи" img={Sosedi} />

              </div>
              <h1 className="title2"> Категории</h1>
              <div className="categories">

                <Categories title="Автотовары" />
                <Categories title="Сад и огород" />
                <Categories title="Промтовары" />
                <Categories title="Вода, напитки, соки, кофе и чай" />
                <Categories title="Алкоголь" />
                <Categories title="Товары для детей и мам" />
                <Categories title="Охлажденные продукты" />
                <Categories title="Мясо, рыба, птица, колбасы" />
                <Categories title="Овощи и фрукты" />
                <Categories title="Шоколад и сладости" />
                <Categories title="Бакалея" />
                <Categories title="Молочные продукты, яйца" />
                <Categories title="Здоровое и спортивное питание" />
                <Categories title="Мебель" />
                <Categories title="Хлебобулочные изделия" />

              </div>

            </div>
          </div>
        </div>
      </header>
    </div>

  );
}

export default App;
