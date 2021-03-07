import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss'

// Components
import Game from './pages/Game';
import MainPage from './pages/Main';
import Results from './pages/Results';
import Settings from './pages/Settings';
import { initial_basic_feild } from './redux/actions/gameField.action';
import { initial_results } from './redux/actions/gameResults.action';
import { initial_settings } from './redux/actions/gameSettings.action';
import { IRootState } from './redux/rootReducer';
import { GameSettings } from './redux/types/stateTypes';

const App: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch()
  const {
        size, countPairs
    } = useSelector<IRootState, GameSettings>(state => (
        state.gameSettingsReducer
    ))
  useEffect(() => {
    const Reloaded  = function(){
      dispatch(initial_results())
      dispatch(initial_settings())
      dispatch(initial_basic_feild(size, countPairs))
    }

      window.onload = function() {
        var loaded = sessionStorage.getItem('loaded');
        if(loaded) {
          Reloaded();
        } else {
          // @ts-ignore
          sessionStorage.setItem('loaded', true);
        }
    }
  }, [])

  const {
      currentTheme,
      themes
    } = useSelector<IRootState, GameSettings>(
        (state: IRootState) => state.gameSettingsReducer
    )
  return (
    <div className="app" data-theme={themes[currentTheme].name}>
      <Router>
        <Route
          path='/'
          exact
          component={MainPage}
        />
        <Route
          path='/game'
          component={Game}
        />
        <Route
          path='/results'
          component={Results}
        />
        <Route
          path='/settings'
          component={Settings}
        />
      </Router>
    </div>
  );
}

export default App;
