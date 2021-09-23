import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
function Item({ID,Country,TotalConfirmed,TotalDeaths,TotalRecovered}){
    const [isModal, setToggleModal] = useState(false);

    let hideModalHandler = () => {
      setToggleModal(false);
    };
  
    let showModalHandler = () => {
      setToggleModal(true);
    };

  

    return(
      
        <>
      <Modal open={isModal} onClose={hideModalHandler}>
            <div className="modalWrapper">
              <div className="statsInfo">
                <h2 className="titleCountryInfo">{Country}</h2>
    
                <div className="description">
                  <table className="infoCountries">
                    <tbody>
                   <tr><th className="modal_Img"><img src="Confirmed.jpg" alt="confirmed"/></th><th className="strongTextInfo">Total Confirmed</th>
                    <td className="CountInfo">{TotalConfirmed}</td></tr>
                  
                  <tr><th className="modal_Img"><img src="Deaths.jpg" alt="deaths"/></th><th className="strongTextInfo">Total Deaths</th>
                    <td className="CountInfo">{TotalDeaths}</td></tr>

                    <tr><th className="modal_Img"><img src="Recovered.jpg" alt="recovered"/></th><th className="strongTextInfo">Total Recovered</th>
                    <td className="CountInfo">{TotalRecovered}</td></tr>
                    </tbody>
                    </table>
                </div>
              </div>
            </div>
          </Modal >
        <tr className="table_content" key={ID} onClick = {showModalHandler}>
              <th>{Country}</th><td>{TotalConfirmed}</td>
              
            </tr></>
          
    );
    
}

export default Item