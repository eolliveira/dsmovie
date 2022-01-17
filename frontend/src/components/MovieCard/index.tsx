import MovieScore from 'components/MovieScore';
import { Link } from 'react-router-dom';
import './styles.css'
import { Movie } from "types/movie";

type Props = { 
    movie : Movie,
}

const MovieCard = ( { movie } : Props ) => {
    return (
        <div className="card dsmovie-card mt-4 mb-5">
            <img className="card-img-top rounded-top" src={movie.image} alt="" />
            <p className="dsmovie-card-title mt-3">{movie.title}</p>
            <MovieScore count={movie.count} score={movie.score} />
            <Link to={`/form/${movie.id}`} className='dsmovie-btn-avaliar'>Avaliar</Link>
        </div>
    );
}

export default MovieCard;