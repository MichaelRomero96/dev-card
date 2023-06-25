import styles from './styles.module.css';

const RedesIconWrapper = ({ children, hideBg }) => {
  return (
    <span
      className={`${!hideBg ? styles['wrapper-footer'] : ''}  ${
        styles['wrapper-btn-header']
      } ${styles['svg']} ${styles['svg-bg']}
      `}
    >
      {children}
    </span>
  );
};

export default RedesIconWrapper;
