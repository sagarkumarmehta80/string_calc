import './App.css';
import StringCalculator from './component/StringCalculator/StringCalculator';

function App() {
    return (
        <div className="App">
            <StringCalculator
                string="1,14,-3,
            10,-4"
            />
        </div>
    );
}

export default App;
