import React from 'react'
import Link from 'gatsby-link'
import QuestionPanel from '../components/QuestionPanel'

const FAQ = ({ data }) => (
    <div>
        <div>
            <img src={require('../img/bus_header.jpg')}/>
        </div>
        <h1 className="header">FAQ</h1>
        <p>
            The best way to inquire about our service and our prices, is to send an email with your request to contact@olympictransportation.net.
        </p>
        <div className="faq">
            {[...data.allFaqJson.edges].map((faq, i) =>
                <QuestionPanel question={faq.node.question} answer={faq.node.answer} key={i}/>
            )}
        </div>
    </div>
);

export const query = graphql`
query faq {
  allFaqJson {
    edges {
        node {
            question
            answer
        }
    }
  }
}
`;

export default FAQ
