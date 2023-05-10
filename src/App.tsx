import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/pages/Home'
import { Sobre } from './components/pages/Sobre'
import { Contato } from './components/pages/Contato'
import { NotFound } from './components/pages/NotFound'
import { PageLayout } from './layouts/PageLayout'

const App = () => {  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/contato' element={<Contato />} />
          </Route>          
          <Route path='*' element={<NotFound />} /> {/*Se alguém digitar algum endereço diferente dos links ele vai pra notfound*/}
        </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
