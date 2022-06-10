import { useEffect, useState } from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

interface ListProps {
    name: string;
    username: string;
    email: string;
    website: string;
}

interface reportTitleProps {
    text: string;

    fontSize: number;
    bold: boolean;
    margin: any;
}
[];

export function PdfMake() {
    const [data, setData] = useState<ListProps[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    const lista = data.map((item) => {
        return [
            { text: item.name, fontSize: 9, margin: [0, 2, 0, 2] },
            {
                text: item.username,

                fontSize: 9,
                margin: [0, 2, 0, 2],
            },
            { text: item.email, fontSize: 9, margin: [0, 2, 0, 2] },
            {
                text: item.website,

                fontSize: 9,
                margin: [0, 2, 0, 2],
            },
        ];
    });

    // Define a compatibilidade de fonts
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle: reportTitleProps[] = [
        {
            text: 'Clientes',

            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45], // Left Top Right Bottom
        },
    ];
    const details: any[] = [
        {
            table: {
                headerRows: 1,
                widths: ['*', '*', '*', '*'], // Largura automática para as colunas
                body: [
                    [
                        { text: 'Nome', style: 'tabletHeader', fontSize: 10 },
                        {
                            text: 'Usuário',
                            style: 'tabletHeader',
                            fontSize: 10,
                        },
                        { text: 'E-mail', style: 'tabletHeader', fontSize: 10 },
                        {
                            text: 'Website',
                            style: 'tabletHeader',
                            fontSize: 10,
                        },
                    ],
                    ...lista,
                ],
            },
            layout: 'headerLineOnly',
        },
        {
            margin: [16, 24, 16, 8],
            fontSize: 28,
            text: 'Para mais informações, leia código QR usando a câmera do seu celular',
            bold: true,
        },
        'Mixing named styles and style-overrides We can also mix named-styles and style-overrides at both paragraph and',

        { margin: [16, 24, 16, 8], qr: 'text in QR', fit: '100' },
    ];
    function Footer(currentPage: number, pageCount: number) {
        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'right',
                fontSize: 9,
                bold: true,
                margin: [0, 10, 20, 0], // Left Top Right Bottom
            },
        ];
    }

    function handlePdfCreate() {
        const docDefinitions: any = {
            // Configurações da página (Saída)
            pageSize: 'A4',
            pageMargins: [12, 50, 15, 40], // Left Top Right Bottom

            header: [reportTitle],
            content: [details],
            footer: Footer,
        };

        // Criar o pdf
        pdfMake.createPdf(docDefinitions).download();
    }

    return (
        <div className="App w-full p-6 flex flex-col bg-slate-100">
            <span className="my-14 font-bold text-2xl">
                Exemplo de criação de PDF
            </span>
            <table className="w-full table-auto text-left max-w-6xl mx-auto">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Usuário</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                className="mt-8 bg-blue-500 w-56 h-12 rounded-md mx-auto"
                type="button"
                onClick={handlePdfCreate}
            >
                Criar PDF
            </button>
        </div>
    );
}
