import React from 'react'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import {
  GitHub,
  Spotify,
  Twitch,
  Twitter,
  YouTube,
} from './social-icons'

const Wrapper = styled.footer`
  text-align: center;
  position: relative;
  margin: ${({ theme }) => theme.spacing[8]} 0;
  .name {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-family: ${({ theme }) => theme.fontFamily.mono};
    line-height: ${({ theme }) => theme.lineHeight.none};
    margin: ${({ theme }) => theme.spacing[8]} 0;
  }
  hr {
    margin: ${({ theme }) => theme.spacing[10]} 0;
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.gray[300]};
  }
  svg {
    margin: 0 ${({ theme }) => theme.spacing[4]};
    height: ${({ theme }) => theme.spacing[6]};
    &:hover {
      transform: translateY(-2px);
      transition: transform 0.35s;
    }
  }

  .sign-off {
    margin-top: ${({ theme }) => theme.spacing[6]};
    margin-bottom: ${({ theme }) => theme.spacing[16]};
    ${down('sm')} {
      margin-bottom: ${({ theme }) => theme.spacing[24]};
    }
  }
`

export const Footer = () => {
  return (
    <Wrapper>
      <hr />
      <p className="name">Scott Spence</p>
      <a
        href="https://twitter.com/spences10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>
      <a
        href="https://github.com/spences10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>
      <a
        href="https://open.spotify.com/user/spences10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Spotify />
      </a>
      <a
        href="https://www.youtube.com/channel/UCnngLXpLSFsKkDhFoO9Ct3w"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTube />
      </a>
      <a
        href="https://twitch.tv/spences10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitch />
      </a>
      <p className="sign-off">Built with Gatsby · Hosted on Vercel</p>
    </Wrapper>
  )
}
