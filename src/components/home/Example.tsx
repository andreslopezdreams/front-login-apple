'use client';
import { apiQuery, apiQueryTk } from '@/app/utils/api/api';
import { useEffect, useState } from 'react';
import { LogoIcon } from '../icons/LogoIcon';

export const Example = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log('Example component mounted');

    const fetchData = async () => {
      try {
        const response = await apiQueryTk('/members/user/password/params');
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='example'>
      <LogoIcon />
      <p>Example</p>
      {JSON.stringify(data)}
    </div>
  );
};
