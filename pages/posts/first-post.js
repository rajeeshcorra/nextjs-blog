import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import Alert from '../../components/alert';

export default function FirstPost() {
  
    return (
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
              console.log(`script loaded correctly, window.FB has been populated`)
            }
          />
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a className="foo">Back to home</a>
          </Link>
        </h2>
        <img src="/images/profile.jpeg" alt="Your Name" />

        <Image
            src="/images/profile.jpeg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
          />
       
          <Alert type={'success'}>
            Success Message
          </Alert>  

      </Layout>
      
    );
    
}

