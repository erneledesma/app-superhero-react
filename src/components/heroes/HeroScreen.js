import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById' 

const HeroScreen = () => {
    
    const { heroeId } = useParams();
    //console.log(heroId);

    const hero = getHeroById(heroeId)
    //console.log(hero);

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    if (!hero) {
        return <Redirect to="/" />
    }

    // const handleReturn = () => {

    //     history.goBack()
       
    // }

    return (  
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero} 
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn" >
                <h3>{ superhero }</h3>
                <ul className= "list-group list-group-flush">
                    <li className="list-gruop-item"> <b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-gruop-item"> <b>Publisher: </b>{publisher}</li>
                    <li className="list-gruop-item"> <b>First appearence: </b>{first_appearance}</li>
                </ul>
                    <br />
                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                className="btn btn-outline-info"
                // onClick={ handleReturn }
                
                > 
                    Return
                </button>
            </div>
        </div>
    );
}
 
export default HeroScreen;