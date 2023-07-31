// import React from 'react'
import React, { useEffect, useState } from 'react'
import './style/firstcol.css'
import './style/secondcol.css'
import './style/thirdcol.css'
import './style/fourth.css'
import './style/fifthcol.css'
import './style/sixthcol.css'
import './style/header.css'
import './style/footer.css'
import bgimage from './images/bg.png'
import group184 from './images/Group184.png'
import banner from './images/banner.png'
import newpen from './images/newpen.png'
import bannerbg from './images/bannerbg.png'
import girlone from './images/girlone.png'
import coin from './images/coins.png'
import group from './images/group.png'
import penstyle from './images/pen_style.png'
import penstylewhite from './images/Pen_style_white.png'
import imgsec from './images/imgsec.png'
import vector from './images/vector.png'
import OBJECTS from './images/Vectorbg.png'
import logo from './images/logo.png'
import twitter from './images/twitter.png'
import ether from './images/etherscan.png'
import telegram from './images/telegram.png'
import game from './images/game.png'
import Group190 from './images/baloon.png'
import Vector46 from './images/Group189.png'
import image6 from './images/image6.png'
import Maskgroup3 from './images/Maskgroup3.png'
import Maskgroup2 from './images/Maskgroup2.png'
import Maskgroup4 from './images/Maskgroup4.png'
import creambg from './images/creambg.png'
import vector29 from './images/Vector29.png'
import vector33 from './images/vector33.png'
import group163 from './images/Group163.png'
import icon from './images/icon.png'
import Rectangle49 from './images/Rectangle49.png'
import Group132 from './images/Group132.png'
import pink from './images/pinkshadow.png'
import OBJECTSsec from './images/OBJECTS.png'
import Group202 from './images/Group202.png'
import Group203 from './images/Group203.png'
import Frame115 from './images/Frame115.png'
import Penstyle from './images/Penstyle.png'
import wallet from './images/wallet.png'
import iconswipe from './images/Icon_swipe.png'
import Icon_uniswap from './images/Icon_uniswap.png'
import Icon_Get_some_eth from './images/Icon_Get_some_eth 1.png'
import Subtract from './images/Subtract.png'
import group158 from './images/Group158.png'
import Subtractone from './images/Subtractone.png'
import Group151 from './images/Group151.png'
import g1 from './images/g1.png'
import g2 from './images/g2.png'
import g3 from './images/g3.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Group168 from './images/Group168.png'
import new_white_pen from './images/new_white_pen.png'



export default function Home() {

        
  return (
    <>
     {/* first container */}
      <div className='first-container'  id='home' style={{backgroundImage:'url('+banner+')',}}>
         <div className='first-container-box' style={{backgroundImage:'url('+bgimage+')',}}>
             <h1 className='first-container-heading'>The Home Of Animeme</h1>
             <h4 className='first-container-sub-heading'>Welcome To Animeme Coins <span className='first-container-span'>The Home Of Meme</span></h4>
             <div className='btn-container'>
                <button className='first-container-btn'>Join The AniMeme</button>
             </div>
             <div className='first-container-image-box'>
                   <img src={girlone} className='first-container-image'/>
                   <img src={coin} className='first-container-imagecoin'/>
             </div>
         </div>
      </div>
      {/* second container */}
      <div className='second-container' style={{backgroundImage:'url('+Subtract+')'}}>
          <div className='sec-responsive'>
               <div className='second-container-first-box'>
                    <div className='second-container-first-box-div'>
                         <div className='second-container-first-text-box'>
                              <h1 className='second-container-heading'>JOIN THE ANIMEME WAVE !</h1>
                              <img src={penstyle} className='second-container-first-image' />
                         </div>
                         <div className='second-container-first-paragraph-box'>
                              <p className='second-container-first-paragraph'>
                              AniMeme Coin is a vibrant fusion of the enthralling worlds of anime and memes, brought together on the blockchain. As lovers of both cultures, we sought to create a cryptocurrency that captures the energy, humor, and creativity of these communities. Enter AniMeme Coin, the token for anime enthusiasts, meme lovers, and crypto fans alike."
                              </p>
                         </div>
                    </div>
                    <div className='second-container-image-box'>
                         <img src={group} className='second-container-image'/>
                    </div>
               </div>
               <div className='second-container-first-box f-box-second' style={{marginTop:'140vh !important'}} >
                    <div className='second-container-image-box'>
                         <img src={imgsec} className='second-container-image'/>
                    </div>
                    <div className='second-container-first-box-div'>
                         <div className='second-container-first-text-box'>
                              <h1 className='second-container-heading'>anime , memes crypto</h1>
                              <img src={penstyle} className='second-container-first-imagesec' />
                         </div>
                         <div className='second-container-first-paragraph-box'>
                              <p className='second-container-first-paragraph'>
                              AniMeme effectively combines the elements of anime and meme, which has long been longely desired by a large community of both anime enthusiasts and meme lovers.
                              </p>
                         </div>
                    </div>
               </div>
               <div className='second-container-third-box cutbox'>
                    <div>
                    <div className='second-container-third-text-box'>
                         <h1 className='second-container-third-text-heading'>BE EARLY !</h1>
                         <img src={vector} className='second-container-third-text-img'/>
                    </div>
                    <div className='second-container-third-btn-box'>
                         <button className='second-container-third-btn'>Join the AniMeme Wave Now</button>
                    </div>
                    </div>
               </div>
         </div>
      </div>
      {/* third Container */}
      <div className='third-contianer' style={{backgroundImage:'url('+bannerbg+')',}}>
           <div className='third-contianer-box'>
                 <div className='third-contianer-text-box'>
                    <h1 className='third-contianer-text-heading'>BE PART OF ANIMEME !</h1>
                    <img src={newpen} className='third-contianer-img'/>
                 </div>
           </div>
           <div className='third-contianer-div-boxes marginTops'>
                <div className='third-contianer-div-box cutboxone'>
                    <p className='third-contianer-p'>
                    AniMeme Coin proudly presents the AniMeme NFT Collection, a diverse range of digital art pieces that are set to become one of the most coveted NFT collections in the crypto universe. Fusing the allure of anime with the whimsy of memes, this collection encapsulates the spirited essence of our vibrant community.
                    </p>
                </div>          
           </div>
           <div className='third-contianer-div-boxes'>
                <div className='third-contianer-div-box cutboxone'>
                   <p className='third-contianer-p'>
                    To ensure exclusivity and excitement, we will incorporate a rarity system into our collection. From 'common' to 'legendary' pieces, each NFT holds its unique charm. We also plan regular NFT airdrops for AniMeme Coin holders, enhancing the value proposition for our community.
                    </p>
                </div>          
           </div>
           <div className='third-contianer-div-boxes'>
                <div className='third-contianer-div-box cutboxone'>
                   <p className='third-contianer-p'>
                    What sets our collection apart is the potential for interaction. We're not just creating art but building an ecosystem for NFT interaction. Future plans include a metaverse for trading or even battling your NFTs, and physical versions of these digital assets, bringing your collection into the tangible realm.
                    </p>
                </div>          
           </div>
           <div className='third-contianer-div-boxes'>
                <div className='third-contianer-div-box cutboxone'>
                   <p className='third-contianer-p'>
                    The AniMeme NFT Collection is more than just tokens; it's an opportunity to join a groundbreaking project tied to the cultures we cherish. As we chart this exciting journey, we invite you to be part of the AniMeme universe - where anime, memes, and crypto create a vibrant tapestry of entertainment and opportunity. Be a part of the legend today!
                    </p>
                </div>          
           </div>
           <div className='third-contianer-box third-second'>
                 <div className='third-contianer-text-box'>
                    <h1 className='third-contianer-text-heading'>Anime, Memes, Crypto!</h1>
                    <img src={newpen} className='third-contianer-img'/>
                 </div>
                 <div className='third-contianer-box-img-box'>
                     <img src={group184} className='third-contianer-box-image'/>
                 </div>
           </div>
           <div className='third-contianer-box'>
                 <div className='third-contianer-text-box'>
                    <h1 className='third-contianer-text-heading second-heading'>introducing the animmeme nft collection!</h1>
                    <img src={newpen} className='third-contianer-img extrastyle'/>
                 </div>
           </div>
           <div className='third-container-uniting-animeme'>
                <div className='third-container-uniting-animeme-heading-box' style={{backgroundImage:'url('+OBJECTS+')',}}>
                    <h1 className='third-container-uniting-animeme-heading'>uniting anime, memes and blockchain</h1>
                </div>
                <div className='third-container-img-animeme'>
                  <img src={Group190} className='third-container-uniting-animeme-imgone'/>
                </div>
           </div>
           <img src={Vector46} className='third-container-uniting-animeme-img'/>
           <div className='third-four-div-contianer' id='animegallery'>
                <div className='third-four-div-contianer-first' >
                    <div className='third-four-div-contianer-first-image'>
                         <img src={image6} className='third-div-contianer-first-image'/>
                    </div>
                    <div className='third-four-div-contianer-first-heading-box'>
                          <h1 className='third-four-div-contianer-first-heading'>
                           Animeme
                          </h1>
                    </div>
                </div>
                <div className='third-four-div-contianer-first' >
                    <div className='third-four-div-contianer-first-image'>
                         <img src={Maskgroup3} className='third-div-contianer-first-image'/>
                    </div>
                    <div className='third-four-div-contianer-first-heading-box'>
                          <h1 className='third-four-div-contianer-first-heading'>
                           Animeme
                          </h1>
                    </div>
                </div>
                <div className='third-four-div-contianer-first' >
                    <div className='third-four-div-contianer-first-image'>
                         <img src={Maskgroup2} className='third-div-contianer-first-image'/>
                    </div>
                    <div className='third-four-div-contianer-first-heading-box'>
                          <h1 className='third-four-div-contianer-first-heading'>
                           Animeme
                          </h1>
                    </div>
                </div>
                <div className='third-four-div-contianer-first' >
                    <div className='third-four-div-contianer-first-image'>
                         <img src={Maskgroup4} className='third-div-contianer-first-image'/>
                    </div>
                    <div className='third-four-div-contianer-first-heading-box'>
                          <h1 className='third-four-div-contianer-first-heading'>
                           Animeme
                          </h1>
                    </div>
                </div>        
           </div>
      </div>
      {/* fourth Container */}
      <div className='fourth-container'id='buy' style={{ backgroundImage:'url('+creambg+')'}}>
            <div className='fourth-container-heading-box' style={{ backgroundImage:'url('+vector33+')'}}>
               <h1 className='fourth-container-heading'>
               Join the AniMeme Revolution, Buy $animeme
               </h1>
            </div>
            <img src={vector29} className='fourth-container-heading-image'/>
            <div className='fourth-container-image-box' style={{ backgroundImage:'url('+group163+')'}}>
            </div>
            <div className='fourth-container-bound' style={{backgroundImage:'url('+vector33+')'}}>
                <h1 className='fourth-container-bound-heading'>AniMeme Bound</h1> 
            </div>  
            <img src={vector29} className='fourth-container-bound-unnderline-image'/>
            <div className='fourth-container-paragraph-box'>
                  <p className='fourth-container-paragraph'>
                  At AniMeme, we're not just a community, we're a family - a family bound by a shared love for anime, memes, and the infinite possibilities of the crypto world. Our principles define who we are and guide our collective journey in the crypto universe:
                  </p>
            </div>
            <div className='fourth-box-containers'>
                <div className='fourth-box-containers-one'>
                      <div className='fourth-box-containers-one-icons'>
                           <div className='fourth-box-containers-icons-box' >
                              <img src={icon} className='fourth-box-containers-images'/>
                           </div>
                           <div className='fourth-box-containers-one-icons-paragraph-container'>
                           <span className='fourth-box-containers-one-icons-text'>Unity:</span>
                           </div>
                      </div>
                      
                        <p className='fourth-box-containers-one-icons-paragraph'>We stand together, stronger than ever, as we navigate the thrilling waters of cryptocurrency. As a member of the AniMeme family, you're never alone. We celebrate together in times of prosperity, support each other during challenges, and constantly learn and grow as one.</p>
                      
                     
                </div>
                <div className='fourth-box-containers-one'>
                      <div className='fourth-box-containers-one-icons'>
                           <div className='fourth-box-containers-icons-box' >
                              <img src={icon} className='fourth-box-containers-images'/>
                           </div>
                           <div className='fourth-box-containers-one-icons-paragraph-container'>
                           <span className='fourth-box-containers-one-icons-text'>Unity:</span>
                           </div>
                      </div>
                      
                        <p className='fourth-box-containers-one-icons-paragraph'>We stand together, stronger than ever, as we navigate the thrilling waters of cryptocurrency. As a member of the AniMeme family, you're never alone. We celebrate together in times of prosperity, support each other during challenges, and constantly learn and grow as one.</p>
                      
                     
                </div>
                <div className='fourth-box-containers-one'>
                      <div className='fourth-box-containers-one-icons'>
                           <div className='fourth-box-containers-icons-box' >
                              <img src={icon} className='fourth-box-containers-images'/>
                           </div>
                           <div className='fourth-box-containers-one-icons-paragraph-container'>
                           <span className='fourth-box-containers-one-icons-text'>Unity:</span>
                           </div>
                      </div>
                      
                        <p className='fourth-box-containers-one-icons-paragraph'>We stand together, stronger than ever, as we navigate the thrilling waters of cryptocurrency. As a member of the AniMeme family, you're never alone. We celebrate together in times of prosperity, support each other during challenges, and constantly learn and grow as one.</p>
                      
                     
                </div>
            </div>
            <div className='fourth-box-containers second-fourth'>
                <div className='fourth-box-containers-one'>
                      <div className='fourth-box-containers-one-icons'>
                           <div className='fourth-box-containers-icons-box' >
                              <img src={icon} className='fourth-box-containers-images'/>
                           </div>
                           <div className='fourth-box-containers-one-icons-paragraph-container'>
                           <span className='fourth-box-containers-one-icons-text'>Unity:</span>
                           </div>
                      </div>
                      
                        <p className='fourth-box-containers-one-icons-paragraph'>We stand together, stronger than ever, as we navigate the thrilling waters of cryptocurrency. As a member of the AniMeme family, you're never alone. We celebrate together in times of prosperity, support each other during challenges, and constantly learn and grow as one.</p>
                      
                     
                </div>
                <div className='fourth-box-containers-one'>
                      <div className='fourth-box-containers-one-icons'>
                           <div className='fourth-box-containers-icons-box' >
                              <img src={icon} className='fourth-box-containers-images'/>
                           </div>
                           <div className='fourth-box-containers-one-icons-paragraph-container'>
                           <span className='fourth-box-containers-one-icons-text'>Unity:</span>
                           </div>
                      </div>
                      
                        <p className='fourth-box-containers-one-icons-paragraph'>We stand together, stronger than ever, as we navigate the thrilling waters of cryptocurrency. As a member of the AniMeme family, you're never alone. We celebrate together in times of prosperity, support each other during challenges, and constantly learn and grow as one.</p>
                      
                     
                </div>
                <div className='fourth-box-containers-one'>
                      <div className='fourth-box-containers-one-icons'>
                           <div className='fourth-box-containers-icons-box' >
                              <img src={icon} className='fourth-box-containers-images'/>
                           </div>
                           <div className='fourth-box-containers-one-icons-paragraph-container'>
                           <span className='fourth-box-containers-one-icons-text'>Unity:</span>
                           </div>
                      </div>
                      
                        <p className='fourth-box-containers-one-icons-paragraph'>We stand together, stronger than ever, as we navigate the thrilling waters of cryptocurrency. As a member of the AniMeme family, you're never alone. We celebrate together in times of prosperity, support each other during challenges, and constantly learn and grow as one.</p>
                      
                     
                </div>
            </div>
      </div>
      {/* fifth Container */}
      <div className='fifth-container' id='animonic'  style={{ backgroundImage:'url('+Group132+')'}}>
           <div className='fifth-inner-container' style={{ backgroundImage:'url('+pink+')'}}>
                <div className='fifth-container-heading-box'>
                        <h1 className='fifth-container-heading'>$animeme Animenomics - No taxes, No high slippage, full<br></br> transparency.</h1>
                        <img src={penstylewhite} className='fifth-container-pen-style'/>
                </div>
                <div className='fifth-second-inner-container-heading-box' style={{ backgroundImage:'url('+OBJECTSsec+')' }}>
                    <h1 className='fifth-second-inner-container-heading'>
                        $ anime Chadnomics
                    </h1>
                </div>
                    <img src={newpen} className='fifth-second-inner-container-image'/>
               <div className='fifth-inner-container-boxes' >
                      <div className='fifth-inner-container-one'>
                           <div className='fifth-inner-container-one-heading-box'>
                              <h1 className='fifth-inner-container-one-heading'>Total</h1>
                           </div>
                           <div className='fifth-inner-container-one-span-box'>
                              <span className='fifth-inner-container-one-span'>420,690,000,000,000</span>
                           </div>
                      </div>
                      <div className='fifth-inner-container-one'>
                           <div className='fifth-inner-container-one-heading-box'>
                              <h1 className='fifth-inner-container-one-heading'>PRE-SALE</h1>
                           </div>
                           <div className='fifth-inner-container-one-span-box'>
                              <span className='fifth-inner-container-one-span'>63,103,500,000,000 (15%)</span>
                           </div>
                      </div>
                      <div className='fifth-inner-container-one'>
                           <div className='fifth-inner-container-one-heading-box'>
                              <h1 className='fifth-inner-container-one-heading'>PRE-SALE PRICE</h1>
                           </div>
                           <div className='fifth-inner-container-one-span-box'>
                              <span className='fifth-inner-container-one-span'>0.0000000008793</span>
                           </div>
                      </div>
               </div> 
               <div className='fifth-inner-container-boxes inner-second-css'>
                      <div className='fifth-inner-container-one'>
                           <div className='fifth-inner-container-one-heading-box'>
                              <h1 className='fifth-inner-container-one-heading'>Treasury for Future CEX</h1>
                           </div>
                           <div className='fifth-inner-container-one-span-box'>
                              <span className='fifth-inner-container-one-span'>29027610000000 (6.9%)</span>
                           </div>
                           <div className='fifth-inner-container-one-span-box'>
                              <span className='fifth-inner-container-one-span'>Multi Sig - Yes.</span>
                           </div>
                      </div>
                      <div className='fifth-inner-container-one'>
                           <div className='fifth-inner-container-one-heading-box'>
                              <h1 className='fifth-inner-container-one-heading'>
                                   Marketing & Team & <br></br> Partnerships
                              </h1>
                           </div>
                           <div className='fifth-inner-container-one-span-box'>
                              <span className='fifth-inner-container-one-span'>16,827,600,000,000 (3%)</span>
                           </div>
                           <div className='fifth-inner-container-one-span-box'>
                              <span className='fifth-inner-container-one-span'>Multi Sig - Yes.</span>
                           </div>
                      </div>
                      <div className='fifth-inner-container-one'>
                           <div className='fifth-inner-container-one-heading-box'>
                              <h1 className='fifth-inner-container-one-heading'>$GEN Liquidity Pool</h1>
                           </div>
                           <div className='fifth-inner-container-one-span-box'>
                              <span className='fifth-inner-container-one-span'>72.1% of Total Supply</span>
                           </div>
                           <div className='fifth-inner-container-one-span-box'>
                              <span className='fifth-inner-container-one-span'>LP ETH = 30ETH</span>
                           </div>
                      </div>
                      <div className='fifth-inner-container-one displaynone'>
                           <div className='fifth-inner-container-one-heading-box'>
                              <h1 className='fifth-inner-container-one-heading'>Memeopolis™ Treasury</h1>
                           </div>
                           <div className='fifth-inner-container-one-span-box'>
                              <span className='fifth-inner-container-one-span'>8,413,800,000,000 (2%)</span>
                           </div>
                           <div className='fifth-inner-container-one-span-box'>
                              <span className='fifth-inner-container-one-span'>Multi Sig - Yes.</span>
                           </div>
                      </div>
               </div>    
               <div className='fifth-container-memepolis'>
                    <div>
                         <h1 className='fifth-container-memepolis-heading'>Memeopolis™ Treasury</h1>
                         <p className='fifth-container-memepolis-spanone' >8,413,800,000,000 (2%)</p>
                         <p className='fifth-container-memepolis-spantwo' >Multi Sig - Yes.</p>
                    </div>
               </div> 
               <div className='fifth-container-lp-tokens' >
                    <div className='fifth-container-lp-tokens-imageone-box'>
                         <img src={Group202} className='fifth-container-lp-tokens-imageone'/>
                    </div>
                    <div className='fifth-container-lp-tokens-headings-boxes'>
                         <h1 className='fifth-container-lp-tokens-heading'>LP Tokens - Burned (Liquidity Locked)</h1>
                         <div className='fifth-container-lp-tokens-headings-image-box'>
                              <img src={Frame115}  className='fifth-container-lp-tokens-headings-image'/>
                         </div>
                         <p className='fifth-container-lp-tokens-headings-pone'>Contract - <a>To be Renounced</a><br></br> NO Taxes, NO Bullshit. That’s how Chads roll.</p>
                    </div>
                    <div className='fifth-container-lp-tokens-imageone-box'>
                         <img src={Group203}  className='fifth-container-lp-tokens-imageone'/>
                    </div>
               </div>
               <div className='fifth-container-heading-box margintophun'>
                        <h1 className='fifth-container-heading'>Join the movement How to buy $Animeme?</h1>
                        <img src={penstylewhite} className='fifth-container-pen-stylesec'/>
                </div>
                <div className='fifth-container-wallet-boxes'>
                     <div className='fifth-container-wallet-box-one'>
                         <div className='fifth-container-wallet-boxone-heading-box'>
                              <h1 className='fifth-container-wallet-boxone-heading'>Create a wallet</h1>
                         </div>
                         <div className='fifth-container-wallet-boxone-paragraph-box'>
                              <div className='fifth-container-wallet-boxone-icon-box'>
                                   <img src={wallet} className='fifth-container-wallet-boxone-icon-image'/>
                              </div>
                              <div className='fifth-container-wallet-boxone-pargraph-box'>
                                   <p className='fifth-container-wallet-boxone-pragraph'>
                                   Create a Wallet To secure your crypto assets, freely download MetaMask or a wallet of your preference from the App Store or Google Play Store. For those using a desktop, the Google Chrome or Brave extension can be downloaded by visiting metamask.io
                                   </p>
                              </div>
                         </div>
                         <div className='fifth-container-wallet-btn-box'>
                              <button className='fifth-container-wallet-btn wallet-btn-active'>Lets Fucking Go</button>
                         </div>
                     </div>
                     <div className='fifth-container-wallet-box-one'>
                         <div className='fifth-container-wallet-boxone-heading-box'>
                              <h1 className='fifth-container-wallet-boxone-heading'>Switch ETH for $animeme</h1>
                         </div>
                         <div className='fifth-container-wallet-boxone-paragraph-box'>
                              <div className='fifth-container-wallet-boxone-icon-box'>
                                   <img src={iconswipe} className='fifth-container-wallet-boxone-icon-image'/>
                              </div>
                              <div className='fifth-container-wallet-boxone-pargraph-box'>
                                   <p className='fifth-container-wallet-boxone-pragraph'>
                                   Switch ETH For $animeme Start buying by switching ETH for $animeme. Just a friendly reminder that taxes are 0 and in case the swap failes, just try again because in moments on high volatility, swaps sometimes fail.
                                   </p>
                              </div>
                         </div>
                         <div className='fifth-container-wallet-btn-box'>
                              <button className='fifth-container-wallet-btn'>Lets Fucking Go</button>
                         </div>
                     </div>
                </div>
                <div className='fifth-container-wallet-boxes margintopzero'>
                     <div className='fifth-container-wallet-box-one'>
                         <div className='fifth-container-wallet-boxone-heading-box'>
                              <h1 className='fifth-container-wallet-boxone-heading'>Go to uniswap</h1>
                         </div>
                         <div className='fifth-container-wallet-boxone-paragraph-box'>
                              <div className='fifth-container-wallet-boxone-icon-box'>
                                   <img src={Icon_uniswap} className='fifth-container-wallet-boxone-icon-image'/>
                              </div>
                              <div className='fifth-container-wallet-boxone-pargraph-box'>
                                   <p className='fifth-container-wallet-boxone-pragraph'>
                                   Go to app.uniswap.org. Connect your wallet using Metamask or the app you are using. Paste the $animeme address into Uniswap, choose $animeme and confirm. Once you do that, Metamask will prompt you for a wallet signature, that you need to confirm.
                                   </p>
                              </div>
                         </div>
                         <div className='fifth-container-wallet-btn-box'>
                              <button className='fifth-container-wallet-btn'>Lets Fucking Go</button>
                         </div>
                     </div>
                     <div className='fifth-container-wallet-box-one '>
                         <div className='fifth-container-wallet-boxone-heading-box'>
                              <h1 className='fifth-container-wallet-boxone-heading'>Transfer ETH to your wallet</h1>
                         </div>
                         <div className='fifth-container-wallet-boxone-paragraph-box'>
                              <div className='fifth-container-wallet-boxone-icon-box'>
                                   <img src={Icon_Get_some_eth} className='fifth-container-wallet-boxone-icon-image'/>
                              </div>
                              <div className='fifth-container-wallet-boxone-pargraph-box'>
                                   <p className='fifth-container-wallet-boxone-pragraph'>
                                   You need to have eth in order to buy $animeme. If you lack ETH, several options are available to you: make a direct purchase through MetaMask, transfer from an alternate wallet, or purchase on a different exchange and then forward it to your desired wallet.
                                   </p>
                              </div>
                         </div>
                         <div className='fifth-container-wallet-btn-box'>
                              <button className='fifth-container-wallet-btn'>Lets Fucking Go</button>
                         </div>
                     </div>
                </div>
           </div>
      </div>
      {/* sixth container */}
      <div className='sixth-container' id='community' style={{ backgroundImage:'url('+Subtract+')'}}>
             <div className='sixth-container-Road-map'>
                  <h1 className='sixth-container-Road-map-heading'>Road Map</h1>
                  <p className='sixth-container-Road-map-paragraph'>Animeme Cultural movement</p>
                  <img src={penstyle} className='sixth-container-Road-map-images'/>
             </div>
             <div className='sixth-container-Road-map-steps'>
                  <div className='sixth-container-Road-map-verticalimage-box'>
                         <img src={group158} className='sixth-container-Road-map-verticalimage'/>
                  </div>
                   <div>
                         <div className='sixth-container-Road-map-chapterone' style={{ backgroundImage:'url('+Subtractone+')'}}>
                                   <h1 className='sixth-container-Road-map-chapterone-heading'>
                                        Chapter 1
                                   </h1>
                         </div>
                         {/* //style={{ backgroundImage:'url('+Group151+')'}} */}
                         <div>
                              <div className='sixth-container-Road-map-paragraph-chapterdiv cutboxtwo' >
                                        <div className='sixth-container-Road-map-inner-paragraph-chapterdivone '>
                                             <p className='sixth-container-Road-map-inner-paragraph'>Genesis of AniMeme Coin. In this initial phase, our focus is on building a solid foundation. We will launch the AniMeme coin, establish our community, and introduce the unique blend of anime and memes to the crypto world. This stage is about laying the groundwork for the exciting journey ahead.</p>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Token Mint</span>
                                             </div>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Coinmarketcap & Coingecko listings</span>
                                             </div>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Contract renounce</span>
                                             </div>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Reaching $1 million market cap</span>
                                             </div>
                                        </div>
                                   <div className='sixth-container-Road-map-inner-paragraph-chapterdivtwo'>
                                        <img src={g1} className='sixth-container-Road-map-image'/>
                                   </div>
                              </div>
                         </div>
                         <div className='ext-chapterone'>
                              <div className='sixth-container-Road-map-chapterone chapter-sec' style={{ backgroundImage:'url('+Subtractone+')'}}>
                                        <h1 className='sixth-container-Road-map-chapterone-heading ' >
                                             Chapter 2
                                        </h1>
                              </div>
                         </div>
                         <div>
                              <div className='sixth-container-Road-map-paragraph-chapterdiv reverse-flex cutboxtwo'>
                                   <div className='sixth-container-Road-map-inner-paragraph-chapterdivone'>
                                             <p className='sixth-container-Road-map-inner-paragraph'>Genesis of AniMeme Coin. In this initial phase, our focus is on building a solid foundation. We will launch the AniMeme coin, establish our community, and introduce the unique blend of anime and memes to the crypto world. This stage is about laying the groundwork for the exciting journey ahead.</p>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Token Mint</span>
                                             </div>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Coinmarketcap & Coingecko listings</span>
                                             </div>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Contract renounce</span>
                                             </div>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Reaching $1 million market cap</span>
                                             </div>
                                             
                                   </div>
                                   <div className='sixth-container-Road-map-inner-paragraph-chapterdivtwo responimgtwo'>
                                        <img src={g2} className='sixth-container-Road-map-image'/>
                                   </div>
                              </div>
                         </div>
                         <div className='sixth-container-Road-map-chapterone extrm' style={{ backgroundImage:'url('+Subtractone+')'}}>
                                   <h1 className='sixth-container-Road-map-chapterone-heading'>
                                        Chapter 3
                                   </h1>
                         </div>
                         <div>
                              <div className='sixth-container-Road-map-paragraph-chapterdiv cutboxtwo'>
                                   <div className='sixth-container-Road-map-inner-paragraph-chapterdivone'>
                                             <p className='sixth-container-Road-map-inner-paragraph'>Genesis of AniMeme Coin. In this initial phase, our focus is on building a solid foundation. We will launch the AniMeme coin, establish our community, and introduce the unique blend of anime and memes to the crypto world. This stage is about laying the groundwork for the exciting journey ahead.</p>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Token Mint</span>
                                             </div>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Coinmarketcap & Coingecko listings</span>
                                             </div>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Contract renounce</span>
                                             </div>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Reaching $1 million market cap</span>
                                             </div>
                                             
                                   </div>
                                   <div className='sixth-container-Road-map-inner-paragraph-chapterdivtwo'>
                                        <img src={g3} className='sixth-container-Road-map-image'/>
                                   </div>
                              </div>
                         </div>  
                         <div className='ext-chapterone'>
                              <div className='sixth-container-Road-map-chapterone chapter-sec' style={{ backgroundImage:'url('+Subtractone+')'}}>
                                        <h1 className='sixth-container-Road-map-chapterone-heading ' >
                                             Chapter 4
                                        </h1>
                              </div>
                         </div>
                         <div>
                              <div className='sixth-container-Road-map-paragraph-chapterdiv reverse-flex cutboxtwo'>
                                   <div className='sixth-container-Road-map-inner-paragraph-chapterdivone'>
                                             <p className='sixth-container-Road-map-inner-paragraph'>Genesis of AniMeme Coin. In this initial phase, our focus is on building a solid foundation. We will launch the AniMeme coin, establish our community, and introduce the unique blend of anime and memes to the crypto world. This stage is about laying the groundwork for the exciting journey ahead.</p>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Token Mint</span>
                                             </div>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Coinmarketcap & Coingecko listings</span>
                                             </div>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Contract renounce</span>
                                             </div>
                                             <div className='sixth-container-Road-map-inner-span-box'>
                                             <span className='sixth-container-Road-map-inner-span'>Reaching $1 million market cap</span>
                                             </div>
                                             
                                   </div>
                                   <div className='sixth-container-Road-map-inner-paragraph-chapterdivtwo responimgtwo'>
                                        <img src={g2} className='sixth-container-Road-map-image'/>
                                   </div>
                              </div>
                         </div>   
                   </div>
             </div>
      </div>
      {/* footer container  */}
      <div className='footer-container' style={{ backgroundImage:'url('+Group168+')' }}>
          <div className='footer-container-one'>
               <div className='logo-box resforfoooter'>
                    <div className='logo-img-box extrlogo-img-box'>
                         <img src={logo} className='logo-img'/>
                    </div>
                    <span className='logo-text'>ANIMEME</span>
               </div>
               <h1 className='footer-container-one-heading' >BY ANIMEME BE CHAND</h1>
               <img src={new_white_pen}  className='footer-container-one-imagesecond'/>
          </div>
          <div className='footer-container-two'>
                 <h1 className='footer-container-copywrith'>© 2023 - $ animeme by Yes.All rights <br></br>reserved.
                 </h1>
                 <span className='mail-span'>chad@AniMeme.Vip</span>
          </div>
          <div className='menu-social-box  forfooter'>
                <div className='social-img-box'>
                    <a href='#' style={{ cursor:'pointer' }}>
                        <img src={twitter} className='twitter-img'/>
                    </a>
                    <a href='#' style={{ cursor:'pointer' }}>
                        <img src={telegram} className='twitter-img'/>
                    </a>
                    <a href='#' style={{ cursor:'pointer' }}>
                        <img src={ether} className='twitter-img'/>
                    </a>
                    <a href='#' style={{ cursor:'pointer' }}>
                        <img src={game} className='twitter-img'/>
                    </a>
                </div>
                
          </div>
      </div>
    </>
  )
}
