import React from "react";

export default function About() {
    return (
        <section>
            <div className='center' id="about">
                <h1 className='page-header'>Who Am I?</h1>
            </div>
            <div className='center'>
                <img src={require('../assets/images/ProfilePic.JPG')} alt="who-am-i" className='photo' />
            </div>
            <div>
                <p>Hello, my name is Dejah Harris and I am a Full Stack Developer and Graphic Designer. As a little girl, I dreamed about working in the tech space. The possiblity of innovation through coding has always been enticing, but what really grabbed my attention is how male-dominated the tech field is. Knowing that female developers are very far, few, and in between compared to the amount of men in this field filled me with a burning desire and passion to embark on the path of Full Stack Development. I have also found purpose and have made the decision to move with intention. My intentions are to use my knowledge and skill to create eye catching websites and applications and provide end-users with wonderful, unforgettable, and fully immersive experiences.</p>
            </div>
        </section>
    );
}