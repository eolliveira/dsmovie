import { Link } from 'react-router-dom';
import './styles.css'

const Form = () => {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div className='dsmovie-container-form'>
            <div className="card mt-4 mb-5">
                <img className="card-img-top rounded-top" src={movie.image} alt="" />
                <p className="dsmovie-card-text mt-3">{movie.title}</p>

                <form className='container mt-2'>
                    <div className="form-group">
                        <label className='dsmovie-email' htmlFor="dsmovie-form-email">Informe seu email</label>
                        <input type="email" className="form-control dsmovie-input-email" id="dsmovie-form-email" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="form-group mt-3">
                        <label className='dsmovie-score' htmlFor="dsmovie-form-score">Informe sua avaliação</label>
                        <select className="form-control dsmovie-select-score" id='dsmovie-form-score'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className='dsmovie-buttons'>
                        <button type="submit" className='dsmovie-btn-salvar'>Salvar</button>
                        <Link to='/' className='dsmovie-btn-cancelar'>Cancelar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;