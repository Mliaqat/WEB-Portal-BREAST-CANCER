import React from 'react';
import VerticalCard from '../../../CommnonStyle/Card/VerticalCard';
import { AdminDashboardStyle } from './AdminDashboard.style';
import cancerimg from "../../../../Asset/images/cancer.png"
import patentimg from "../../../../Asset/images/patient.png"
import doctorimg from "../../../../Asset/images/doctor.png"
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto';








function AdminDashboard() {

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


    const options = {
        title: {
            display: true,
            text: 'Doughnut Chart'
        }
    }


    return (
        <AdminDashboardStyle>
            <article className='Cards'>
                <VerticalCard icon={cancerimg} label="Total Cases" count="324" />
                <VerticalCard icon={patentimg} label="Total Patient" count="324" />
                <VerticalCard icon={doctorimg} label="Total Doctor" count="324" />
            </article>

            <article className='chartlayouts'>
                <article className='charts'>
                    <Doughnut data={data} options={options} />
                </article>
                <article className='charts'>
                    <Doughnut data={data} options={options} />
                </article>
            </article>


        </AdminDashboardStyle>);
}

export default AdminDashboard;
