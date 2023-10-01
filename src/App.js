import './App.css';
import Expenses from './components/Expenses/Expenses';
import { Button } from 'reactstrap'; // Replace 'your-ui-library' with the actual library you are using for buttons

function App() {
  return (
    <>
      <Expenses />
    
      <div>
        <Button color="primary">
          Click Me
        </Button>
      </div>
    </>
  );
}

export default App;
