/*
 * @Author: Vincent Yang
 * @Date: 2024-11-20 17:41:16
 * @LastEditors: Vincent Yang
 * @LastEditTime: 2024-11-20 18:12:52
 * @FilePath: /onedrive-cf-index-ng/src/pages/_document.tsx
 * @Telegram: https://t.me/missuo
 * @GitHub: https://github.com/missuo
 * 
 * Copyright © 2024 by Vincent, All Rights Reserved. 
 */
import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="OneDrive Vercel Index" />
          <link rel="icon" href="/icons/folder.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          {siteConfig.googleFontLinks.map(link => (
            <link key={link} rel="stylesheet" href={link} />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
