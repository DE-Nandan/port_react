import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodeforces} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/nandan-kumar-731527208' target="blank"><BsLinkedin/></a>
        <a href='https://github.com/DE-Nandan' target="blank"><FaGithub/></a>
        <a href='https://codeforces.com/profile/de_nandan_5' target="blank"><SiCodeforces/></a>

    </div>
  )
}

export default HeaderSocials