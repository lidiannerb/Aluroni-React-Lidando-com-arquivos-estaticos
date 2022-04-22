import React from "react";
import filtros from "./filtros.json";
import styles from "./Filtros.module.scss";

type IOpcao = typeof filtros[0];

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro}: Props) {

    function selecionarFiltro(opcao: IOpcao) {

    }
    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
            <button className={styles.filtros__filtro} 
            key={opcao.id} 
            onClick={() => selecionarFiltro(opcao)}>
        
            {opcao.label}
            </button>
            ))}
        </div>
    );
}