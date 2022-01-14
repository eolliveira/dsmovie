import './styles.css';
import  ImgGitHub from 'assets/img/github.svg';

const Navbar = () => {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-navbar-content'>
                    <a className='dsmovie-navbar-h1' href='#'>DSMovie</a>
                    <a href='https://github.com/devsuperior/sds-dsmovie/tree/main/episodio1' className='dsmovie-navbar-git'>
                        <img src={ImgGitHub} alt="teste" />
                        <p>/devesuperior</p>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;