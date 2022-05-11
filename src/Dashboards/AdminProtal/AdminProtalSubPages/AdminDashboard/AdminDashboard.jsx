import React, { useState, useEffect } from "react";
import axios from "axios";
import VerticalCard from '../../../CommnonStyle/Card/VerticalCard';
import { AdminDashboardStyle } from './AdminDashboard.style';
import cancerimg from "../../../../Asset/images/cancer.png"
import patentimg from "../../../../Asset/images/patient.png"
import doctorimg from "../../../../Asset/images/doctor.png"
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto';


function AdminDashboard() {


    const usercount = `${process.env.REACT_APP_BASE_URL}/users/get/count`;
    const [ucount, setucount] = useState();

    useEffect(() => {
        getuser();
    }, []);

    const getuser = async () => {
        await axios.get(usercount).then((res) => {
            setucount(res.data.userCount);
          
        });
    };



    const data = {
        labels: ['Patient', 'Doctor'],
        datasets: [
            {
                label: 'Sales 2020 (M)',
                data: [6, 4],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)'
                ]
            }
        ]
    }
    const data2 = {
        labels: ['Benign', 'Miglanant'],
        datasets: [
            {
                label: 'Sales 2020 (M)',
                data: [2, 8],
                backgroundColor: [
                    '#ff63b9',
                    '#ff6f56'
                ]
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Doughnut Chart'
        }
    }




    return (
        <AdminDashboardStyle>
            <article>
               <p className="ms-3 mb-2"> Home&gt;Dashboard </p>
            </article>
            <article className='Cards'>
                <VerticalCard icon={cancerimg} label="Total Cases" count={ucount} />
                <VerticalCard icon={patentimg} label="Total Patient" count="23" />
                <VerticalCard icon={doctorimg} label="Total Doctor" count="12" />
            </article>

            <article className='chartlayouts'>
                <article className='charts mx-5'>
                    <h2 className='text-center mb-5'>Number of User</h2>
                    <Doughnut data={data} options={options} />
                </article>
                <article className='charts mx-5'>
                    <h2 className='text-center mb-5'>Number of Cases</h2>
                    <Doughnut data={data2} options={options} />
                </article>
            </article>


        </AdminDashboardStyle>);
}

export default AdminDashboard;
