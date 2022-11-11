import React, { useContext, useState, useEffect } from 'react';

export default function Accueil() {
  const [storage, setStorage] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const appStorage = window.localStorage.getItem('appStorage');
      const JsonEncoder = JSON.parse(appStorage);
      console.log('encoder', JsonEncoder);
      setStorage(JsonEncoder);
    }
  }, []);

  console.log(storage);
  return (
    <div>
      <h1>bonjour{storage.email}</h1>
    </div>
  );
}
