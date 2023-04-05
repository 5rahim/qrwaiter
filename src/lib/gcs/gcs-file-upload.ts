import { clientEnv } from '@/env/schema.mjs'
import { SignedPostPolicyV4Output } from '@google-cloud/storage'
import path from 'path'

export type GcsFileUploadObject = {
   name: string,
   url: string,
   ext: string,
}

export type GcsFileUploadReturn = {
   objects: GcsFileUploadObject[] | null,
   error: string | null
}
export const gcs_uploadFiles = async (files: File[]): Promise<GcsFileUploadReturn> => {
   
   let success = false
   let objects: GcsFileUploadObject[] = []
   let error: string | null = null
   
   if (files.length > 0) {
      
      // Loop through files
      for (let i = 0; i < files.length; i++) {
         
         const file: any = files[i]
         const filename = `${crypto.randomUUID()}` + path.extname(file.name) // Create a file name
         
         /** Generate a signed post from GCS **/
         const signedPost = await fetch(clientEnv.NEXT_PUBLIC_BASE_URL + `/api/gcs/upload?file=${filename}`)
         const signedPostResponse: { location: string | null, raw: SignedPostPolicyV4Output | null, error: string | null } = await signedPost.json()
         
         
         if (signedPostResponse.error || !signedPostResponse.raw) {
            error = signedPostResponse.error!
         } else if (signedPostResponse.raw) { // If there's no server-side error
            
            /** Initialize upload form data **/
            const formData = new FormData()
            
            const { raw: { url, fields } } = signedPostResponse
            
            Object.entries({ ...fields, file }).forEach(([key, value]) => {
               formData.append(key, value as string)
            })
            
            /** Upload file to GCS **/
            try {
               const upload = await fetch(url, {
                  method: 'POST',
                  body: formData,
               })
               
               if (upload.ok) {
                  success = true
                  /** Push object **/
                  objects.push({
                     name: file.name,
                     url: url + fields.key,
                     ext: path.extname(file.name).replace('.', ''),
                  })
               }
            }
            catch (e: any) {
               error = e.toString()
               console.log(e)
            }
            
         }
         
      }
      
   }
   
   if (success)
      return { objects: objects, error: null }
   else
      return { objects: null, error: error }
   
}
