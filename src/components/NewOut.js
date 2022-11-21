import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TokenContext } from "../contexts/TokenContext"
import styled from "styled-components"
import axios from "axios"

export default function NewOut() {
    const { token } = useContext(TokenContext)
    const navigate = useNavigate()

    const [form, setForm] = useState({ value: "", description: "" })
    function fillForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function sendOut(e) {
        e.preventDefault()
        const URL = "https://my-wallet-ccyq.onrender.com/user"
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const object = {
            description: form.description,
            value: form.value,
            type: "saida"
        }
        const promise = axios.post(URL, object, config)
        promise.then(res => {
            navigate("/hoje")
        })
        promise.catch(err => {
            console.log(err)
        })
    }

    return (
        <Container>
            <div>Nova saida</div>
            <form onSubmit={sendOut}>
                <input placeholder="Valor"
                    type="number"
                    value={form.value}
                    name="value"
                    onChange={fillForm} />
                <input placeholder="Descrição"
                    type="text"
                    value={form.description}
                    name="description"
                    onChange={fillForm} />
                <button type="submit">Salvar Saída</button>
            </form>
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
        width: 80vh;
        height: 58px;
        margin-bottom: 13px;
        text-align: center;
        border-radius: 5px;
        border: none;
        font-size: 20px;
        font-weight: 700;
        color: white;
        cursor: pointer;
    }
    
`
