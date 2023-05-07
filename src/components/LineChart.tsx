import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from 'chart.js';
import {Line} from 'react-chartjs-2';

interface LineChartProps{
    datum: number[]
    labels: string[]
    label: string
    backgroundColor: string
    borderColor: string
    title: string
}


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend,);


const LineChart = ({datum,labels,label,backgroundColor,borderColor,title}:LineChartProps) => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const
            },
            maintainAspectRatio:false,
            title: {
                display: true,
                text: title
            }
        },
        scales: {
            y: {
                suggestedMin: 0
            }
        }
    };
    
    
    const data = {
        labels,
        datasets: [
            {
                label,
                fill:true,
                tension: 0.47,
                data: datum,
                borderColor,
                backgroundColor: backgroundColor,
            }
        ]
    };
    return (
        <div className='bottom-3 flex justify-center items-center h-64 sm:72 md:h-96 '>
            <Line options={options} data={data}/>
        </div>
    );
};

export default LineChart;
