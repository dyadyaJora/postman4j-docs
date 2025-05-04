import Link from 'next/link';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.textContainer}>
        <h1 className="headline">
          Postman4j: java library<br className="max-sm:hidden" />
          with HTTP interceptors
        </h1>
        <p className="subtitle">
        Simple Java Library to log yous requests in form of postman collection{' '} 
          <br className="max-md:hidden" />
          which could be easily reused after that in Postman app.{' '}
          <br className="max-md:hidden" />
          Aka slf4j, but for postman data.{' '}
          <br className="max-md:hidden" />
          Use postman models in your application, setup interceptors and automate your HTTP requests workflow with <b>dev.jora.postman4j</b>
        </p>
        <div className={styles.buttonGroup}>
          <Link href="/docs" className="bigButton">
            Get started <span>→</span>
          </Link>
          <Link
            href="https://central.sonatype.com/artifact/dev.jora.postman4j/postman4j-models"
            className="outlineButton"
            target="_blank"
            rel="noopener noreferrer"
            >
            Download
          </Link>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/img-spring.png" alt="Spring Example" className={styles.bottomImage} />
      </div>
    </div>
  );
}
