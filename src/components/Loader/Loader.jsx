import { ColorRing } from 'react-loader-spinner';

import styles from './Loader.module.css';


export const Loader = () => {
  <div className={styles.ColorRing}>
    <ColorRing
      height="200"
      width="200"
      radius="48"
      arialabel="blocks-loading"
    />
  </div>
}
