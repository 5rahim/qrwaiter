import CreateRestaurantForm from '@/app/(create)/new/CreateRestaurantForm'
import { getRestaurantByOwnerId } from '@/graphql/services/restaurant.server'
import { getCurrentSessionUser } from '@/lib/session'
import { siteLinkTo } from '@/utils/links'
import { redirect } from 'next/navigation'

export default async function Page() {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantByOwnerId(sessionUser?.id)
   
   if (restaurant) {
      redirect(siteLinkTo(s => s.admin.home))
   }
   
   return (
      <>
         
         <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
               <aside
                  className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
               >
                  <img
                     alt="Pattern"
                     src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                     className="absolute inset-0 h-full w-full object-cover"
                  />
               </aside>
               
               <main
                  aria-label="Main"
                  className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
               >
                  <div className="max-w-xl lg:max-w-3xl">
                     
                     <h1
                        className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                     >
                        Create your menu
                     </h1>
                     
                     <p className="mt-4 leading-relaxed text-gray-500 mb-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                        dolorum aliquam, quibusdam aperiam voluptatum.
                     </p>
                     
                     
                     <CreateRestaurantForm />
                  
                  </div>
               </main>
            </div>
         </section>
      </>
   )
}
