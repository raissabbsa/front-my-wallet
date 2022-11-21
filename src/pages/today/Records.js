import styled from "styled-components"
import List from "./List"

export default function Records({infos}){
    if(infos.length>0){
        let soma =0
        infos.forEach(element => {
            if(element.type === "entrada"){
                soma+=Number(element.value)
            }
            else{
                soma-=Number(element.value)
            }
        });
        return(
            <ContainerItems>
                {infos.map((items) => <List key={items._id} items={items}/>)}
                <Saldo soma = {soma}>
                    <p>Saldo</p>
                    <h1>{soma.toFixed(2)}</h1>

                </Saldo>
            </ContainerItems>
            )

    }else{
        return(
            <Container>
                <p>Não há registros de entrada ou saída</p>
            </Container>
        )
    }
    
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    width: 70vh;
    height: 40vh;
    background-color: #FFFFFF;
    &>p{
        color: #868686;
        margin: auto;
        font-weight: 400;
    }
    border-radius: 10px;
`
const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 20px;
    width: 70vh;
    background-color: #FFFFFF;
    border-radius: 10px;
`
const Saldo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    &>p{
        color: #000000;

    }
    &>h1{
        color: ${props => props.soma > 0 ? "#03AC00" : "#C70000"};
        font-weight: 400;
    }
`
 