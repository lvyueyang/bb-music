import Link from 'next/link';
import styles from './index.module.scss';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.menu}>
        <Link href='/'>歌单广场</Link>
        <Link href='/my'>我的歌单</Link>
        <Link href='/config'>设置</Link>
        <Link href='/search'>搜索</Link>
      </div>
    </div>
  );
}
