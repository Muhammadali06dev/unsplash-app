import { useRef } from "react"

function AboutImage({ setHidden, imageInfo }) {
   const closeBtn = useRef()
   function handleToggle() {
      setHidden(false)
      document.querySelector("html").classList.remove("overflow-hidden")
   }
   console.log(imageInfo)
   const { alt_description, urls, user } = imageInfo

   return (
      <div className='fixed inset-0 overflow-y-auto' ref={closeBtn}>
         <div className='flex min-h-full items-center justify-center'>
            <div className='w-full max-w-7xl rounded-md bg-white shadow-xl transition-all overflow-x-hidden align-middle transform'>
               <div className='bg-gray-100 flex items-center justify-end'>
                  <button className='px-5 py-3 text-gay-500 focus:outline-none' onClick={handleToggle}>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m-15 0l15 15"></path></svg>
                  </button>
               </div>
               <div className="flex flex-col lg:flex-row p-5 lg:p-6 gap-x-8">
                  <div className='w-full lg:w-2/3'>
                     <img
                        src={urls.regular}
                        alt=""
                        className='rounded-lg'
                     />
                  </div>
                  <div className='w-full lg:w-1/3'>
                     <h3 className='border-b text-xl mt-3 lg:mt-0 lg:text-2xl mb-2 lg:mb-5 pb-3 lg:pb-5 text-gray-500 '>Details</h3>
                     <div className='text-gray-500 mb-2'>Photo taken by</div>
                     <div className='flex items-center space-x-4 mb-4 mt-2'>
                        <img
                           src={user.profile_image.medium}
                           alt={alt_description}
                           className='flex-none w-14 h-14 object-cover rounded-full'
                        />
                        <p className='text-base font-semibold text-slate-900 dark:text-slate-300 '>{user.name}</p>
                     </div>
                     <div><span className="text-gray-700 font-semibold">Author: </span>{user.name}</div>
                     <div><span className="text-gray-700 font-semibold">Location: </span>{user.location}</div>
                     <div><span className="text-gray-700 font-semibold">Total likes: </span>{user.total_likes}</div>
                     <div><span className="text-gray-700 font-semibold">Total photos: </span>{user.total_photos}</div>
                     <a
                        href={urls.full}
                        target="_blank"
                        className='px-4 py-2 font-medium text-sm bg-blue-100 hover:bg-blue-200 rounded inline-block mt-5 text-blue-900 transition'
                     >View original image</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutImage