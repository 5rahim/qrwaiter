'use client'

import { useMutationLoading } from '@/atoms/app.atom'
import { useAppTranslation } from '@/hooks/use-app-translation'
import { gcs_uploadFiles } from '@/lib/gcs/gcs-file-upload'
import { cn } from '@/lib/tailwind/tailwind-utils'
import { BiImageAdd } from '@react-icons/all-files/bi/BiImageAdd'
import { BiX } from '@react-icons/all-files/bi/BiX'
import { Badge } from '@ui/main/data-display/badge/Badge'
import { IconDisplay } from '@ui/main/data-display/icon-display/IconDisplay'
import { BasicField, BasicFieldOptions, extractBasicFieldProps } from '@ui/main/forms/basic-field/BasicField'
import { IconButton } from '@ui/main/forms/button/IconButton'
import { getFormError } from '@ui/main/forms/typesafe-form/Field'
import { cva } from 'class-variance-authority'
import _ from 'lodash'
import React, { useEffect, useId, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useController, useFormContext } from 'react-hook-form'

export type ImageGridInputObject = {
   main: { file: File | null, preview: string },
   additional: { file: File, preview: string }[]
}

export interface ImageGridInputProps extends BasicFieldOptions {
   children?: React.ReactNode
   defaultImages?: { main: string, additional: string[] }
   handler: any
}

const imageContainerStyles = cva("relative bg-white border border-gray-200 aspect-square h-full bg-center bg-no-repeat bg-contain rounded-md overflow-hidden")

/**
 * The name of the field is automatically set to "images"
 * It is outside the SmartForm Field component because of its uniqueness
 * @example
 * const imageGridHandler = useGridImageHandler()
 *
 * <Field.ImageGrid
 *    handler={imageGridHandler}
 * />
 *
 * Value format: { main: string, additional: string[] }
 * @param props
 * @constructor
 */
const ImageGridInput: React.FC<ImageGridInputProps> = (props) => {
   
   const t = useAppTranslation()
   
   const [{ children, defaultImages, handler, ...rest }, {
      label = t('store.product.images'), ...basicFieldProps
   }] = extractBasicFieldProps(props, useId())
   
   
   const [mainImageFile, setMainImageFile] = useState<ImageGridInputObject['main'] | null>(null)
   const [imageFiles, setImageFiles] = useState<ImageGridInputObject['additional']>([])
   
   const context = useFormContext()
   const controller = useController({ name: basicFieldProps.name ?? 'images' })
   
   // Set default images
   useEffect(() => {
      async function formatMain() {
         if (defaultImages && 'main' in defaultImages) { // If there is a default main image
            const default_mainImageFile = dataURLtoFile(await toDataURL(defaultImages.main), defaultImages.main.split('-storage/')[1]!)
            setMainImageFile({ file: default_mainImageFile, preview: defaultImages.main }) // Set the main image file
         }
      }
      
      function formatAdditional() {
         if (defaultImages && 'additional' in defaultImages && defaultImages.additional.length > 0) { // If there are default additional images
            defaultImages.additional.map(async o => {
               if (o) {
                  const filename = o.split('-storage/')[1]! // DEVNOTE: the filename extraction method needs to change depending on the url of the
                                                            // bucket
                  const file = dataURLtoFile(await toDataURL(o), filename)
                  setImageFiles(f => {
                     const filtered = f.filter(v => v.file.name !== filename)
                     return [...filtered, { file, preview: o }]
                  })
               }
            })
         }
      }
      
      if (defaultImages) {
         formatMain()
         formatAdditional()
      }
   }, [])
   
   
   // useEffect(() => {
   //    if (context.formState.isSubmitting && !mainImageFile) {
   //       context.setError(basicFieldProps.name ?? 'images', { message: "no_image" })
   //    }
   // }, [context.formState, mainImageFile])
   
   useEffect(() => {
      const fieldArr = controller.field.value ?? []
      const newArr = mainImageFile?.file ? [mainImageFile.file, ...imageFiles.map(o => o.file)] : []
      
      function formatOutput() {
         if (!_.isEqual(fieldArr, newArr)) {
            if (mainImageFile) {
               controller.field.onChange([mainImageFile?.file, ...imageFiles.map(o => o.file)])
               handler.populateFiles(mainImageFile, imageFiles)
            } else {
               controller.field.onChange([])
               handler.populateFiles(null, imageFiles)
            }
         }
      }
      
      formatOutput()
   }, [mainImageFile, imageFiles])
   
   
   const mainDropzone = useDropzone({
      onDrop: (acceptedFiles: File[]) => {
         const file = acceptedFiles[0]
         if (acceptedFiles && file) {
            setMainImageFile({ file, preview: URL.createObjectURL(file) })
         }
      },
      accept: { 'image/*': ['.png', '.jpeg', '.jpg'] },
      multiple: false,
   })
   
   const imageDropzone = useDropzone({
      onDrop: (acceptedFiles: File[]) => {
         if (acceptedFiles) {
            setImageFiles(f => {
               return [...f, ...acceptedFiles.map((file) => ({ file, preview: URL.createObjectURL(file) }))]
            })
         }
      },
      accept: { 'image/*': ['.png', '.jpeg', '.jpg'] },
      maxFiles: 10,
      validator: file => {
         return !!imageFiles.filter(v => v.file.name === file.name)[0] ? { message: "Already exists", code: "file-exists" } : null
      },
      multiple: true,
   })
   
   const removeImage = (file: number) => {
      const newFiles = [...imageFiles]
      newFiles.splice(file, 1)
      setImageFiles(newFiles)
   }
   
   return (
      <>
         
         <BasicField
            label={label}
            {...basicFieldProps}
         >
            
            <div className="min-h-[7.5rem] flex flex-none relative w-full">
               <div className="giu_container flex-1 relative h-full">
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 h-full gap-x-2 gap-y-2">
                     
                     {/*Main Image*/}
                     <div
                        className={cn(
                           imageContainerStyles(),
                           "col-span-2 row-span-2 border",
                           {
                              'border-red-500': !!getFormError(controller.field.name ?? 'images', context.formState),
                           },
                        )}
                        style={{
                           backgroundImage: mainImageFile ? `url(${mainImageFile.preview})` : undefined,
                        }}
                        // {...mainDropzone.getRootProps()}
                     >
                        <Badge intent="primary-solid" className="mt-2 ml-2 text-xs">Thumbnail</Badge>
                        {!mainImageFile && (
                           <div className="absolute inset-0 flex flex-col items-center justify-center truncate">
                              <p className="text-gray-300 text-5xl sm:text-6xl"><BiImageAdd /></p>
                              <p className="text-sm sm:text-base text-gray-400 px-2 truncate">Click to add</p>
                           </div>
                        )}
                        {mainImageFile &&
                            <div
                                className="cursor-pointer absolute flex inset-0 bg-black transition ease-in bg-opacity-0 text-transparent
                        hover:bg-opacity-50 hover:text-white items-center justify-center font-semibold" onClick={mainDropzone.open}
                            >Edit</div>}
                        {!mainImageFile &&
                            <div
                                className="cursor-pointer absolute flex inset-0 bg-black transition ease-in bg-opacity-0 text-transparent
                        hover:bg-opacity-50 hover:text-white items-center justify-center font-semibold" onClick={mainDropzone.open}
                            >Add</div>}
                        {mainImageFile && <IconButton
                            icon={<BiX />}
                            intent="alert"
                            size="xs"
                            className="absolute top-1 right-1 z-2"
                            onClick={() => setMainImageFile(null)}
                        />}
                        <input {...mainDropzone.getInputProps()} />
                     </div>
                     
                     {imageFiles.map((img, i) => {
                        return (
                           <div
                              key={img.file.name}
                              className={cn(imageContainerStyles(), "col-span-1 row-span-1")}
                              style={{
                                 backgroundImage: img ? `url(${img.preview})` : undefined,
                              }}
                           >
                              <IconButton icon={<BiX />} intent="alert" size="xs" className="absolute top-1 right-1" onClick={() => removeImage(i)} />
                           </div>
                        )
                     })}
                     
                     <div
                        className="bg-white flex flex-col border border-dashed border-gray-200 rounded-md col-span-1 aspect-square row-span-1 h-full
                   items-center justify-center font-semibold text-brand-500 transition ease-in hover:bg-gray-50 cursor-pointer"
                        {...imageDropzone.getRootProps()}
                     >
                        <IconDisplay icon={<BiImageAdd />} intent="primary-basic" size="md" />
                        <p className="-mt-2">Add</p>
                        <input {...imageDropzone.getInputProps()} />
                     </div>
                  </div>
               </div>
            </div>
         
         </BasicField>
      
      </>
   )
   
}

export default ImageGridInput

const toDataURL = (url: string) => fetch(url)
   .then(response => response.blob())
   .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
   }))

function dataURLtoFile(dataurl: any, filename: string) {
   var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
   while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
   }
   return new File([u8arr], filename, { type: mime })
}

/**
 * @example
 * const gridImageHandler = useGridImageHandler()
 * // Validation
 * if (profilePictureUploader.canUpload()) {
 *    const image = await profilePictureUploader.uploadSingleFile()
 *    if (image) mutate({ ...data, profile_picture: image.url })
 * }
 */
export const useImageGridHandler = () => {
   
   const [mainFile, setMainFile] = useState<File | null>(null)
   const [additionalFiles, setAdditionalFiles] = useState<File[]>([])
   const [isUploading, setIsUploading] = useState(false)
   const [uploaded, setIsUploaded] = useState(false)
   const ml = useMutationLoading()
   
   return {
      
      isUploading,
      
      uploaded,
      
      canUpload() {
         return !!mainFile
      },
      
      /**
       * @param {ImageGridInputObject["main"]} main
       * @param {ImageGridInputObject["additional"]} additional
       */
      populateFiles: (main: ImageGridInputObject['main'], additional: ImageGridInputObject['additional']) => {
         setMainFile(main?.file)
         setAdditionalFiles(additional.map(o => o.file))
      },
      
      /**
       * if (gridImageHandler.canUpload()) {
       *    const images = await gridImageHandler.uploadFiles()
       *    mutate({ ...data, images: images })
       * }
       */
      uploadFiles: async (): Promise<ImageGridInputProps['defaultImages']> => {
         
         let results: ImageGridInputProps['defaultImages'] = { main: '', additional: [] }
         let success = [false, false]
         
         let uploadedAdditional: string[] = []
         let uploadedMain: string | null = null
         
         ml.setMutationLoading(true)
         
         /**
          * Upload main image
          */
         if (mainFile) {
            setIsUploading(true)
            const { objects, error } = await gcs_uploadFiles([mainFile])
            if (!error && objects) {
               setIsUploading(false)
               setIsUploaded(true)
               
               uploadedMain = objects[0]!.url
               success[0] = true
            }
         } else {
            success[0] = false
         }
         
         /**
          * Upload additional images
          */
         if (additionalFiles.length > 0) {
            
            setIsUploading(true)
            const { objects, error } = await gcs_uploadFiles(additionalFiles)
            if (!error && objects) {
               setIsUploading(false)
               setIsUploaded(true)
               
               uploadedAdditional = objects.map(o => o.url)
               success[1] = true
            }
            
         } else {
            success[1] = true
         }
         
         ml.setMutationLoading(false)
         
         if (success[0] && success[1]) {
            results = { main: uploadedMain ?? '', additional: uploadedAdditional }
            return results
         } else {
            return { main: '', additional: [] }
         }
         
      },
      
   }
   
}
