import React from "react";
import Item from "./item";
import "./Statistic.css"
function StatisticList({ countries }) {
    
    return (
      
        <table>
            <thead>
                <tr><th className="Number_title">№</th><th className="Country_title">Country</th><td className="TotalConfirmed_title">Total Confirmed</td></tr>
            </thead>
 <tbody>
            {countries.map(({ID,Country,TotalConfirmed,TotalDeaths,TotalRecovered}) => (
                
              <Item  key={ID} Country={Country} TotalConfirmed={TotalConfirmed} TotalDeaths={TotalDeaths} TotalRecovered={TotalRecovered}/>
              
            ))}
            </tbody>
        </table>
    );
}

export default  StatisticList