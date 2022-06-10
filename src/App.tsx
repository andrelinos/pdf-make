import './App.css';

import { PdfMake } from './components/pdfmake';
// import Tabela from './components/tabela';
// import Tabela2 from './components/tabela2';
// import TabelaMes from './components/tabelames';
import { Xls } from './components/xlsx';

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

function App() {
    return (
        <div className="flex flex-col items-center">
            {/* <Tabela2 />
            <Tabela /> */}
            {/* <TabelaMes /> */}
            <PdfMake />
            <h1 className="py-5 font-bold text-center">
                Não tem nada a ver com os dados acima
            </h1>
            <Xls />
        </div>
    );
}

export default App;
