import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/Requests';
import './styles.css';

type Props = {
    movieId: string;
}

const FormCard = ( { movieId} : Props ) => {

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                console.log(`Não foi possivel obter obter dados do filme: ${error}`);
            });
    }, [movieId]);

    const scoreUpdate = {
        movieId: movie?.id,
        email: '',
        score: ''
    }

    const SaveScore = () => {
        axios.put(`${BASE_URL}/scores`, scoreUpdate)
        .then((response) => {
            console.log(`Filme atualizado com sucesso: ${response.data}`);
        })
        .catch((error) => {
            console.log(`Não foi possivel obter obter dados do filme: ${error}`);
        });
    }

    return (
        <div className='dsmovie-container-form'>
            <div className="card dsmovie-form-card mt-4 mb-5">
                <img className="card-img-top rounded-top" src={movie?.image} alt="" />
                <p className="dsmovie-card-text mt-3">{movie?.title}</p>
                <form onSubmit={(event) => { event.preventDefault(); SaveScore() }} className='container mt-2'>
                    <div className="form-group">
                        <label className='dsmovie-email' htmlFor="dsmovie-form-email">Informe seu email</label>
                        <input type="email" className="form-control dsmovie-input-email" id="dsmovie-form-email" aria-describedby="emailHelp" onChange={(event) =>{ scoreUpdate.email = event.target.value }}></input>
                    </div>
                    <div className="form-group mt-3">
                        <label className='dsmovie-text-score' htmlFor="dsmovie-form-score">Informe sua avaliação</label>
                        <select className="form-control dsmovie-select-score" id='dsmovie-form-score' onChange={(event) => { scoreUpdate.score = event.target.value }}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className='dsmovie-buttons'>
                        <button type="submit" className='dsmovie-btn-salvar'>Salvar</button>
                        <button type='submit' className='dsmovie-btn-cancelar'>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormCard;