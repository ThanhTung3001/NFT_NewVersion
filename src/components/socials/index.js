import React from 'react';
import { Link } from 'react-router-dom';
import Header, { useViewport } from "../../components/header";
import './style.css';

export default function Stores() {
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  return (
    <div class="socials">
      <div className={isMobile?"socials-title text-center":"socials-title "}>Follow Rise of Immortals on</div>
      <div>
        <a  href="https://t.me/RiseofImmortalsAnnouncements"><img src="images/Social/Telegram.png" alt="telegram" /></a>
        <a  href="" data-toggle="tooltip" data-placement="top" title="COMING SOON "><img src="images/Social/Facebook.png" alt="facebook" /></a>
        <a  href="https://www.instagram.com/riseofimmortals/"><img src="images/Social/Instagram.png" alt="instagram" /></a>
        <a  href="https://twitter.com/ImmortalsRise"><img src="images/Social/Twitter.png" alt="twitter" /></a>
        <a  href="" data-toggle="tooltip" data-placement="top" title="COMING SOON "><img src="images/Social/Discord.png" alt="discord" /></a>
        <a  href="https://www.youtube.com/channel/UCpZSWKEYHAfPaoG5LsFm7Cw" ><img src="images/Social/Youtube.png" alt="youtube" /></a>
        <a  href="" data-toggle="tooltip" data-placement="top" title="COMING SOON "><img src="images/Social/7.png" alt="medium" /></a>
        <a  href="" data-toggle="tooltip" data-placement="top" title="COMING SOON "><img src="images/Social/8.png" alt="" /></a>
      </div>
    </div>
  );
};
