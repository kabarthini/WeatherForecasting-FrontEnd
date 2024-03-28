import React from 'react'
import './Privacy.css';
import Home from './Home';

export default function Privacy() 
{
  return (
    <div>
    <Home/>
    <div className='fullimg'>
       <div className='ppfull6'>
          <img src='https://blog.ipleaders.in/wp-content/uploads/2020/10/bluestar_webbox_privacy-policy_1024x512_1218_V1_PRESS.jpg' width="1300px" height="400px"/>
          <div className='ppcontent6'>
              <div className='pphead6'>
                 <p>Privacy Policy</p>
              </div>
              <div className='ppara6'>
               <p>This Privacy Policy is intended to inform you about the types of information we collect from users of our
                Weather Forecast App ("App"), how we use and protect that information, and your choices regarding the collection 
                and use of your data. By using the App, you consent to the practices described in this Privacy Policy</p>
              </div>
              <div className='pphead16'>
                 <p><b>Information We Collect</b></p>
              </div>
              <div className='para6'><br/>
                <p>We collect the following types of information:</p>
              </div>
              <div className='para6'><br/>
                <p><span className='ppspan6'>Personal Information: </span>   We may collect your precise location information to provide you with accurate weather forecasts and alerts for your area. You can choose to disable 
                location services at any time in your device settings.
                </p>
              </div>
              <div className='para6'><br/>
                <p><span className='ppspan6'>Usage Data: </span>  We collect data about how you interact with our App, such as the features you use, 
                the content you access, and the duration of your visits.
                </p>
              </div>
              
              <div className='pphead16'>
              <h4>How We Use Your Information</h4>
           </div>

           <div className='para6'><br/>
           <p>We use the collected information for the following purposes:</p>
         </div>

           <div className='para6'><br/>
           <p>1. We use your location data to provide you with accurate weather forecasts, alerts, and other relevant information.</p>
           <p>2. We may use your usage data to personalize your experience, such as offering location-specific weather updates.</p>
           <p>3. If you have an account, we use your account information to manage and secure your account.</p>
           <p>4. We use usage and device information for analytical purposes to improve the performance and functionality of the App.</p>
          
         </div>
            
         <div className='pphead16'>
         <p><b>Your Choices</b></p>
      </div>
       
         <div className='para6'>
           <p>1.You can disable location services for our App in your device settings.</p>
           <p>2. If you wish to delete your account, please contact us at [insert contact email].</p>
           </div>
          
       

        <div className='pphead16'>
         <p><b>Third-Party Services</b></p>
      </div>

      <div className='para6'>
      <p> Our App may contain links or integrations with third-party services, such as weather data providers or 
      social media platforms.These third-party services have their own privacy policies, and we are not responsible 
      for their practices.We recommend reviewing the privacy policies of these third parties before interacting 
      with their services</p>
    </div>

    <div className='pphead16'>
         <p><b>Contact Us</b></p>
      </div>
      
      <div className='para6'>
      <p>   If you have any questions, concerns, or requests regarding this Privacy Policy, 
      please contact us at [insert contact email].<br/><br/>
      <b>Thank you for using our Weather Forecast App. Your privacy and trust are important to us.</b></p>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}