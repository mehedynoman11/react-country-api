
import { Suspense } from 'react';
import './App.css'
import type CountryType from './type';
import Countries from './components/Countries/Countries';

const countriePromise = async():Promise<CountryType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
}

function App() {

  

  return (
    <>
     <div>
      <h1>World on the go.....</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Countries countriesPromise={countriePromise()}></Countries>
      </Suspense>
     </div>
    </>
  )
}

export default App
