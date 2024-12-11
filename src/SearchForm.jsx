import React from 'react'
import { useGlobalContext } from './AppContext'
function SearchForm() {
    // const {greetings} = useGlobalContext();
    const handleSubmit =(e)=>{
      e.preventDefault();
      // console.log(e.target.elements)
      const searchValue= e.target.elements.search.value;
      if(!searchValue) return;
      console.log(searchValue)
    }
  return (
    <section>
      <h2 className='title'>Unsplash Images</h2>
      <form className='search-form' onSubmit={handleSubmit}>
        <input type="text" name='search' className='form-input search-input' placeholder='dog' />
        <button type='submit' className='btn'>Search</button>
      </form>
    </section>
  )
}

export default SearchForm
