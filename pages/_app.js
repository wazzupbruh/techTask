import styles from "../styles/styles.scss";
import "../Modal/Modal.style.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
