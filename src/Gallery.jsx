import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useGlobalContext } from './AppContext';


const url ='https://api.unsplash.com/search/photos?client_id=OT9D6gx8UcQVlsgC4iN0LNggRKdWQwk_uKeoneWA0oc';
function Gallery() {
  const {searchTerm,setSearchTerm} = useGlobalContext();

  const response = useQuery({
    queryKey: ["images",searchTerm],
    queryFn: async ()=>{
      const result = await axios.get(`${url}&query=${searchTerm}`);

      return result.data;
    }
  })
  if(response.isLoading){
    return <section className='image-container'>
      <h2>Loading....</h2>
    </section>
  }
  if(response.isError){
    return <section className='image-container'>
      <h2>There Was an Error⛔....</h2>
    </section>
  }
  const results = response.data.results;
  if(results.length < 1){
    return <section className='image-container'>
      <h2>Not Found 🙅</h2>
    </section>
  }



  console.log(response)
 return (
    <section className='image-container'>
     {results.map((item)=>{
      const url = item?.urls?.regular
      return <img src={url} alt={item.alt_description} key={item.id}  className='img'/>
     })}
    </section>
 )
 }

export default Gallery