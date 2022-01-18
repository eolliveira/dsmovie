import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/Requests";

const Listing = () => {

    const [activePage, setActivePage] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        last: true,
        totalPages: 0,
        number: 0,
        totalElements: 0,
        first: true,
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${activePage}`)
            .then((response) => {
                setPage(response.data);
            })
            .catch((error) => {
                console.log(`Não foi possivel obter a lista de filmes: ${error}`);
            });
    }, [activePage]);

    const ChangePage = (index : number) => {
        setActivePage(index)
    }

    return (
        <>
            <Pagination page={page} onChangePage={ChangePage} />
            <div className="container">
                <div className="row">
                    {page.content?.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Listing;