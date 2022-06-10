import { dados } from '../services/api';
const Tabela = () => {
    const valor = (codccust: string, coddesp: string) => {
        const dadosMes = dados.find((a) => a.ccDespesa.codccust === codccust);
        if (!dadosMes) return '0';

        return (
            dadosMes.ccDespesa.despesas.find((d) => d.coddesp === coddesp)
                ?.valor || '0'
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
                {dados[0].ccDespesa.despesas.map(({ coddesp }, index) => (
                    <tr key={index}>
                        <td>{coddesp}</td>
                        {dados.map((m, idx) => (
                            <td key={idx}>
                                {valor(m.ccDespesa.codccust, coddesp)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Tabela;
