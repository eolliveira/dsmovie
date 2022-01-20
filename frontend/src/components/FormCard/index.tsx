import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/Requests';
import './styles.css';

type Props = {
    movieId: string;
}

const FormCard = ({ movieId }: Props) => {

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

    const SaveScore = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const inpEmail = (event.target as any).email.value;
        const inpScore = (event.target as any).score.value;

        axios.put(`${BASE_URL}/scores`, {
            movieId: movieId,
            email: inpEmail,
            score: inpScore
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
                <form onSubmit={(event) => SaveScore(event)} className='container mt-2'>
                    <div className="form-group">
                        <label className='dsmovie-email' htmlFor="email">Informe seu email</label>
                        <input required type="email" className="form-control dsmovie-input-email" id="email" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="form-group mt-3">
                        <label className='dsmovie-text-score' htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control dsmovie-select-score" id='score'>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                    <div className='dsmovie-buttons'>
                        <button type="submit" className='dsmovie-btn-salvar'>Salvar</button>
                        <Link to='/' type='submit' className='dsmovie-btn-cancelar'>Cancelar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormCard;