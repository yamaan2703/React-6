import Button from "../Components/Button";

import Products from "./Products";

export default function Home () {
    return (
        <div>
            {/* Section 1 Start */}
            <div className="section-1">
                <div className="shadow">
                <div className="container">
                    <div className="main-heading text-center">
                        <h1>Creativity in Service of Our Clients...</h1>
                        <p>We've helped businesses increase their revenue on average by 90% in their first year with us!</p>
                        <Button buttonValue='SHOW MORE' />
                    </div>
                  </div>
                </div>
                 
            </div>
            {/* Section 1 End */}

          

            {/* Section 3 Start */}
            <Products />
            {/* Section 3 End */}

           
        </div>
    )
}