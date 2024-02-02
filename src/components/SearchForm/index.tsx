'use client';
import styles from './index.module.scss';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'querystring';

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState('');
  const searchHandler = () => {
    if (!value.trim()) return;
    router.push(
      `/search?${qs.stringify({
        keyword: value.trim(),
        page: searchParams.get('page') || '1',
      })}`
    );
  };
  return (
    <div className={styles.searchForm}>
      <input
        type='text'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder='请输入要搜索的歌曲名称'
        onKeyUp={(e) => {
          if (e.code === 'Enter') {
            searchHandler();
          }
        }}
      />
      <button onClick={searchHandler}>搜索</button>
    </div>
  );
}
