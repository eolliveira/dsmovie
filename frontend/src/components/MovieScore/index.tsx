import MovieStars from 'components/MovieStars';
import './styles.css';

const assessment = {
    score: 3.45,
    count: 13
}

const MovieScore = () => {
    return (
        <div className='teste'>
            <div className='dsmovie-score-content'>
                <p className='dsmovie-score'>{assessment.score > 0 ? assessment.score.toFixed(1) : ' - '}</p>
                <MovieStars />
                <p className='dsmovie-avaliacoes'>{`${assessment.count} avaliações`}</p>
            </div>
        </div>

    );
}

export default MovieScore;