import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

export function Xls() {
    const [dados, setDados] = useState([] as any);

    useEffect(() => {
        async function loadData() {
            const url = 'https://sheetjs.com/executive.json';
            const raw_data = await (await fetch(url)).json();

            /* filter for the Presidents */
            const prez = raw_data.filter((row: { terms: any[] }) =>
                row.terms.some(
                    (term: { type: string }) => term.type === 'prez',
                ),
            );

            setDados(prez);
        }
        loadData();
    }, []);

    async function handleExportXls() {
        const url = 'https://sheetjs.com/executive.json';
        const raw_data = await (await fetch(url)).json();

        /* filter for the Presidents */
        const prez = raw_data.filter((row: { terms: any[] }) =>
            row.terms.some((term: { type: string }) => term.type === 'prez'),
        );

        setDados(prez);

        /* flatten objects */
        const rows = prez.map(
            (row: {
                id: { govtrack: any };
                name: { first: string; last: string };
                bio: { birthday: any; gender: any };
                terms: {
                    start: any;
                    end: any;
                }[];
            }) => ({
                id: row.id.govtrack,
                name: row.name.first + ' ' + row.name.last,
                birthday: row.bio.birthday,
                bio: row.bio.gender,
                start: row.terms[0].start,
                end: row.terms[0].end,
            }),
        );

        /* generate worksheet and workbook */
        const worksheet = XLSX.utils.json_to_sheet(rows);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Dates');

        /* fix headers */
        XLSX.utils.sheet_add_aoa(
            worksheet,
            [['Id', 'Nome', 'Nascimento', 'Sexo', 'Início', 'Fim']],
            {
                origin: 'A1',
            },
        );

        /* calculate column width */
        const max_width = rows.reduce(
            (w: number, r: { id: string | any[] }) => Math.max(w, r.id.length),
            10,
            20,
            10,
            10,
        );
        worksheet['!cols'] = [{ wch: max_width }];

        /* create an XLSX file and try to save to Presidents.XLSX */
        XLSX.writeFile(workbook, 'Example.xlsx');
    }

    return (
        <div className="flex w-full justify-center flex-col">
            <table>
                <tr className="text-center border-[2px] bg-slate-600 text-white">
                    <th className="text-center border-[2px] ">id</th>
                    <th className="text-center border-[2px] ">Nome</th>
                    <th className="text-center border-[2px] ">Nascimento</th>
                    <th className="text-center border-[2px] ">Sexo</th>
                    <th className="text-center border-[2px] ">Início</th>
                    <th className="text-center border-[2px] ">Fim</th>
                </tr>

                {dados?.map((item: any) => (
                    <tr className="text-center border-[2px] ">
                        <td className="text-center border-[2px] ">
                            {item.id.govtrack}
                        </td>
                        <td className="text-center border-[2px] ">
                            {item.name.first}
                        </td>
                        <td className="text-center border-[2px] ">
                            {item.bio.birthday}
                        </td>
                        <td className="text-center border-[2px] ">
                            {item.bio.gender}
                        </td>
                        <td className="text-center border-[2px] ">
                            {item.terms[0].start}
                        </td>
                        <td className="text-center border-[2px] ">
                            {item.terms[0].end}
                        </td>
                    </tr>
                ))}
            </table>
            <button
                className="w-64 h-12 rounded-md bg-blue-500 text-white my-4 mx-auto"
                onClick={handleExportXls}
            >
                Exportar XLSX
            </button>
        </div>
    );
}
