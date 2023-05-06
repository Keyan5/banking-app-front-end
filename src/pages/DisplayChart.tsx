import { useState } from "react";
import {Chart as ChartJS} from "chart.js/auto";
import {UserData} from "../assets/data.js";
import LineChart from "../components/LineChart.js";


const DisplayChart = () => {
    const [userData,setUserData] = useState({
        labels: UserData.map((data:any) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data:any) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)", "#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });

    console.log(userData);

    // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

    return (
        <div className="App">
            <div style={{
                width: 700
            }}>
                <LineChart chartData={userData}/>
            </div>
        </div>
    );
}

export default DisplayChart