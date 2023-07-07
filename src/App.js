import './App.css';
import Button from './component/Button';
import CardSection from './component/CardSection';
import Sidebar from './component/Sidebar';
import Table from './component/Table';

function App() {

  const buttoncol = <>
    <Button text="Approve" />
    <Button text="Reject" />
  </>

  const table1 = {
    header: "Buckets you own",
    row: [
      { rowname: "Name" }, { rowname: "Budget" }, { rowname: "Spend" }, { rowname: "Forecast" }
    ],
    col: [
      [{ data: "ACME Corp", classname: "namecolor setwidth" }, { data: "$ 200,000" }, { data: "173762" }, { data: "205049" }],
      [{ data: "Raman Inc", classname: "namecolor setwidth" }, { data: "$ 200,001" }, { data: "124,762" }, { data: "292,629" }],
    ]
  };

  const table2 = {
    header: "Approvals assigned to you",
    row: [
      { rowname: "Bucket Name" }, { rowname: "Current Budget" }, { rowname: "Requested Budget" }, { rowname: "requested By" }, { rowname: "" }
    ],
    col: [
      [{ data: "ACME Corp", classname: "namecolor" }, { data: "$ 200,000" }, { data: "250,000" }, { data: "Joe Hilfinger", classname: "namecolor" }, { data: buttoncol }]
    ]
  }

  const table3 = {
    header: "Buckets you are member of",
    row: [
      { rowname: "Name" }, { rowname: "Budget" }, { rowname: "Spend" }, { rowname: "Forecast" }
    ],
    col: [
      [{ data: "Longate", classname: "namecolor setwidth" }, { data: "$ 200,000" }, { data: "173,762" }, { data: "205,049" }]
    ]
  };

  return (
    <div className="App">
      <Sidebar/>
      <div id='rightsection'>
        <h1>Hi, Jennie Moss</h1>
        <CardSection />
        <Table tabledata={table1} />
        <Table tabledata={table2} />
        <Table tabledata={table3} />
      </div>
    </div>
  );
}

export default App;
