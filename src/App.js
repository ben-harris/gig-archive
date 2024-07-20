import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {AddGigForm} from './form/AddGigForm'

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <header className="App-header">
          <h1 className="App-title">Gig Archiver</h1>
        </header>
        <div className='App-body'>
          <AddGigForm />
        </div>
      </LocalizationProvider>
    </div>
  );
}

export default App;
