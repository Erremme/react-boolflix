//Context
import { AppdataProvider } from "./context/AppDataContext"
//Component
import Header from "./components/Header"
import Main from "./components/Main"

export default function App(){
  return(
    <AppdataProvider>
      <Header />
      <Main />
    </AppdataProvider>
  )
}