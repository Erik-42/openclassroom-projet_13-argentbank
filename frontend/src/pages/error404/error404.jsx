import styles from './error404.module.scss';

export default function Error404() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>404</h1>
      <p className={styles.errorMessage}>Oops! La page que vous cherchez n&apos;existe pas.</p>
      <p className={styles.suggestion}>
        Il semble que vous soyez perdu. Retournez à la <a href="/">page d&apos;accueil</a>.
      </p>
    </div>
  );
}
