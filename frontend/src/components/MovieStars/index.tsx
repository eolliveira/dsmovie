import './styles.css'
import EmptyStar from 'assets/img/empty-star.svg'
import HalfStar from 'assets/img/half-star.svg'
import FullStar from 'assets/img/full-star.svg'

const MovieStars = () => {
    return (
        <div className='dsmovie-stars-content'>
            <img src={FullStar} alt="" />
            <img src={FullStar} alt="" />
            <img src={FullStar} alt="" />
            <img src={HalfStar} alt="" />
            <img src={EmptyStar} alt="" />
        </div>
    );
}

export default MovieStars;