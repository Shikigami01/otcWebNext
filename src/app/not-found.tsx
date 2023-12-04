import styles from './styles.module.scss';

const CustomError = () => {
  return (
    <div className={styles.errorWrapper}>
      <p>ページが見つかりませんでした</p>
      <p>Page Not Found</p>
    </div>
  );
};

export default CustomError;
