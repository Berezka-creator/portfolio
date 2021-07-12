import "./Portfolio.css"
import PortfolioList from './portfolioList/PortfolioList'
import { useEffect, useState } from 'react'
import  {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio
} from "../../data";



export default function Portfolio() {

    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);
    const list = [
        {
            id: 'html',
            title: "HTML/CSS",
        },
        {
            id: 'libraries',
            title: "JS Libraries",
        },
        {
            id: 'js',
            title: "Java Script",
        },
        {
            id: 'mobile',
            title: "Mobile",
        }
    ];

    useEffect(() => {

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            default:
                setData(featuredPortfolio);    

        }

    }, [selected])


    return (
        <div className="portfolio" id="portfolio">

            
            <h1>Portfolio</h1>
            {/* <ul>
                {list.map(item => ( 

                    <PortfolioList  
                        title={item.title} 
                        active = {selected === item.id} 
                        setSelected = {setSelected} 
                        id = {item.id}/>
                ))}
                          
            </ul> */}

            <div className="container">
                
                    <div className="item">
                    <img src="assets/burger-app.png"
                        alt="" href="https://berezka-creator.github.io/burger-app/"/>
                    <h3>ReactJS Burger Builder</h3>
                    </div>

                    <div className="item">
                    <img src="assets/host-app.png" 
                        alt="" />
                    <h3>Hosting App</h3>
                    </div>

                    <div className="item">
                    <img src="assets/youtubeQuiz.png"
                        alt= ""/>
                    <h3>Youtube Quiz</h3>
                    </div>

                    <div className="item">
                    <img src="assets/sfliving.png"
                        alt="" />
                    <h3>WordPress</h3>
                    </div>
               
                     
            </div>

        </div>
    
    );
}
