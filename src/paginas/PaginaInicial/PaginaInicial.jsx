import { Col, Container } from "react-grid-system";
import Chip from "../../componentes/Chip/Chip";
import Banner from "./Banner/Banner";
import { cardsClientes, cardsFreelas, habilidades } from "./dados";
import Bloco from "./Bloco";
import CardCliente from "./Vantagens/cards/CardCliente";
import CardFreela from "./Vantagens/cards/CardFreela";


const PaginaInicial = () => {
    return (
    <>
    <Banner />
    <Container>
        <Bloco cards={cardsClientes} titulo="Vantagens para contratantes">
            {cardsClientes.map((card) => {
                return <CardCliente key={card.texto} icone={card.icone} texto={card.texto}  />
            })}
        </Bloco>
        <Bloco cards={cardsFreelas} titulo="Vantagens para freelas">
            {cardsFreelas.map(card => {
                return <CardFreela key={card.texto} icone={card.icone} texto={card.texto} />
            })}
        </Bloco>
        <Bloco titulo="Quais habilidades você encontra por aqui?">
            <Col sm={12}>
                {habilidades.map(habilidade => {
                    return <Chip key={habilidade}>{habilidade}</Chip>
                })}
            </Col>
        </Bloco>
    </Container>
    </>
    )
}

export default PaginaInicial;