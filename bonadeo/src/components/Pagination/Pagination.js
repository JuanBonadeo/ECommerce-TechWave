import '../Pagination/Pagination.css'
const Pagination = () =>{
    return(
        <div className='paginationContainer'>
            <div className="pagination">
                <a href="#">&laquo;</a>
                <a className='Page'href="">1</a>
                <a className='Page'href="">2</a>
                <a className='Page'href="">3</a>
                <a className='Page'href="">4</a>
                <a className='Page'href="">5</a>
                <a className='Page'href="">6</a>
                <a href="#">&raquo;</a>
            </div>            
        </div>

    )
}

export default Pagination