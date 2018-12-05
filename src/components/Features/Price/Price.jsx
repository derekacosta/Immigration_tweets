import React from 'react';

import styled from 'styled-components';


const Wrapper = styled.section`
    width: 60%;
    padding-top: 20px;
    margin: 0 auto;
    margin-top: 2em;
`;

const UL = styled.ul`
    list-style-type:none;
`;

const Price = () => {
    return (
        <Wrapper>
            <UL>
                <li>
                    <p style={{
                        padding: 10,
                        margin: 10,
                        background: 'white',
                        boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                    }}>Bonilla, Y. &amp; Rosa, J. (2015) #Ferguson: Digital protest, hashtag ethnography, and 
    the racial politics of social media in the United States. American Ethnologist, 42, 4–17.</p>
                </li>
                <li>
                    <p style={{
                        padding: 10,
                        margin: 10,
                        background: 'white',
                        boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                    }}>>Burnor, E. (2005). Under the Fence: US-Mexican Immigration Issues. Harvard International 
        Review, 27 (2), 8-9. </p>
                </li>  
                <li>
                    <p style={{
                        padding: 10,
                        margin: 10,
                        background: 'white',
                        boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                    }}>>Chiluwa, I. &amp; Ikufor, P. (2005). 'War against our Children': Stance and evaluation in 
        #BringBackOurGirls campaign discourse on Twitter and Facebook. Discourse and 
        Society, 26, 267–296.</p>
                </li>
                <li>
                    <p style={{
                        padding: 10,
                        margin: 10,
                        background: 'white',
                        boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                    }}>>Evans, H., Cordova, V., &amp; Sipole, S. (2014). Twitter Style: An Analysis of How House 
    Candidates Used Twitter in Their 2012 Campaigns. PS: Political Science and Politics, 
        47(2), 454-462. </p>
        
                </li>
                <li>
                    <p style={{
                        padding: 10,
                        margin: 10,
                        background: 'white',
                        boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                    }}>>Fuchs, C. (2018). Trumpology: Donald Trump’s Ideology. In Digital Demagogue:Authoritarian 
    Capitalism in the Age of Trump and Twitter (pp. 165-196). London: Pluto Press. 
    </p>
        
                </li>
                <li>
                    <p style={{
                        padding: 10,
                        margin: 10,
                        background: 'white',
                        boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                    }}>>Jiménez, T. (2007). Weighing the Costs and Benefits of Mexican Immigration: The 
        Mexican-American Perspective. Social Science Quarterly, 88(3), 599-618. </p>

                </li>
                <li>
                    <p style={{
                        padding: 10,
                        margin: 10,
                        background: 'white',
                        boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                    }}>>Prier, J. (2017). Commanding the Trend: Social Media as Information Warfare. Strategic Studies 
        Quarterly, 11(4), 50-85. </p>

                </li>

            </UL>
        </Wrapper>
    )
}

export default Price;