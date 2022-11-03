import './App.css';
import CustomButton from './components/CustomButton';

function App() {
  return (
    <div className="flex flex-col gap-4">
      {['Button1', 'Button2', 'Button3'].map((item) => (
        <CustomButton buttonText={item} />
      ))}
    </div>
  );
}

export default App;
