import styled from "@emotion/styled"

const StyledSpan = styled.span`
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    margin: ${props => props.theme.espacamentos.xs};
    height: 40px;
    border-radius: ${props => props.theme.espacamentos.s};
    border: 1px solid ${props => props.theme.cores.neutras.a};
    background: ${props => props.theme.cores.neutras.c};
    color: ${props => props.theme.cores.neutras.a};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    display: inline-block;
    box-sizing: border-box;

    &:hover {
        border-color: ${props => props.theme.cores.primarias.b};
        background-color: ${props => props.theme.cores.secundarias.b};
        color: ${props => props.theme.cores.primarias.b};
        cursor: pointer;
    }
`


const Chip = ({children}) => {
    return (
        <StyledSpan>
            {children}
        </StyledSpan>
    )
}

export default Chip;