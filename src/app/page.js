import Home from "./_component/Home"

 
import Head from "next/head";
 function page() {
   return (
    <div>
    <Head>
      <title>React Leaflet Map</title>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6/dist/leaflet.css" />
    </Head>
     <Home />
  </div>
   )
 }
 
 export default page
 