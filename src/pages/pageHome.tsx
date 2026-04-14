import Container from "../components/conteiner";
import TaskItem from "../coreComponentes/taskItem";
import TasksSummary from "../coreComponentes/tasksSummary";


export default function PageHome() {
  return<Container as="article" className="flex flex-col gap-2.5">
  <header className="flex items-center justify-between">
    <TasksSummary />
  </header>
  <TaskItem />
  </Container>
}