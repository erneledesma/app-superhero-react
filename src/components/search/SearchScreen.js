import React, { useMemo } from 'react';
import { useLocation} from 'react-router-dom';
import queryString from 'query-string';

import HeroCard from '../heroes/HeroCard';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/gatHeroesByName';



const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });

    const { searchText } = formValues;
    
    // console.log( queryString.parse(location.search));
    const heroesFiltered =  useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = e => {
        e.preventDefault()
        history.push(`?q=${searchText}`);
    }


    return (
            <div>
                <h1> Search Screen</h1>
                <hr />

                <div className="row">
                     <div  className="col-5">
                        <h4>Search Form</h4>
                        <hr />

                 <form onSubmit={handleSearch}>
                     <input
                            type="text"
                            placeholder="Buscar un Heroe"
                            className="form-control"
                            name='searchText'
                            autoComplete="off"
                            onChange={handleInputChange}
                            />  

                            <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            >
                                Burcar...
                            </button>

                    </form>
                    </div>

                    <div className="col-7">

                        <h4> Resultado</h4>
                        <hr />

                       {
                        ( q === '') &&
                         <div 
                         className="alert alert-info"
                         >Buscar Heroes
                         </div>
                       }

                       {
                           (q !== '' && heroesFiltered.length === 0 )
                           &&
                           <div className="alert alert-danger">
                                No existen Heroes para su búsqueda
                           </div>
                       }
                        {   
                            heroesFiltered.map( hero => (
                                <HeroCard 
                                    key={ hero.id }
                                    {...hero}

                                />
                            ))

                        }
                    </div>

                </div>
            </div>

       

     


      );
}
 
export default SearchScreen;