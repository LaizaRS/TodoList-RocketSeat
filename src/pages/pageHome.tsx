import Container from "../components/conteiner";

import TaskList from "../coreComponentes/tasksList";
import TasksSummary from "../coreComponentes/tasksSummary";


export default function PageHome() {
  return<Container as="article" className="space-y-3">
  <header className="flex items-center justify-between">
    <TasksSummary />
  </header>
  <TaskList />
  </Container>
}