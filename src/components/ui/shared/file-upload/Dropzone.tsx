import { useAppTranslation } from '@/hooks/use-app-translation'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { BiTrash } from '@react-icons/all-files/bi/BiTrash'
import { BiX } from '@react-icons/all-files/bi/BiX'
import { FcAudioFile } from '@react-icons/all-files/fc/FcAudioFile'
import { FcDocument } from '@react-icons/all-files/fc/FcDocument'
import { FcFile } from '@react-icons/all-files/fc/FcFile'
import { FcImageFile } from '@react-icons/all-files/fc/FcImageFile'
import { FcPackage } from '@react-icons/all-files/fc/FcPackage'
import { FcVideoFile } from '@react-icons/all-files/fc/FcVideoFile'
import { FiDownload } from '@react-icons/all-files/fi/FiDownload'
import { IconDisplay } from '@ui/main/data-display/icon-display/IconDisplay'
import { IconButton } from '@ui/main/forms/button/IconButton'
import React, { useCallback, useEffect, useState } from 'react'
import { DropzoneOptions, useDropzone } from 'react-dropzone'


function humanSize(size: number, precision = 2): string {
   const i = Math.floor(Math.log(size) / Math.log(1024))
   return (size / Math.pow(1024, i)).toFixed(precision).toString() + ['bytes', 'Kb', 'Mb', 'Gb', 'Tb'][i]
}


export interface DropzoneProps extends DropzoneOptions {
   onChange?: (files: (File)[]) => void,
   name?: string
   isRequired?: boolean
   withImagePreview?: boolean
}

export const Dropzone = React.forwardRef<HTMLInputElement, DropzoneProps>((props, ref) => {
   
   const {
      onChange,
      name,
      isRequired = false,
      withImagePreview = false,
      multiple,
      accept,
      ...rest
   } = props
   
   const t = useAppTranslation(['form'])
   
   const [files, setFiles] = useState<File[]>([])
   
   const onDrop = useCallback((acceptedFiles: any) => {
      onChange && onChange(acceptedFiles)
      setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
         preview: URL.createObjectURL(file),
      })))
   }, [])
   
   const {
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isDragReject,
      acceptedFiles,
   } = useDropzone({
      onDrop,
      multiple,
      accept,
      ...rest,
   })
   
   
   const remove = (file: number) => {
      const newFiles = [...files]
      newFiles.splice(file, 1)
      setFiles(newFiles)
      onChange && onChange(newFiles)
   }
   
   const imageGridThumbs = files?.map((file: any, index) => {
      return (
         <div
            key={file.name}
            className={cn("relative bg-white border border-brand-200 aspect-square h-full bg-center bg-no-repeat bg-contain rounded-md overflow-hidden", "col-span-1 row-span-1")}
            style={{
               backgroundImage: file ? `url(${file.preview})` : undefined,
            }}
         >
            <IconButton icon={<BiX />} intent="alert" size="xs" className="absolute top-1 right-1" onClick={() => remove(index)} />
         </div>
      )
   })
   
   // clean up
   useEffect(() => () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview))
   }, [files])
   
   
   return (
      <>
         <section>
            <div
               className={cn(
                  "mb-2 hover:text-black flex flex-col items-center p-4 border border-gray-300 rounded-md border-dashed text-gray-700 transition ease-in-out hover:border-gray-600",
                  // "bg-gray-50",
                  {
                     "border-brand-500": isDragActive,
                     "border-red-500": isDragReject,
                  },
               )}
               {...getRootProps()}
            >
               <input name={name ?? "fields"} {...getInputProps()} />
               <div className="flex items-center gap-3">
                  <IconDisplay intent="primary-basic" icon={<FiDownload />} />
                  {t('form:dropzone')}
               </div>
            </div>
            
            {!withImagePreview && <div
                className="flex rounded-md flex-wrap divide-y"
            >
               {files?.map((file: any, index) => {
                  
                  let Icon: any = null
                  
                  if (['image/jpeg', 'image/png', 'image/jpg', 'image/webm'].includes(file.type)) {
                     Icon = FcImageFile
                  } else if (file.type.includes('video')) {
                     Icon = FcVideoFile
                  } else if (file.type.includes('audio')) {
                     Icon = FcAudioFile
                  } else if (file.type.includes('pdf') || file.type.includes('document') || file.type.includes('txt') || file.type.includes('text')) {
                     Icon = FcDocument
                  } else if (file.type.includes('compressed') || file.type.includes('zip') || file.type.includes('archive')) {
                     Icon = FcPackage
                  } else {
                     Icon = FcFile
                  }
                  
                  return (
                     <div key={file.name} className="w-full">
                        
                        <div
                           className="flex items-center justify-space-between relative p-1 hover:bg-gray-50 w-full overflow-hidden"
                        >
                           <div className="flex items-center gap-2 truncate w-full">
                              {Icon && <IconDisplay intent="primary-basic" icon={<Icon />} className="text-2xl" />}
                              <p className="truncate max-w-[180px]">{file.name}</p>
                              <p className="text-xs uppercase text-center font-semibold align-center">{humanSize(file.size)}</p>
                           </div>
                           <IconButton
                              size="xs"
                              intent="gray-basic"
                              icon={<BiTrash />}
                              className="ml-2 rounded-full"
                              onClick={() => remove(index)}
                           />
                        
                        
                        </div>
                     
                     
                     </div>
                  )
               })}
            </div>}
            
            {withImagePreview && <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 h-full gap-x-2 gap-y-2">
               {imageGridThumbs}
            </div>}
         
         </section>
      </>
   )
   
})
