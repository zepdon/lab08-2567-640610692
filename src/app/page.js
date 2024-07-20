import Header from "./components/Header";

import Taskinput from "./components/Taskinput";

import Task from "./components/Task";

import Footer from "./components/Footer";

export default function Home() {

  const tasks = [
    {id: 1, title: "Read a book", isDone: true},
    {id: 2, title: "Take a shower", isDone: false},
    {id: 3, title: "Sleep", isDone: false},
  ]

  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
      <Taskinput />

        {/* task */}
        <Task {...tasks[0]}/>
        <Task {...tasks[1]}/>
        <Task {...tasks[2]}/>
      </div>

      {/* //footer section */}
      <Footer year="2023" fullName="Poonnapat Panumonwatee"  studentid="640610692"/>
    </div>
  );
}
