import React from 'react'
import Logo from '../assets/Logo_footer.png'
import Facebook from '../assets/socials/Facebook.png'
import Twitter from '../assets/socials/Twitter.png'
import Instagram from '../assets/socials/Instagram.png'
import Youtube from '../assets/socials/Youtube.png'
import LinkedIn from '../assets/socials/LinkedIn.png'
import Mail from '../assets/contact/mail.png'
import Phone from '../assets/contact/phone.png'
import Location from '../assets/contact/location.png'

function Footer() {
  return (
    <footer className='h-auto w-full border-t border-[#D1D1D1] bg-[#F5F5F5]'>
      <div className="m-auto w-[1566px] ">
        <div className="pt-[80px] flex justify-between">
          <div className="">
            <a className='flex gap-3 text-[24px] text-[#130E67] font-medium items-center' href="/">
              <img src={Logo} alt="Logo"/>
              <span>Bootcamp</span>
            </a>
            <div className="leading-[100%] text-[#130E67] font-medium pt-[16px] pb-[24px]">
              <p className='text-[14px]'>Your learning journey starts here!</p>
              <p className='text-[14px]'>Browse courses to get started.</p>
            </div>
            <div className="flex gap-[22px] items-center">
              <a href="https:/facebook.com"><img src={Facebook} alt="Facebook"/></a>
              <a href="https:/twitter.com"><img src={Twitter} alt="Twitter"/></a>
              <a href="https:/instagram.com"><img src={Instagram} alt="Instagram"/></a>
              <a href="https:/linkedin.com"><img src={LinkedIn} alt="LinkedIn"/></a>
              <a href="https:/youtube.com"><img src={Youtube} alt="Youtube"/></a>
            </div>
          </div>
          <div className="flex gap-[120px]">
            <div className="flex flex-col gap-[16px]">
              <h4 className='text-[#130E67] text-[20px] font-semibold leading-[24px]'>Explore</h4>
              <div className="flex flex-col gap-[8px] leading-[100%] text-[#666666] font-[400] text-[18px]">
                <p className='leading-[22px]'>Enrolled Courses</p>
                <p className='leading-[22px]'>Browse Courses</p>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <h4 className='text-[#130E67] text-[20px] font-semibold leading-[24px]'>Account</h4>
              <div className="flex flex-col gap-[8px] leading-[100%] text-[#666666] font-[400] text-[18px]">
                <p className='leading-[22px]'>My Profile</p>
                
              </div>
            </div>
            
            <div className="flex flex-col gap-[16px]">
              <h4 className='text-[#130E67] text-[20px] font-semibold leading-[24px]'>Contact</h4>
              <div className="flex flex-col gap-[8px] leading-[100%] text-[#666666] font-[400] text-[18px]">
                <a href='mailto:contact@company.com' className='leading-[24px] flex gap-[6px]'><img src={Mail} alt="Mail" /><span>contact@company.com</span></a>
                <a href='tel:+995555111222' className='leading-[22px] flex gap-[6px]'><img src={Phone} alt="Phone" /><span>(+995) 555 111 222</span></a>
                <a href='https://maps.app.goo.gl/APA7ai1oxsCD1rhN6' className='leading-[24px] flex gap-[6px]'><img src={Location} alt="Location" /><span>Aghmashenebeli St.115</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[74px] pb-[20px] flex justify-between">
            <div className="text-[18px] text-[#666666]">Copyright © 2026 Redberry International</div>
            <div className="text-[18px] text-[#666666]">All Rights Reserved | <span className='text-[#4F46E5]'>Terms and Conditions</span> | <span className='text-[#4F46E5]'>Privacy Policy</span></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer