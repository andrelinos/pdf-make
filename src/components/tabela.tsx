import { dados } from '../services/api';
const Tabela = () => {
    const valor = (mes: string, dia: number) => {
        const dadosMes = dados.find((a) => a.ccDespesa.codccust === mes);
        if (!dadosMes) return '0';

        return (
            dadosMes.ccDespesa.despesas.find((d) => d.coddesp == dia)?.valor ||
            ''
        );
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Dias</th>
                    {dados.map((m) => (
                        <th key={m.ccDespesa.codccust}>
                            {m.ccDespesa.codccust}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dados[0].ccDespesa.despesas.map((despesa, idx) => (
                    <tr>
                        <td>{despesa.coddesp}</td>
                        {dados.map((m) => (
                            <td>{valor(m.ccDespesa.codccust, idx + 1)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Tabela;
