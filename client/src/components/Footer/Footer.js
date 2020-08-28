import React from 'react'
import Card from 'react-bootstrap/Card';

function Footer() {

    const styles= {
        borderColor: "black",
        backgroundColor: "lightgray",
        height: 50
    }

    return (

        <div style={styles} className="footer">
      
            This is a Footer
      
            {/* <Card>
                <Card.Footer>This is a Footer</Card.Footer>
            </Card> */}
        </div>
    )
}

export default Footer
