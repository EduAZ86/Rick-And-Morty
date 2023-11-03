import Image from 'next/image'
import styles from './page.module.css'
import { Amplify } from 'aws-amplify';
import Button from './components/atoms/buttons';


export default function Home() {

  const button = {
    height:${button.height};
    width:${button.width};
    padding:${button.padding};
    margin:${button.margin};
    justify-content: center;
    background-color:${button.background};        
    border-radius: 0.5rem;
  }

  return (
    <main className={styles.main}>
      <Button
        button={button}
      />
    </main>
  )
}
