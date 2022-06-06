import './App.css';
import { PdfMake } from './components/pdfmake';

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
    return <PdfMake />;
}

export default App;
