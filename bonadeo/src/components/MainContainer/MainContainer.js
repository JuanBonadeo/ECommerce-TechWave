import '../MainContainer/MainContainer.css'
import ProductsContainer from '../ProductsContainer/ProductsContainer'
import SideBar from '../SideBar/SideBar'


const MainContainer = () => {
     return (
        <div className='MainContainer'>
            <SideBar/>
            <ProductsContainer/>
        </div>
     )
}

export default MainContainer
