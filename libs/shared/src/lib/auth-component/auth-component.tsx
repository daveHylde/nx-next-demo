import styles from './auth-component.module.scss';

/* eslint-disable-next-line */
export interface AuthComponentProps {}

export function AuthComponent(_props: AuthComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AuthComponent with more content!</h1>
    </div>
  );
}

export default AuthComponent;
