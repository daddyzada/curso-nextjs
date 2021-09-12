import Linha from "./miniComponents/Linha";

const Tabuleiro = () => {
     return (
         <div>
             <Linha />
             <Linha preta />
             <Linha />
             <Linha preta />
             <Linha />
             <Linha preta />
             <Linha />
             <Linha preta />
         </div>
     )
}

export default Tabuleiro;