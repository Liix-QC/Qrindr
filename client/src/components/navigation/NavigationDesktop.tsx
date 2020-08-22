import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faHome, faInfoCircle} from "@fortawesome/pro-solid-svg-icons";
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faDollarSign} from "@fortawesome/pro-duotone-svg-icons";
import {Link} from "react-router-dom";

class NavigationDesktop extends Component {

    navOptions = [
        {
            name: 'Home',
            location: '/',
            icon: {
                fa: faHome,
                css: 'text-red-400',
            }
        },
        {
            name: 'About',
            location: '/about',
            icon: {
                fa: faInfoCircle,
                css: 'text-teal-400',
            }
        }
    ];

    navExternal = [
        {
            name: 'Discord',
            location: 'https://discord.gg/BAEkm58',
            icon: {
                fa: faDiscord,
                css: 'text-indigo-300',
            }
        },
        {
            name: 'GitHub',
            location: 'https://github.com/CameronCT/Qrindr',
            external: true,
            icon: {
                fa: faGithub,
                css: 'text-gray-200',
            }
        },
        {
            name: 'Donate',
            location: 'https://streamlabs.com/gnikgg',
            icon: {
                fa: faDollarSign,
                css: 'text-green-400',
            }
        },
    ];

    render() {
        return (
            <div className="w-12 lg:w-2/12 border-r border-gray-800" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                <div className="text-center lg:p-6">
                    <div className="text-sm lg:text-3xl text-white font-bold">Qrindr</div>
                </div>
                {this.navOptions.map((row, key:number) => (
                    <Link key={key} to={row.location} className="flex py-3 hover:bg-gray-900">
                        <div className="w-full lg:w-3/12 text-center my-auto">
                            <FontAwesomeIcon icon={row.icon.fa} className={` ${row.icon.css}`} />
                        </div>
                        <div className="hidden lg:block lg:w-9/12">
                            <div className={"font-semibold tracking-wide text-gray-100"}>
                                {row.name}
                            </div>
                        </div>
                    </Link>
                ))}
                {this.navExternal.map((row, key: number) => (
                    <a key={key} href={row.location} className="flex py-3 hover:bg-gray-900">
                        <div className="w-full lg:w-3/12 text-center my-auto">
                            <FontAwesomeIcon icon={row.icon.fa} className={` ${row.icon.css}`} />
                        </div>
                        <div className="hidden lg:block lg:w-9/12">
                            <div className={"font-semibold tracking-wide text-gray-100"}>
                                {row.name}
                            </div>
                        </div>
                    </a>
                ))}
                <div className={"border-t border-gray-900 py-6 text-gray-400 text-center font-semibold text-xs"}>
                    <div>
                        &copy; Qrindr 2020
                    </div>
                    Crafted with <FontAwesomeIcon className="text-red-500" icon={faHeart} /> by GNiK
                </div>
            </div>
        )
    }

}

export default NavigationDesktop;