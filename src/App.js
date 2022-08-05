import { ThemeProvider } from "styled-components";
import { MainDashBoardSection } from "./components/main-dashboard-section";
import { DashboardWrapper } from "./layout/dashboard-wrapper";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DashboardWrapper>
        <MainDashBoardSection />
      </DashboardWrapper>
    </ThemeProvider>
  );
};

export default App;
