import GlobalStyles from './styles/global';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';

export const Dashboard = () => {

  return (
    <>
      <Sidebar />
      <Main />
      <GlobalStyles />
    </>
  );

}