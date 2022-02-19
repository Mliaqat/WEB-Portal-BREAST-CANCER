import React from 'react';
import { Line } from 'react-chartjs-2'
import VerticalCard from '../../../CommnonStyle/Card/VerticalCard';
import { AdminDashboardStyle } from './AdminDashboard.style';
import cancerimg from "../../../../Asset/images/cancer.png"
import patentimg from "../../../../Asset/images/patient.png"
import doctorimg from "../../../../Asset/images/doctor.png"



function AdminDashboard() {



    return (
        <AdminDashboardStyle>
            <article className='Cards'>
                <VerticalCard icon={cancerimg} label="Total Cases" count="324" />
                <VerticalCard icon={patentimg} label="Total Patient" count="324" />
                <VerticalCard icon={doctorimg} label="Total Doctor" count="324" />
            </article>

        </AdminDashboardStyle>);
}

export default AdminDashboard;
