import { UseState } from "./base/hook/UseState"
import Calendar from "./component/Calendar"


function App() {
  return (
    <>
      {/* <UseState /> */}
      <Calendar onChange={(date) => {
        console.log(date.toLocaleDateString())

      }} />
      <Calendar defaultValue={new Date('2023-5-6')} />
      <Calendar defaultValue={new Date('2025-5-6')} />
    </>
  )
}

export default App
