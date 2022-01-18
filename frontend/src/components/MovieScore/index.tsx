import MovieStars from 'components/MovieStars';
import './styles.css';

type Props = {
    score: number,
    count: number
}

const MovieScore = ({ score, count }: Props) => {
    return (
        <div className='teste'>
            <div className='dsmovie-score-content'>
                <p className='dsmovie-score'>{score > 0 ? score.toFixed(1) : ' - '}</p>
                <MovieStars />
                <p className='dsmovie-avaliacoes'>{`${count} avaliações`}</p>
            </div>
        </div>

    );
}

export default MovieScore;