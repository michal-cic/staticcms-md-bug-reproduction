import CMS from '@staticcms/core'
import { useEffect } from 'react'

import '@staticcms/core/dist/main.css'
import { config } from './config'

const CMSView = () => {
   useEffect(() => {
      const root = document.getElementById('cms')

      if (root) {
         return
      }

      if (process.env.NODE_ENV === 'development') {
         config.local_backend = true
      }

      CMS.init({ config })
   }, [])

   return (
      <div>
         {/* eslint-disable-next-line react/no-unknown-property */}
         <style jsx global>{`
            html,
            body {
               height: 100%;
            }

            #__next {
               display: none;
            }

            a:active,
            a:hover {
               color: unset;
            }
         `}</style>
      </div>
   )
}

CMSView.displayName = 'CMSView'

export default CMSView
