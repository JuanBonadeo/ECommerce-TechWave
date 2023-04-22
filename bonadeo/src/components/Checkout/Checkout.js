import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import { db } from '../../servicio/firebase/firebaseConfig';
import ContactForm from '../ContactForm/ContactForm';
import Swal from 'sweetalert2';
import Loader from '../Loader/Loader';
import '../Checkout/Checkout.css';


const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);

  const createOrder = async (userData) => {
  try {
    setLoading(true);
    const objOrder = {
      buyer: userData,
      items: cart,
      total
    };

    const ordersRef = collection(db, 'orders');
    const orderAdded = await addDoc(ordersRef, objOrder);
    
    clearCart();
    setOrderId(orderAdded.id);

    setTimeout(() => {
      navigate('/ECommerce-TechWave')
    }, 25000);
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  } finally {
    setLoading(false);
    Swal.fire({
      icon: 'succes',
      title: 'Felicitaciones, tu compra ah sido completada',
    })
  }
}
  if(loading) {
    return (
      <div>
        <Loader/>
      </div>
    )
  }

  if(orderId) {
    return (
      <div>
        <h1>El id de su compra es: {orderId}</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Ingrese sus datos</h2>
      <ContactForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout