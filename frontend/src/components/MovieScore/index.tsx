import MovieStars from 'components/MovieStars';
import './styles.css'

const MovieScore = () => {
    return (
        <div className='teste'>
            <div className='dsmovie-score-content'>
                <p className='dsmovie-score'>3.8</p>
                <MovieStars />
                <p className='dsmovie-avaliacoes'>12 avaliações</p>
            </div>
        </div>

    );
}

export default MovieScore;