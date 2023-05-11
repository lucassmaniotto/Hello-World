import { AiOutlineTwitter, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

import { FooterStyled, FooterLinks } from './styles';

export default function Footer() {
  return (
    <FooterStyled>
        <p>Deselvolvido por <a href="https://github.com/lucassmaniotto" target="_blank" rel="noreferrer">mim mesmo</a> 😃</p>
        <FooterLinks>
            <a href="https://github.com/lucassmaniotto"><AiFillGithub size={25}/></a>
            <a href="https://www.instagram.com/licaaaaaas"><AiOutlineInstagram size={25}/></a>
            <a href="https://twitter.com/alpiste_punk"><AiOutlineTwitter size={25}/></a>
        </FooterLinks>
    </FooterStyled>
  )
}
