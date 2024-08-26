import React from 'react'
import Header from './Header';
import img1 from '../assets/img1.webp'
function Hero ()  {
  return ( 
    
   <section className=' bg-slate-400'>
    <Header />
    


    <div className='grid grid-cols-3 grid-rows-3 grid-flow-col gap-4 justify-stretch '></div>
    <div className="container mx-auto px-4 py-32 ">
    <h2 className="text-3xl font-bold text-center">Acerca de nosotros</h2>
    <button className='text-5xl font-mono text-center
     bg-white border-spacing-1  rounded-md 
      '>
       <h1 className='p-1'>Registro</h1> 
    </button>
    <p className="text-lg text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    {/* Contenido de la sección Acerca de */}
  </div>

    


                           {/*Tarjetas*/}

  <div className='p-12  flex-center mx-auto '>
     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-auto items-center m-6 p5'>
      
        <div className="     max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
        <img className="rounded-t-lg" src={img1} alt="" />
         </a>
         <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
               </svg>
             </a>
          </div>
    </div>
                                      {/*Tarjetas#2*/}

      <div className="p-1 max-w-sm bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
        <img className="rounded-t-lg" src={img1} alt="" />
         </a>
         <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
               </svg>
             </a>
          </div>
    </div>
            

                                               {/*Tarjetas#3*/}

       <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <a href="#">
             <img className="rounded-t-lg" src={img1} alt="" />
          </a>
           <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
        < p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
               </svg>
             </a>
          </div>
    </div>       
  </div>


     </div>

   

                                                     

       <div className=' flex-center p-12 auto-rows-max '>
           
       <div className="grid grid-rows-3 grid-flow-col gap-4 justify-stretch">

  <div className="row-span-3 ...">
  <div className="grid grid-rows-3 grid-flow-col gap-4">
  <div className="row-span-3 h-12  justify-stretch  ">
  <div className="     max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
        <img className="rounded-t-lg" src={img1} alt="" />
         </a>
         <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
               </svg>
             </a>
          </div>
    </div>

  </div>

  
  
 
</div>
    
  </div>
  
  <div className="bg  row-span-2 col-span-2">
  <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021</h5>
        </a>
  </div>


</div>
   </div>

  <br />
 

  <div className=" grid grid-cols-2 grid-flow-col ">
    <h2 className="text-3xl font-bold text-center">Nuestras características</h2>
    {/* Contenido de la sección Características */}
  </div>

  {/* Call to Action Section */}

  <div className=" grid  bg-gray-800 text-white container mx-auto px-4 py-16  flex-col items-center">
    <h2 className="text-3xl font-bold">¡Únete a nosotros!</h2>
    <p className="text-lg mt-4">Suscríbete a nuestro boletín para recibir las últimas novedades.</p>
    <form>
      <input type="email" placeholder="Tu correo electrónico" className="border border-gray-400 rounded px-4 py-2" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Suscribirse
      </button>
    </form>
  </div>

  {/* Footer Section */}
  <footer className="bg-gray-900 text-white py-4 text-center">
    <p>&copy; 2024 Mi Página Web</p>
  </footer>
  </section>
);
}


    
     
     

     
    
    
     
     

 



    

    


export default Hero