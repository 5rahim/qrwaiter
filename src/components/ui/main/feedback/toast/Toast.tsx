import { cn } from '@/lib/tailwind/tailwind-utils'
import { Transition } from '@headlessui/react'
import { BiX } from '@react-icons/all-files/bi/BiX'
import { MdError } from '@react-icons/all-files/md/MdError'
import { IconDisplay } from '@ui/main/data-display/icon-display/IconDisplay'
import { IconButton } from '@ui/main/forms/button/IconButton'
import React from 'react'
import toast, { resolveValue, Toast as ToastType, Toaster, ToastIcon } from 'react-hot-toast'


export interface ToastProps {
   t: ToastType
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
   
   const {
      t,
      ...rest
   } = props
   
   
   return (
      <>
         <Transition
            appear
            show={t.visible}
            className={cn(
               "relative transform py-3 px-6 flex text-white rounded-lg shadow-md",
               {
                  "bg-red-500": t.type === "error",
                  "bg-green-500": t.type === "success",
                  "bg-white text-gray-800": t.type === "loading",
               },
            )}
            enter="transition-all duration-150"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transition-all duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
         >
            {t.type !== "error" && <ToastIcon toast={t} />}
            {t.type === "error" && <IconDisplay icon={<MdError />} intent="white-basic" size="sm" className="-mr-1" />}
            <p className="py-1 px-2 pr-6">{resolveValue(t.message, t)}</p>
            <IconButton className="absolute top-1 right-1" size="sm" intent="white-basic" icon={<BiX />} onClick={() => toast.dismiss(t.id)} />
         </Transition>
      </>
   )
   
})

const ToastProvider: React.FC<{}> = () => {
   return (
      <Toaster>
         {(t) => (
            <Toast t={t} />
         )}
      </Toaster>
   )
}

export default ToastProvider
