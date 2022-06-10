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
    ];

    const valor = (mes: string, dia: number) => {
        const dadosMes = array.find((a) => a.mes === mes);
        if (!dadosMes) return '0';

        return dadosMes.dias.find((d) => Number(d.item) === dia)?.value || '';
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Dias</th>
                    {array.map((m) => (
                        <th>{m.mes}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {Array(31)
                    .join()
                    .split(',')
                    .map((_d, idx) => (
                        <tr>
                            <td>{idx + 1}</td>
                            {array.map((m) => (
                                <td>{valor(m.mes, idx + 1)}</td>
                            ))}
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default TabelaMes;
