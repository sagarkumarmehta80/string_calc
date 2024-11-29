import './App.css';
import StringCalculator from './component/StringCalculator/StringCalculator';

function App() {
    return (
        <div className="App">
            <h1>
                <StringCalculator
                    string="1,4;3
                34"
                />
            </h1>
        </div>
    );
}

export default App;
