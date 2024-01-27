import './App.css';
import Card from './Card';
import Heading from './Heading';
import Data from './data'
import StartingSection from './StartingSection';

function App() {
  return (
    <>
      <Heading name='For a game watching'/>
      <StartingSection />
    
   <div className="App">
        
        {Data.map(Data => (
          <Card
            image={Data.image}
            name={Data.name}
            des={Data.des}
            link={Data.link} />
        ))}
      </div>
    </>

  );
}

export default App;
