import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Readmore } from "./Readmore";
import { Form } from "react-router-dom";
import "../home.css"
import { Link } from "react-router-dom";
const plastic_waste="https://www.pngall.com/wp-content/uploads/5/Plastic-PNG-Transparent-HD-Photo.png";
const img2="https://th.bing.com/th/id/R.cda07b68493e4215445eb6066a6e386a?rik=pxAnkYR8KD6N2g&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fCoins-Free-Download-PNG.png&ehk=1fA2d35Mxd8pvNISUYI3fAZZk6LvkzzLD2tSq6Gx0Ms%3d&risl=&pid=ImgRaw&r=0";
const organic_waste="https://th.bing.com/th/id/R.02114295d6efc63b7ea125188b2541f0?rik=nSGaAG%2fk3rkwRw&riu=http%3a%2f%2fwww.durogreen.in%2fwp-content%2fuploads%2f2018%2f09%2fFood-Waste.png&ehk=ss2EDi73Niuil%2be5ELt09Pir5dZVRi5nQsFut7pXxtI%3d&risl=&pid=ImgRaw&r=0";
const paper_waste="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/38127/recyclable-garbage-newspaper-clipart-md.png";
const e_waste="https://webstockreview.net/images/electronics-clipart-e-waste-7.png";

const one="https://th.bing.com/th/id/R.baac36cb144ea45cdf92c1dfce988bcb?rik=Nj4m8ap5jRcMqA&riu=http%3a%2f%2fwww.laceco.me%2fwp-content%2fuploads%2f2019%2f02%2fNew-Recycle-Center-078.jpg&ehk=P9qK2MEsk1o2S19tPvbbvZO3n5FeCrMjA3ko5zJOmtQ%3d&risl=&pid=ImgRaw&r=0";
const two="https://th.bing.com/th/id/OIP.qJ24xXHXJKEtx9h-4_rZwAHaF7?rs=1&pid=ImgDetMain";
const three="https://th.bing.com/th/id/OIP.ydgfu1hd_8EQQpIpyXBTaQHaF7?rs=1&pid=ImgDetMain";
export default function Home() {
    return (
        <>
        <Header />
        <div className="bk-bg">
            <div className="home">
                <h1 className="home-text1">GOT SOME WASTE</h1>
                <hr className="home-hr" />
                <h1 className="home-text2">LET'S GET YOU SOME MONEY</h1>
                <Link to="/login"><button className="why-was">Why Wasruk?</button></Link>
                <div className="dust-img">
                    
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <div><img src={"../Plastic-dustbin.png"} alt="plastic-dustbin" /></div>
                        <div className="garbage_down"><img src={plastic_waste} alt="plastic-dustbin" width="120px" /></div>
                        <div className="coin_bounce"><img src={img2} alt="plastic-dustbin" width="60px" /></div>
                    </div>

                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <div><img src={"../Organic-dustbin.png"} alt="plastic-dustbin" /></div>
                        <div className="garbage_down"><img src={organic_waste} alt="plastic-dustbin" width="120px" /></div>
                        <div className="coin_bounce"><img src={img2} alt="plastic-dustbin" width="60px" /></div>

                    </div> <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <div><img src={"../Paper-dustbin.png"} alt="plastic-dustbin" /></div>
                        <div className="garbage_down"><img src={paper_waste} alt="plastic-dustbin" width="120px" /></div>
                        <div className="coin_bounce"><img src={img2} alt="plastic-dustbin" width="60px" /></div>

                    </div> <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <div><img src={"../Ewaste-dustbin.png"} alt="plastic-dustbin" /></div>
                        <div className="garbage_down"><img src={e_waste} alt="plastic-dustbin" width="120px" /></div>
                        <div className="coin_bounce"><img src={img2} alt="plastic-dustbin" width="60px" /></div>
                    </div>
                </div>
            </div>
            <div className="request-waste">
                
                <div className="half1">
                    <h2 className="request-waste-text1">Time to change</h2>
                    <h1 className="request-waste-text2">Its time to recognize the value of waste</h1>
                    <p className="request-waste-text3">Give us your waste and we will turn it into a valuable resource and it will be helpful in building other resources.</p>
                    <button className="request-waste-btn">Request</button>
                </div>

                <div className="half2">
                
                    <div><img src={one} alt="" srcset=""/></div>
                    {/* <div><img src={two} alt="" srcset="" /></div>
                    <div><img src={three} alt="" srcset=""/></div> } */}
                    
                </div>

            </div>
                <Readmore />
            <Footer />
        </div>
        </>
    )
}