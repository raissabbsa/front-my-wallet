import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { TokenContext } from "../../contexts/TokenContext"
import { useContext } from "react"
import axios from "axios"
import { useState } from "react"

export default function Login(){
    const navigate = useNavigate()
    const {setToken} = useContext(TokenContext)
    const [form,setForm] = useState({email:"", password:""})
    const [loading, setLoading] = useState(false)

    function fillForm(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function login(e){
        e.preventDefault()
        setLoading(true)
        const URL = "https://my-wallet-ccyq.onrender.com/sign-in"
        const promise = axios.post(URL, form)
        promise.then(res => {
            navigate("/hoje")
            setToken(res.data.token)
        })
        promise.catch(err => {
            setLoading(false)  
            alert(err.response.data.message)}
        )
    }

    return(
    <Container>
        <div>MyWallet</div>
        <form onSubmit={login}>
            <input placeholder="E-mail"
                type="email"
                value={form.email}
                name="email"
                onChange={fillForm}
                disabled={loading ? "disabled" : ""}
            />
            <input placeholder="Senha"
                type="password"
                value={form.password}
                name="password"
                onChange={fillForm}
                disabled={loading ? "disabled" : ""}
            />
            <button type="submit" disabled={loading ? "disabled" : ""}>Entrar</button>
        </form>
        <p onClick={() => navigate("/cadastro")}>Primeira vez? Cadastre-se!</p>

    </Container>)
}

const Container = styled.div`
    background-color: #9257BE;
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &>div{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: white;
        margin-bottom: 24px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    
    input{
        width: 80vh;
        height: 58px;
        margin-bottom: 13px;
        border-radius: 5px;
        border: none;
        font-size: 18px;
        padding: 10px;
    }

    button{
        background-color: #A863D6;
        width: 83vh;
        height: 58px;
        margin-bottom: 13px;
        text-align: center;
        border-radius: 5px;
        border: none;
        font-size: 20px;
        color: white;
        cursor: pointer;
    }
    &>p{
        margin-top: 20px;
        font-size: 20px;
        color: white;
        font-weight: 700;
        cursor: pointer;
    }
`