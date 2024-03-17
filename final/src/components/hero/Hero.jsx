import React, { useState } from 'react';
import Buttons from '../button/Buttons';
import './Hero.css'; 
import image from '../../../img/ilu1.svg';
import backgroundImage from '../../../img/pic4.png';
import Ellipse from '../elipse/Elipse';
import Modal from '../modal/Modal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        console.log('toggleModal called');
        setIsModalOpen(!isModalOpen);
      };
    return (
        <section className="hero">
           <div className='content-container'>
            <div className="hero__content">
                <h1 className="hero__title">Ed Space Ваши знания и экспертность обретут здесь форму</h1>
                <p className="hero__subtitle"></p>
                <p className="hero__description">
                    Мощный инструмент для организации обучения. Ваши ученики будут в восторге!
                </p>
                <div>
                <Buttons onClick={toggleModal} />
                {isModalOpen && <Modal key={Date.now()} closeModal={toggleModal} />}

    </div>
            </div>
            
            <div className="hero__image" >
                <img src={image} alt="" />
            </div>  
            </div>
                <Ellipse
                    backgroundImage={backgroundImage}
                    top="-80px"
                    left="1200px" 
                    width="1050px"
                    height="1050px"
                />
        </section>
    );
};

export default Hero;
