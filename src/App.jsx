// import React, {useEffect} from 'react'
// import {Preorder} from './models'
import Header from './Components/Header'
// import { NestedList } from '@mui/material'
import Lister from './Components/Lister'
import AccountMenu from './Components/AccountMenu'
import DenseTable from './Components/DenseTable'
import SelectList from './Components/SelectList'
import SearchInputBlock from './Components/SearchInputBlock'
import './index.css';

function App() {
  return (<div>
  <div className='Part'>
    <div className='LeftPart'>
      <Header />
      <Lister />
    </div>
    <div className='RightPart'>
      <div className='account'>
        <AccountMenu />
      </div>
      <div className='searchPart'>
        <SearchInputBlock />
        <SelectList />
        {/* <BasicSelect /> */}
      </div>
      <DenseTable /> 
    </div>
  </div>
</div>
  )
}

export default App
