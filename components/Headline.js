import styles from '@/styles/Home.module.css'

export function Headline(props) {

  return (
    <>
      <p>
        {props.page} Get started by editing&nbsp;
        <code className={styles.code}>pages/{props.page}.js</code>
      </p>
    </>
  );
}


