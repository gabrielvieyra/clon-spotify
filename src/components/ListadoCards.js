import React, {useState, useEffect} from 'react';
import HeaderCards from './HeaderCards';
import Card from './Card';

const ListadoCards = ({title}) => {

    const [ cards, setCards ] = useState([])

    useEffect( ()=>{
            fetch('https://picsum.photos/v2/list?page=3&limit=9').then(
                    response => response.json()
            ).then(
                data => {
                  setCards(data);
                }
            ).catch(
                  () => 
                  console.log('error')
            )},[]
    )
      
    return (
        <section className="section">
            <HeaderCards title={title} />

            <div className="section-body">
                {
                      cards.map( card => {
                            return(
                              <Card img={card.download_url}
                                    title="El top 50 de Argentina"
                                    subtitle="Tu actualización diaria de las canciones más escuchadas en Argentina ahora mismo."
                                    id={card.id}
                              />
                            )
                      }

                      )
                }
            </div>
        </section>
    )
}

export default ListadoCards;


