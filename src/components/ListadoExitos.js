import React, {useState, useEffect} from 'react';
import HeaderCards from './HeaderCards';
import Card from './Card';

const ListadoExitos = ({title}) => {

    const [ exitos, setExitos ] = useState([])

    useEffect( ()=>{
            fetch('https://picsum.photos/v2/list?page=6&limit=9').then(
                    response => response.json()
            ).then(
                data => {
                  setExitos(data);
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
                      exitos.map( exito => {
                            return(
                              <Card img={exito.download_url}
                                    title="El top 50 de Argentina"
                                    subtitle="Tu actualización diaria de las canciones más escuchadas en Argentina ahora mismo."
                                    id={exito.id}
                              />
                            )
                      }

                      )
                }
            </div>
        </section>
    )
}

export default ListadoExitos;


