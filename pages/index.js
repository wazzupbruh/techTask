import Head from "next/head";
import Content from "../components/Content";
import { MainLayout } from "../components/MainLayout";


export default function Index() {
  
  return (
    <>
      <div className="container">
        <MainLayout />
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          />
          <meta name="viewport" content="width=device-width" />
        </Head>

        <Content />
        
      </div>
    </>
  );
}
