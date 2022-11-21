import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/loginPage/Login"
import Registracion from "./pages/loginPage/Registracion"
import Today from "./pages/today/Hoje"
import ResetStyle from "./styles/ResetStyle"
import NewEntry from "./components/NewEntry"
import NewOut from "./components/NewOut"
import UserProvider from "./contexts/TokenContext"

export default function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <ResetStyle />
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/cadastro" element={<Registracion />}></Route>
                    <Route path="/hoje" element={<Today />}></Route>
                    <Route path="/entrada" element={<NewEntry />}></Route>
                    <Route path="/saida" element={<NewOut />}></Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}