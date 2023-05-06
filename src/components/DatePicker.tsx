import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState} from "react"
import Datepicker from "tailwind-datepicker-react";

interface DatePickerProps{
    setDate: React.Dispatch<React.SetStateAction<Date>>
}

const options = {
    title: "DOB",
    autoHide: true,
    todayBtn: false,
    clearBtn: false,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
        background: "bg-gray-200 dark:bg-gray-800",
        todayBtn: "bg-red-100",
        clearBtn: "",
        icons: "bg-gray-200 dark:bg-gray-800 focus:bg-gray-200 dark:focus:bg-gray-800",
        text: "",
        disabledText: "",
        input: "dark:bg-transparent bg-transparent outline-none border-0 md:border",
        inputIcon: "",
        selected: "bg-green-600"
    },
    icons: {
        // () => ReactElement | JSX.Element
        prev: () => <span><FontAwesomeIcon icon={faArrowLeftLong} /></span>,
        next: () => <span><FontAwesomeIcon icon={faArrowRightLong}/></span>
    },
    datepickerClassNames: "relative top-1  ",
    defaultDate: new Date("2022-01-01"),
    language: "en"
}

const DatePicker = ({setDate}:DatePickerProps) => {
    const [show,setShow] = useState < boolean > (false)

    const handleChange = (selectedDate : Date) => {
        setDate(selectedDate)
    }
    const handleClose = (state : boolean) => {
        setShow(state)
    }

    return (
        <div id="dob" className="mb-4 ">
            <Datepicker
                options={options}
                onChange={handleChange}
                show={show}
                setShow={handleClose}/>
        </div>
    )
}

export default DatePicker;