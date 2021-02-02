import './App.css';
import styles from './App.module.css';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div className={styles.App}>
      <Projects />
      <p className={styles.blueText}>Hello world</p>
    </div>
  );
}

export default App;
