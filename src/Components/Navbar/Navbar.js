import './Navbar.css'
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className='tn-container container'>
          <a href='' className='logo'>shopee</a>
          <div className='search-box'>
            <input type='search' name='search' id='' placeholder='Search For a 3higherKush'/>
            <div className='search-icon'></div>
          </div>
        </div>
      </nav>
    </header>
    )
}

export default Navbar