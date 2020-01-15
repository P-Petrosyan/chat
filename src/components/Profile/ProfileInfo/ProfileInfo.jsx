import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
        <div className={s.headpic}>
          <img src='https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'></img>
        </div>

        <div className={s.descriptionBlock}>
          <div >
            <img className={s.avpic} src='http://www.foothillertech.com/student/webdesign/2017/02_05/image/also.jpg'></img>
          </div>
          <div>
            description of my profile (ProfileInfo)
          </div>
        </div>
       
      </div>
    )}
    
    export default ProfileInfo;