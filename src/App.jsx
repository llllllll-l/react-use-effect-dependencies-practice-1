import { useEffect, useState } from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  //console.log({ data });

  // Write code here.
  //
  useEffect(() => {
    const fetchData = async () => {
      //console.log("fetchData");
      try {
        if (dataType) {
          //console.log(`Fetching data for ${dataType}`);
          const req = await fetch(`https://swapi.dev/api/${dataType}/`);
          const res = await req.json();
          //console.log(`Data for ${dataType}:`, jsonData);
          setData(res);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dataType]);

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
