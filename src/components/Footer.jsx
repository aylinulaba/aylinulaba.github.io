import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <footer class="footer-type fixed-bottom">
                <div class="container-fluid">
                    <p class="m-0 text-center">
                        <i class="bx bx-coffee-togo"></i> Flat White. No sugar please.
                    </p>
                    <div class="footer__social">
                        <a className="footer__social-link" href="https://instagram.com/aylin.ulaba" title="Instagram" rel="noreferrer" target="_blank"><i class="uil uil-instagram"></i></a> 
                        <a className="footer__social-link" href="https://twitter.com/UlabaAylin" title="Twitter" rel="noreferrer" target="_blank"><i class="uil uil-twitter-alt"></i></a> 
                        <a className="footer__social-link" href="https://aylinino.tumblr.com" title="Blog" rel="noreferrer" target="_blank"><i class="uil uil-tumblr-alt"></i></a> 
                        <a className="footer__social-link" href="https://vsco.co/aylinulaba/" title="Photography" rel="noreferrer" target="_blank"><i class="uil uil-shutter-alt"></i></a> 
                        <a className="footer__social-link" href="https://on.soundcloud.com/KL2JW" title="Music" rel="noreferrer" target="_blank"><i class="uil uil-headphones-alt"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;