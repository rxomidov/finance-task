import React from 'react';
import {PageWrapper} from "../../containers/StyledContainers";
import DonutChart from "./Components/DonutChart";
import AreaChart from "./Components/AreaChart";
import HeatmapChart from "./Components/HeatmapChart";
import RadialBarsChart from "./Components/RadialBarsChart";
import BarChart from "./Components/BarChart";

const Dashboard = () => {
    //Donut
    const keys: any = ["Web development", "Mobile Development", "Data Science", "Artificial Intelligence"];
    const values: any = [100, 200, 300, 400];
    //Area
    const series = [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }];

    return (
        <PageWrapper>
            <h1>refresh token</h1>
            <h1>search issue</h1>
            <div className="row">
                <div className="col-md-6">
                    <h4>Donut Chart</h4>
                    <DonutChart labels={keys} donutData={values}/>
                </div>
                <div className="col-md-6">
                    <h4>Area Chart</h4>
                    <AreaChart donutData={series}/>
                </div>
                <div className="col-md-6">
                    <h4>Radial bars Chart</h4>
                    <RadialBarsChart/>
                </div>
                <div className="col-md-6">
                    <h4>Bar Chart</h4>
                    <BarChart/>
                </div>
                {/*<div className="col-md-4">*/}
                {/*    <h4>Heatmap Chart</h4>*/}
                {/*    <HeatmapChart/>*/}
                {/*</div>*/}
            </div>
        </PageWrapper>
    );
};

export default Dashboard;