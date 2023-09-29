import "./Home.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeSearch } from "../../features/searchSlice/searchSlice"
import { useNavigate } from "react-router-dom"


function Home() {
   const [query, setQuery] = useState('')
   const dispatch = useDispatch()
   const navigate = useNavigate()

   function handleSubmit(e) {
      e.preventDefault()
      dispatch(changeSearch({
         page: 1,
         search: query
      }))
      navigate("/search")

   }

   return (
      <section className="hero min-h-screen w-full">
         <div className="bg-gray-900/60 min-h-screen w-full">
            <div className=" align-items max-w-4xl md:mx-auto">
               <h1 className="pt-48 font-semibold text-white mb-4 text-4xl">Unsplash</h1>
               <p className="text-gray-200 mb-2">The Powerful Search engine of stunning free and royalty free images.</p>
               <div className="text-gray-200 mb-4 text-xs">Powered by <a className="underline" href="https://unsplash.com">Unsplash api</a>.</div>
               <form onSubmit={handleSubmit}>
                  <input
                     type="text"
                     className="input input-bordered w-full max-w-4xl rounded-md mb-4 input-sm sm:input-md"
                     placeholder="Search something"
                     required
                     onChange={(e) => setQuery(e.target.value)}
                  />
               </form>
               <div className="text-gray-200 dark:text-gray-400">Developed with ❤️ By <a href="#">Hojiakbarov Muhammadali</a>.</div>
            </div>
         </div>
      </section>
   )
}

export default Home