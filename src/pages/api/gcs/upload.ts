import { env } from '@/env/server.mjs'
import { authOptions } from '@/lib/auth'
import { Storage } from '@google-cloud/storage'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

export default async function upload(req: NextApiRequest, res: NextApiResponse) {
   
   const session = await getServerSession(req, res, authOptions)
   
   if (session) {
      
      try {
         const storage = new Storage({
            projectId: env.GCS_PROJECT_ID,
            credentials: {
               client_email: env.GCS_CLIENT_EMAIL,
               private_key: env.GCS_PRIVATE_KEY,
            },
         })
         
         if (env.GCS_BUCKET_NAME && typeof req.query.file === 'string') {
            const bucket = storage.bucket(env.GCS_BUCKET_NAME)
            
            const file = bucket.file(req.query.file)
            
            const options = {
               expires: Date.now() + 1 * 60 * 1000, //  1 minute,
               fields: { 'x-goog-meta-test': 'data', 'bucket': env.GCS_BUCKET_NAME },
            }
            
            // bucket.storage.getBucketsStream()
            
            const [response] = await file.generateSignedPostPolicyV4(options)
            return res.status(200).json({ location: response.url + response.fields.key, raw: response, error: null })
            
         }
      }
      catch (e) {
         
         return res.status(500).json({ location: null, raw: null, error: e })
         
      }
      
   }
   
   return res.status(500).json({ location: null, raw: null, error: "No session" })
   
}
