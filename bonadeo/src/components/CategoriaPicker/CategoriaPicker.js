import '../CategoriaPicker/CategoriaPicker.css'
import Accordion from 'react-bootstrap/Accordion';
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../servicio/firebase/firebaseConfig';

 const CategoriaPicker = () => {
    const [categorias,setCategorias] = useState([])

    useEffect(() => {
        const categoriasRef = collection(db, 'categories')
        getDocs(categoriasRef)
        .then(snapshot => {
            const categoriasAdapted = snapshot.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setCategorias(categoriasAdapted)
        })
    }, [])
    console.log(categorias)
    return (
            <div className='SideBarItem'>
                <Accordion >
                    <Accordion.Toggle  eventKey="1" className='Toggle'>
                     <h5>Categorias</h5>
                     <ButtonIcon iconUrl="https://cdn-icons-png.flaticon.com/512/61/61932.png" h="10px" w="10px"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <div className='SideBarSubItems SideBarSubItemsC'>
                            {
                                categorias.map(cat => {
                                   return  <Link key={cat.id} to={`/ECommerce-TechWave/category/${cat.slug}`}><p>{cat.label}</p></Link>
                                    
                                })
                            }
                            
                        </div>
                    </Accordion.Collapse>
                </Accordion>
            </div>
            
    )
 }
 export default CategoriaPicker

