import React, { useState, useEffect } from 'react';
import Buttons from '../button/Buttons';
import Ellipse from '../elipse/Elipse';
import H2 from '../h2/H2';
import possibleFeaturesData from '../../data/features.json';
import image1 from '../../../img/image3.svg';
import image2 from '../../../img/image1.svg';
import image3 from '../../../img/image4.svg';
import image4 from '../../../img/image2.svg';
import image5 from '../../../img/image5s.svg';
import image6 from '../../../img/image5.svg';
import bgImage2 from '../../../img/pic4.png';
import bgImage1 from '../../../img/pic5.png';

import './Possible.css'; 
import TextBlock from '../textBlock/TextBlock';

const imagesMap = {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
};

const Possible = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    setFeatures(possibleFeaturesData);
  }, []);
  return (
    <div className="possible-container">
      <div className='content-container column'> 
      <Ellipse
  backgroundImage={bgImage1}
  width="1350px"
  height="1350px"
  top="80px"
  left="930px"
/>
                  <H2
                 color="#2F2A37"
                 text="Возможности Ed Space"
                 margin="80px 0px 40px 0px"
                />
      <p className='possible-text'>Моменты перечислить корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточную поддержку.</p>
      <div className="possible-cards">
        
      {features.map((feature) => (
        <div key={feature.title} className="possible-item">
          <img src={imagesMap[feature.imageKey]} alt={feature.title} className="possible-image" />
        <TextBlock
      name={feature.title}
      text={feature.text}
            />
            </div>
  
))}
      </div>
      <Ellipse
  backgroundImage={bgImage2}
  top="-260px" 
  left="-120px"
  width="1350px"
  height="1350px"
/>
<div className="possible-button">
      <Buttons />
</div>
      </div>
    </div>
  );
      };
export default Possible;
