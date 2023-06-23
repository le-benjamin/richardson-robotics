import React from 'react'
import styles from '../style';
import { footerLinks, socialMedia } from '../constants';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins font-normal text-center leading-[27px] text-white">
            Copyright © 2023 Richardson Robotics. All Rights Reserved.
          </p>

          <div className="flex flex-row md:mt-0 mt-6">
            { socialMedia.map((social, index) => (
              <div
                key={social.id}
                className={`object-contain text-white ${index === socialMedia.length-1 ? 'mr-0' : 'mr-6'} cursor-pointer`}
                onClick={() => window.open(social.link)}
                >
                <social.icon size="35"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer