import React from 'react';
import styles from './styled.module.scss';

const Loading = () => {
   return (
      <div id={styles.Loading}>
         <svg width="200" height="200" viewBox="0 0 40 60">
            <polygon
               className={styles.poly}
               fill="none"
               stroke="#000"
               points="16,1 32,32 1,32"
            />
            <text className={styles.textLoading} x="-2" y="40">
               Carregando...
            </text>
         </svg>
      </div>
   );
};

export default Loading;
