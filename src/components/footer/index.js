import React from 'react'

import GithubIcon from 'react-icons/lib/fa/github'
import AngelListIcon from 'react-icons/lib/fa/angellist'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedInIcon from 'react-icons/lib/fa/linkedin'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import InstagramIcon from 'react-icons/lib/fa/instagram'

import { event } from '../../utils/ga'
import './style.scss'

const social = [
  {
    url: 'https://github.com/dcommonslab',
    icon: <GithubIcon />,
    name: 'GitHub',
    eventArgs: ['Footer', 'github']
  },
  {
    url: 'https://twitter.com/dcommonslab',
    icon: <TwitterIcon />,
    name: 'Twitter',
    eventArgs: ['Footer', 'twitter']
  },
  {
    url: 'https://www.facebook.com/dcommonslab',
    icon: <FacebookIcon />,
    name: 'Facebook',
    eventArgs: ['Footer', 'facebook']
  },
  {
    url: 'https://angel.co/dcommmonslab',
    icon: <AngelListIcon />,
    name: 'AngelList',
    eventArgs: ['Footer', 'angellist']
  },
  {
    url: 'https://www.instagram.com/dcommonslab',
    icon: <InstagramIcon />,
    name: 'Instagram',
    eventArgs: ['Footer', 'instagram']
  },
  {
    url: 'https://www.linkedin.com/company/dcommonslab',
    icon: <LinkedInIcon />,
    name: 'LinkedIn',
    eventArgs: ['Footer', 'linkedIn']
  }
]

const Footer = () => (
  <footer className="c-footer">
    <ul className="list-unstyled">
      <li>&copy; 2018, DCommons Lab Corp <a href="https://github.com/dcommonslab"><small>(v{VERSION})</small></a></li>
      <li>Oakville, ON</li>
    </ul>
    <div>
      {social.map(({ url, icon, name, eventArgs }) => (
        <a rel="noopener" target="_blank" onClick={() => event(...eventArgs)} href={url} key={`Footer-${url}`}>
          {icon}
          <span className="sr-only">{name}</span>
        </a>
      ))}
    </div>
  </footer>
)

export default Footer;
