import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";

function Sidebar() {
    const sidebarItems = [
        {
            id: 1,
            name: "Home",
            icon: <GoHome />
        },
        {
            id: 2,
            name: "Shorts",
            icon: <SiYoutubeshorts />
        },
        {
            id: 3,
            name: "Subscription",
            icon: <MdOutlineSubscriptions />
        },
    ];
    const sidebarItems2 = [
        {
          id: 1,
          name: "Your Channel",
          icon: <PiUserSquareThin />,
        },
        {
          id: 2,
          name: "History",
          icon: <MdHistory />,
        },
        {
          id: 3,
          name: "Playlists",
          icon: <MdOutlineSubscriptions />,
        },
        {
          id: 4,
          name: "Your Videos",
          icon: <BiVideo />,
        },
        {
          id: 5,
          name: "Watch later",
          icon: <MdOutlineWatchLater />,
        },
        {
          id: 6,
          name: "Liked videos",
          icon: <AiOutlineLike />,
        },
    ]; 
    const sidebarItems3 = [
        {
          id: 1,
          name: "Trending",
          icon: <SiTrendmicro />,
        },
        {
          id: 2,
          name: "Shopping",
          icon: <HiOutlineShoppingBag />,
        },
        {
          id: 3,
          name: "Music",
          icon: <SiYoutubemusic />,
        },
        {
          id: 4,
          name: "Films",
          icon: <PiFilmSlateLight />,
        },
        {
          id: 5,
          name: "Live",
          icon: <CgMediaLive />,
        },
        {
          id: 6,
          name: "Gaming",
          icon: <IoGameControllerOutline />,
        },
        {
          id: 7,
          name: "News",
          icon: <FaRegNewspaper />,
        },
        {
          id: 8,
          name: "Sport",
          icon: <TfiCup />,
        },
        {
          id: 9,
          name: "Courses",
          icon: <SiStylelint />,
        },
        {
          id: 10,
          name: "Fashion & beauty",
          icon: <PiLightbulbLight />,
        },
        {
          id: 11,
          name: "Padcasts",
          icon: <MdPodcasts />,
        },
    ];
    const sidebarItems4 = [
    {
        id: 1,
        name: "Youtube Premium",
        icon: <FaYoutube />,
    },
    {
        id: 2,
        name: "Youtube Studio",
        icon: <SiYoutubestudio />,
    },
    {
        id: 3,
        name: "Youtube Music",
        icon: <SiYoutubemusic />,
    },
    {
        id: 4,
        name: "Youtube Kids",
        icon: <SiYoutubekids />,
    },
    ];
    const sidebarItems5 = [
      {
          id: 1,
          name: "Settings",
          icon: <IoSettingsOutline />,
      },
      {
          id: 2,
          name: "Report history",
          icon: <MdOutlineOutlinedFlag />,
      },
      {
          id: 3,
          name: "Help",
          icon: <MdHelpOutline />,
      },
      {
          id: 4,
          name: "Send feedback",
          icon: <MdOutlineFeedback />,
      },
    ];  
    return (
        <div className='px-6 w-[20%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden'>
            <div className="space-y-3 items-center">
                {
                    sidebarItems.map((item) => {
                        return (
                            <div key={'main-'+item.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                                <div className='text-xl cursor-pointer' >{item.icon}</div>
                                <span className='cursor-pointer text-sm'>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br /> <hr />

            <div className="mt-4 space-y-3 items-center">
                <div className='flex items-center space-x-2'>
                    <h1>You</h1>
                    <FaChevronRight />
                </div>
                {
                    sidebarItems2.map((item) => {
                        return (
                            <div key={'you-'+item.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                                <div className='text-xl cursor-pointer' >{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br /><hr />

            <div className="mt-4 space-y-3 items-center">
                <div className='flex items-center space-x-2'>
                    <h1 className='font-semibold'>Explore</h1>
                </div>
                {
                    sidebarItems3.map((item) => {
                        return (
                            <div key={'explore-'+item.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                                <div className='text-xl cursor-pointer' >{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br /><hr />
            <div className="mt-4 space-y-3 items-center">
                <div className='flex items-center space-x-2'>
                    <h1 className='font-semibold'>More From Youtube</h1>
                </div>
                {
                    sidebarItems4.map((item) => {
                        return (
                            <div key={'explore-'+item.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                                <div className='text-xl cursor-pointer text-red-500' >{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>  
            <br /><hr /> 
            <div className="mt-4 space-y-3 items-center">
                <div className='flex items-center space-x-2'>
                    <h1 className='font-semibold'>More From Youtube</h1>
                </div>
                {
                    sidebarItems5.map((item) => {
                        return (
                            <div key={'explore-'+item.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                                <div className='text-xl cursor-pointer' >{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>  
            <br /><hr /><br />
            <span className='text-xs font-semibold text-gray-500'>About Press Copyright<br />Contact us Creator<br />Advertise Developers<br /><br />Terms Privacy Policy & Safety<br />How YouTube works <br />Test new features</span>
            <br />
            <p className='text-xs text-gray-800 mt-1'>&copy; 2025 vsmit's yt-clone</p>                                
        </div>
    );
}

export default Sidebar;
