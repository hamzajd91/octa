import React from "react";
import "../LatestBlogs/LatestBlogs.css";
import LatestBlogsCard from "./LatestBlogsCard";
import Image1 from "./Assets/VR.jpg";
import Image2 from "./Assets/blockchain.jpg";
import Image3 from "./Assets/nft.jpg";
import Image4 from "./Assets/wallet.jpg";

function LatestBlogs() {
  const Blogs = [
    {
      img: Image1,
      title: "METAVERSE! FUTURE OF A DIGITAL WORLD",
      description:
        "METAVERSE! Future of a digital world? Imagine a virtual world where you can live, work, shop, talk, walk, eat and interact with others like a real world all from the comfort of your own home in the real world. Well, the pace with which the technological advancements are paving their way, the day is not so far when we will be able to step our foot into such a virtual world. Although metaverse is not fully in existence yet, there are some platforms that contain metaverse-like elements. Metaverse is the iteration of the internet that is going to take many forms, including gaming, online communities and business communities where people…..   ",
    },
    {
      img: Image2,
      title: "BLOCKCHAIN - AN UPGRADE OF TRUST",
      description:
        "Blockchain industry is evolving at a breakneck pace. A wiser person in the business world is one who updates himself with the latest trends. Its use has long gone beyond cryptocurrency. Blockchain is a distributed database or ledger that facilitates the process of recording transactions and tracking assets in a business network. Blockchain records information in a way that makes it difficult or impossible to change, hack, or cheat the system. From a business perspective……   ",
    },
    {
      img: Image3,
      title: "TREND OF NFT MARKETPLACES IN GAMING INDUSTRY  ",
      description:
        " In-game NFT Marketplace is one of the increasing trends in the gaming industry. With the boom of NFTs in 2021, NFT Marketplaces become a center of attraction for the NFT community. People are looking to have their own NFTs, and digital assets that are going to increase in value over the time. An NFT Marketplace is a blockchain based online platform to buy and sell non-fungible tokens (NFTs).  An NFT represents the authenticity and ownership of a unique digital or physical asset. However, NFTs are often compared with cryptocurrencies that run on blockchain technology but it can’t be traded as equivalents the way cryptocurrencies are….   ",
    },
    {
      img: Image4,
      title: "WALLETCONNECT - SECURE AS EVER! ",
      description:
        " WalletConnect - a single integration, open source protocol that enable users to log into decentralized applications also known as Dapps. Wallet connect is a secure bridge that brings web3 and DApps together by enabling wallets and apps to securely connect, interact and make transactions. You can link your wallet with hundreds of Dapps through walletconnect and enjoy the experiences of a new internet world Web 3.0.     ",
    },
  ];

  return (
    <div className="LatestBlogsMain py-5">
      <div className="">
        <div className="latestBlogsHeadings">
          <h3 className="OctaHeaderlight centered flex-column">
            Latest Blogs
            <p>Latest Blogs</p>
          </h3>

          <p className="Testimonialstext mb-4">
            A place for our thoughts, funds, obsessions and opinions
          </p>

          <p className="latestBlogsSubheading"></p>
        </div>
        <div className="cardsRow">
          {Blogs.map((item, index) => {
            return (
              <LatestBlogsCard
                title={item.title}
                img={item.img}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LatestBlogs;
