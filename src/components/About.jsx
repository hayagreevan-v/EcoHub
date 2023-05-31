import eWasteImage from "../assets/images/ewaste.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    <br></br>
                    <strong>“ The real beauty lies in finding new life for old electronics. Let's transform e-waste into a catalyst for positive change.”</strong><br></br><br/>
                    <strong>Eco Hub</strong> is developed in order to reduce the electronic waste. Here you can sell your electronics and also if you wish to donate it can also be done. The manufacturers are available where take-back options are provided. If you wish to send your products for recycling, it can be carried to the authorized recyclers and the households will be able to track the whereabouts of their products. Various awareness programs and webinars are being provided in the app. If you are donating your products or sending your products for recycling, you will be awarded points for each product. Based on the points, you can claim your rewards and goodies.	
The project was built and deployed using   
                         <strong> MERN Stack(React for Frontend and MongoDB, ExpressJS and NodeJS for Backend)</strong><br/>
                         <br></br>
                         Developed by
                        Team The Technophiles: <br></br><strong>Keerthana J </strong> <br></br><strong>Muthuganesan N G</strong><br/> <strong>Hayagreevan V</strong> 
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={eWasteImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}