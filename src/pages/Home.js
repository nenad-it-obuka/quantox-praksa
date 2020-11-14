import React from 'react';
import Header from "../Header";
import Form from "../Form";







class Home extends React.Component {
    render() {
        return (            
            <div>
                <Header />    
                <main>
                    <section>This is Home page</section>
                    <Form />                
                </main>            
            </div> 
        );
    }
}

export default Home;
