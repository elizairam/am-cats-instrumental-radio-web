import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "react-h5-audio-player/lib/styles.css";
import TableRadioStations from "../components/table";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>f.m. cat instrumental radio</title>

        <meta name="description" content="player instrumental radio stations" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>f.m. cat radio</h1>
        <Image
          src={"/purr-party-hard.png"}
          alt="cats listening music and dancing"
          width={300}
          height={300}
        />
        <div>
          <TableRadioStations />
        </div>
      </main>

      <footer className={styles.footer}>

      © f.m. cat radio 2022 by elizabet_ 
      <span style={{ padding : '15px' }}>
      <a
          href="https://github.com/elizairam"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Image
          src={"/icons8-github.svg"}
          alt="logo github"
          width={35}
          height={35}
        />
        </a>
        </span>
        <span style={{ padding : '5px' }}>
       <a href="https://icons8.com/illustrations"> _illustration from Ouch!</a>
        </span>
          <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
           powered by vercel {" "}

          <span className={styles.logo} alt="Vercel logo as playing music symbol">
            ▶
          </span>
          
        </a>
      </footer>
    </div>
  );
}
