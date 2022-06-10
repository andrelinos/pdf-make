const TabelaMes = () => {
    const array = [
        {
            mes: 'Janeiro',
            dias: [
                { item: 1, value: '10' },
                { item: 2, value: '11' },
                { item: 3, value: '12' },
                { item: 4, value: '13' },
                { item: 5, value: '10' },
                { item: 6, value: '11' },
                { item: 7, value: '12' },
                { item: 8, value: '13' },
            ],
        },
        {
            mes: 'Fevereiro',
            dias: [
                { item: 1, value: '10' },
                { item: 2, value: '11' },
                { item: 3, value: '12' },
                { item: 4, value: '13' },
            ],
        },
        {
            mes: 'Março',
            dias: [
                { item: 1, value: '10' },
                { item: 2, value: '11' },
                { item: 3, value: '12' },
                { item: 4, value: '13' },
                { item: 5, value: '10' },
                { item: 6, value: '11' },
                { item: 7, value: '12' },
                { item: 10, value: '13' },
            ],
        },
        {
            mes: 'Abril',
            dias: [
                { item: 1, value: '120' },
                { item: 2, value: '112' },
                { item: 3, value: '125' },
                { item: 4, value: '132' },
                { item: 5, value: '106' },
                { item: 6, value: '119' },
                { item: 7, value: '127' },
                { item: 10, value: '183' },
            ],
        },
        {
            mes: 'Maio',
            dias: [
                { item: 1, value: '120' },
                { item: 2, value: '112' },
                { item: 3, value: '125' },
                { item: 4, value: '132' },
                { item: 5, value: '106' },
                { item: 6, value: '119' },
                { item: 7, value: '127' },
                { item: 10, value: '183' },
            ],
        },
        {
            mes: 'Junho',
            dias: [
                { item: 1, value: '120' },
                { item: 2, value: '112' },
                { item: 3, value: '125' },
                { item: 4, value: '132' },
                { item: 5, value: '106' },
                { item: 6, value: '119' },
                { item: 7, value: '127' },
                { item: 10, value: '183' },
            ],
        },
        {
            mes: 'Julho',
            dias: [
                { item: 1, value: '120' },
                { item: 2, value: '112' },
                { item: 3, value: '125' },
                { item: 4, value: '132' },
                { item: 5, value: '106' },
                { item: 6, value: '119' },
                { item: 7, value: '127' },
                { item: 10, value: '183' },
            ],
        },
        {
            mes: 'Agosto',
            dias: [
                { item: 1, value: '120' },
                { item: 2, value: '112' },
                { item: 3, value: '125' },
                { item: 4, value: '132' },
                { item: 5, value: '106' },
                { item: 6, value: '119' },
                { item: 7, value: '127' },
                { item: 10, value: '183' },
            ],
        },
        {
            mes: 'Setembro',
            dias: [
                { item: 1, value: '120' },
                { item: 2, value: '112' },
                { item: 3, value: '125' },
                { item: 4, value: '132' },
                { item: 5, value: '106' },
                { item: 6, value: '119' },
                { item: 7, value: '127' },
                { item: 10, value: '183' },
            ],
        },
        {
            mes: 'Outubro',
            dias: [
                { item: 1, value: '120' },
                { item: 2, value: '112' },
                { item: 3, value: '125' },
                { item: 4, value: '132' },
                { item: 5, value: '106' },
                { item: 6, value: '119' },
                { item: 7, value: '127' },
                { item: 10, value: '183' },
            ],
        },
        {
            mes: 'Novembro',
            dias: [
                { item: 1, value: '120' },
                { item: 2, value: '112' },
                { item: 3, value: '125' },
                { item: 4, value: '132' },
                { item: 5, value: '106' },
                { item: 6, value: '119' },
                { item: 7, value: '127' },
                { item: 10, value: '183' },
            ],
        },
        {
            mes: 'Dezembro',
            dias: [
                { item: 1, value: '120' },
                { item: 2, value: '112' },
                { item: 3, value: '125' },
                { item: 4, value: '132' },
                { item: 5, value: '0' },
                { item: 6, value: '119' },
                { item: 7, value: '127' },
                { item: 10, value: '183' },
            ],
        },
    ];

    const valor = (mes: string, dia: number) => {
        // Aqui pega o valor referente à coluna do mês par fazer o map
        const dadosMes = array.find((a) => a.mes === mes);
        if (!dadosMes) return '0';

        // Aqui faz uma busca do valor referente ao dia do mês encontrado
        return dadosMes.dias.find((d) => Number(d.item) === dia)?.value || '0';
    };

    return (
        <table
            style={{
                backgroundColor: '#eee',
                margin: ' 0 auto',
                width: '100%',
                maxWidth: '1200px',
                fontSize: '1rem',
            }}
        >
            <thead>
                <tr
                    style={{
                        backgroundColor: '#777',
                        color: '#fff',
                        width: '100%',
                        border: '1px solid #fff',
                    }}
                >
                    <th
                        style={{
                            border: '1px solid #fff',
                        }}
                    >
                        Dias
                    </th>
                    {/* Aqui faz um map pegando todos os meses encontrados no array para listar */}
                    {array.map((m) => (
                        <th
                            style={{
                                border: '1px solid #fff',
                            }}
                        >
                            {m.mes}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {Array(31)
                    .join()
                    .split(',')
                    .map((_d, idx) => (
                        <tr
                            style={{
                                border: '1px solid #fff',
                            }}
                        >
                            <td
                                style={{
                                    border: '1px solid #fff',
                                    textAlign: 'center',
                                }}
                            >
                                {idx + 1}
                            </td>
                            {array.map((m) => (
                                <td
                                    style={{
                                        border: '1px solid #fff',
                                        textAlign: 'right',
                                        paddingRight: '1rem',
                                        paddingLeft: '1rem',
                                    }}
                                >
                                    {valor(m.mes, idx + 1)}
                                    {/* Lista os valores com base no mês e o index da linha */}
                                </td>
                            ))}
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default TabelaMes;
