import MovieScore from 'components/MovieScore';
import { Link } from 'react-router-dom';
import './styles.css'

const MovieCard = () => {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div className="card dsmovie-card mt-4 mb-5">
            <img className="card-img-top rounded-top" src={movie.image} alt="" />
            <p className="dsmovie-card-title mt-3">{movie.title}</p>
            <MovieScore />
            <Link to={`/form/${movie.id}`} className='dsmovie-btn-avaliar'>Avaliar</Link>
        </div>
    );
}

export default MovieCard;