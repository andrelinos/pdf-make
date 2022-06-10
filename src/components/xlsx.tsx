import * as XLSX from 'xlsx';

export function Xls() {
    async function handleExportXls() {
        const url = 'https://sheetjs.com/executive.json';
        const raw_data = await (await fetch(url)).json();

        /* filter for the Presidents */
        const prez = raw_data.filter((row: { terms: any[] }) =>
            row.terms.some((term: { type: string }) => term.type === 'prez'),
        );

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
        <div className="flex w-full justify-center">
            <button
                className="w-64 h-10 bg-blue-500 text-white"
                onClick={handleExportXls}
            >
                Exportar XLSX
            </button>
        </div>
    );
}
