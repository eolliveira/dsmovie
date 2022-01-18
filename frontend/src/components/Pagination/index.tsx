import './styles.css';
import ArrowRigth from 'assets/img/arrow-rigth.svg';
import ArrowLeft from 'assets/img/arrow-left.svg';
import { MoviePage } from 'types/movie';

type Props = {
    page: MoviePage;
    onChangePage: Function;
}

const Pagination = ({ page, onChangePage }: Props) => {
    return (
        <nav className='dsmovie-content'>
            <ul className="dsmovie-pagination-content">
                <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => { onChangePage(page.number - 1) }}>
                        <img src={ArrowLeft} alt="" />
                    </button>
                </li>
                <p className='dsmovie-page'>{`${page.number + 1} de ${page.totalPages}`}</p>
                <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => { onChangePage(page.number + 1) }}>
                        <img src={ArrowRigth} alt="" />
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;