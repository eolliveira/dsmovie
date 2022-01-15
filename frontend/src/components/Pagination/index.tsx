import './styles.css';
import ArrowRigth from 'assets/img/arrow-rigth.svg';
import ArrowLeft from 'assets/img/arrow-left.svg';

const Pagination = () => {
    return (
        <div className='dsmovie-content'>
            <div className="pagination dsmovie-pagination-content">
                <button className="dsmovie-previous" >
                    <img src={ArrowLeft} alt="previous" />
                </button>
                <p className='dsmovie-page'>1 de 3</p>
                <button className="dsmovie-next">
                    <img src={ArrowRigth} alt="next" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;