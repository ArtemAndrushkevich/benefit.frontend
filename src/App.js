import './App.css';
function App() {
  return (
    <div>
      <header>
        
      <div className="header">
        <div className="conteiner"> 
        <div className="header-line">
                <div className="header-logo">
                <img src="logo.png" width="50" height="50" alt="@" className='logo'/>
                </div>    
                <div className="nav">
                    <a className="nav-item" href="@">Главная</a>
                    <a className="nav-item" href="@">О нас</a>
                    <a className="nav-item" href="@">Новости</a>
                    <a className="nav-item" href="@">Листовки</a>
                </div>
                <div className="search">
                    <form> 
                        <input type="text" name="text" class="search" placeholder = "Поиск" />
                       {/* <input type="submit" name="submit" class="submit" value="Search">  */}
                      </form>
                </div>
                <div className="cart">
                    <a href="@">
                        <img src="cart.png" width="30" height="30" alt="cart" />
                        
                    </a>
                   
                </div>
                {/* <div className="btn"> 
                    <a className="button" href="@">Скачать</a>
                </div>  */}
        </div>
        <div className="header-down">
            <div className="header-title">

            </div>
        </div>
    </div>
</div>   
      </header>
    </div>
  );
}

export default App;
