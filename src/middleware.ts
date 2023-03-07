import { fallbackLng, languages } from '@/app/i18n/settings'
import { siteConfig } from '@/config/site.config'
import { linkTo } from '@/utils/links'
import acceptLanguage from 'accept-language'
import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"


const cookieName = 'i18next'

export default withAuth(
   async function middleware(req) {
      
      /**
       * i18n logic
       */
      if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1 || req.nextUrl.pathname.indexOf('assets') > -1 || req.nextUrl.pathname.indexOf('api') > -1)
         return NextResponse.next()
      let lng: string | null = null
      
      if (siteConfig.i18n) {
         
         if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)!.value)
         if (!lng!) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
         if (!lng) lng = fallbackLng
         
         // Redirect if lng in path is not supported
         if (
            !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
            !req.nextUrl.pathname.startsWith('/_next')
         ) {
            console.log(`lng in path is not supported, redirecting...`)
            return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
         }
         
         if (req.headers.has('referer')) {
            // console.log(`refer is ${req.headers.get('referer')}`)
            const refererUrl = new URL(req.headers.get('referer')!)
            const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
            const response = NextResponse.next()
            if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
            // return response
         }
         
      }
      
      /**
       *
       */
      
      /**
       * Authentication / Page protection logic
       */
      
      const token = await getToken({ req, raw: true })
      const isAuth = !!token
      
      const path = req.nextUrl.pathname
      
      
      const isAuthPage = path === linkTo('/', lng).slice(0, path.length) || req.nextUrl.pathname.includes(linkTo('/login', lng)) || req.nextUrl.pathname.includes(linkTo('/register', lng))
      
      if (isAuthPage) {
         if (isAuth) {
            console.log(`You are logged in trying to access an auth page`)
            return NextResponse.redirect(new URL(linkTo('/admin', lng), req.url))
         }
         
         return null
      }
      
      const pathWithoutLocale = siteConfig.i18n ? path.replace(`/${lng}`, '') : path
      
      
      // pathWithLocale.length > 0 allows the user to access the home page "/".
      for (let i = 0; i < siteConfig.protectedPages.length; i++) {
         let protectedPath = siteConfig.protectedPages[i]
         if (protectedPath) {
            const rootPath = protectedPath.split('/*')[0] ?? protectedPath
            
            if (pathWithoutLocale.length > 0 && pathWithoutLocale.includes(rootPath)) {
               
               if (!isAuth) {
                  
                  console.log(`You are logged off trying to access a protected page`)
                  
                  let from = req.nextUrl.pathname
                  if (req.nextUrl.search) {
                     from += req.nextUrl.search
                  }
                  
                  console.log()
                  
                  return NextResponse.redirect(
                     new URL(linkTo(`/login?from=${encodeURIComponent(from)}`, lng), req.url),
                  )
               }
               
            }
            
         }
      }
      
   },
   {
      callbacks: {
         async authorized() {
            // This is a work-around for handling redirect on auth pages.
            // We return true here so that the middleware function above
            // is always called.
            return true
         },
      },
   },
)
