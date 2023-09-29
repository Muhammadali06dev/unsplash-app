import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { changeSearch } from '../../features/searchSlice/searchSlice'
import AboutImage from '../../components/AboutImage'

function Search() {
   const { search, page } = useSelector(state => state.search)
   const [data, setData] = useState(null)
   const [query, setQuery] = useState('')
   const [hidden, setHidden] = useState(false)
   const [imageInfo, setImageInfo] = useState('')
   const api = `https://api.unsplash.com/search/photos?client_id=nS0ZuWjRPItGjKojIhTKZfQi5O92kbah4bbgZY2Z2LU&page=${page}&query=${search}&per_page=20`
   const dispatch = useDispatch()

   useEffect(() => {
      axios.get(api)
         .then(data => setData(data.data))
         .catch(error => console.log(error))
   }, [api])

   function handleSubmit(e) {
      e.preventDefault()
      dispatch(changeSearch({
         page: 1,
         search: query
      }))
   }

   function showInfo(item) {
      setImageInfo(item)
      setHidden(true)
      document.querySelector("html").classList.add("overflow-hidden")
   }

   return (
      <section className={`w-full}`}>
         <div className='container max-w-4xl py-6 px-4 mx-auto'>
            <div className='grid grid-cols-2 justify-between items-center gap-y-4 '>
               <h2 className='text-4xl font-semibold text-black'>Unsplash</h2>
               <form action="" onSubmit={handleSubmit}>
                  <input
                     type="text"
                     placeholder='Search something'
                     className='input input-bordered input-md w-full max-w-md shadow-lg col-span-2 sm:col-span-1'
                     onChange={(e) => setQuery(e.target.value)}
                  />
               </form>
            </div>
            <p className='mt-3'>Showing results for <span className='text-indigo-500'>{search}</span></p>
            <p className='mt-px text-slate-500 text-sm'>Total {data && data.total} Images have been found</p>
            <div className='gap-4 lg:gap-5 md:columns-3 columns-2 mt-14'>
               {data && data.results.map(item => {
                  return (

                     <img
                        src={item.urls.small}
                        alt={item.alt_description}
                        key={item.id} className='bg-gray-300 mb-5 w-full rounded-md cursor-pointer'
                        loading='lazy'
                        onClick={() => showInfo(item)}
                     />

                  )
               })}
            </div>
         </div>
         {hidden && <AboutImage setHidden={setHidden} imageInfo={imageInfo} />}

      </section>
   )
}

export default Search