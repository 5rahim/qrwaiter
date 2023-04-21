import DashboardShell from '@/app/(admin)/admin/DashboardShell'
import { clientEnv } from '@/env/schema.mjs'
import { getRestaurantInAdmin } from '@/graphql/services/restaurant.server'
import { getTableOrder } from '@/graphql/services/table-order.server'
import { getCurrentSessionUser } from '@/lib/session'
import { Accordion } from '@ui/main/data-display/accordion/Accordion'
import { uuid } from '@zag-js/utils'
import React from 'react'
import QRCode from "react-qr-code"


export default async function Page({ params: { toid } }: { params: { toid: string } }) {
   
   const sessionUser = await getCurrentSessionUser()
   
   const restaurant = await getRestaurantInAdmin(sessionUser?.id)
   
   const tableOrder = await getTableOrder(toid)
   
   return (
      <>
         {/*@ts-ignore*/}
         <DashboardShell
            title="Order"
         >
            
            <Accordion>
               <Accordion.Item title="Show QR Codes">
                  <div className="mt-2 bg-gray-50 p-4 space-y-4 md:space-y-0 md:flex">
                     {Array.from(Array(tableOrder?.table?.no_of_chairs ?? 0).keys()).map(chair_index => {
                        return (
                           <div key={chair_index + uuid()} className="w-60 relative mx-auto p-8 border border-2 bg-white rounded-xl flex-shrink-0">
                              <p className="text-center w-full -mt-4 mb-4 text-lg font-medium">Chair {chair_index+1}</p>
                              <QRCode
                                 size={256}
                                 style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                 value={`${clientEnv.NEXT_PUBLIC_BASE_URL}/r/${restaurant.slug}/table/${tableOrder?.id}_${chair_index+1}`}
                                 viewBox={`0 0 256 256`}
                              />
                           </div>
                        )
                     })}
                  </div>
               </Accordion.Item>
            </Accordion>
         
         
         </DashboardShell>
      </>
   )
}
