import React, { Component } from 'react';
import { Router, hashHistory as History } from 'react-router';

class Navigation extends Component {
    render() {
        return (
            <div className="border-t-4 border-gray-800 text-gray-100 py-4">
                <div className="max-w-screen-lg container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-1/5 text-4xl my-auto font-bold">
                            Qrindr
                        </div>
                        <div className="w-4/5 text-right my-auto">
                            <a href="#home" className="text-gray-300 font-semibold uppercase pl-3">Home</a>
                            <a href="#home" className="text-gray-300 font-semibold uppercase pl-3">About</a>
                            <a href="#home" className="text-gray-300 font-semibold uppercase pl-3">Discord</a>
                            <a href="#home" className="text-gray-300 font-semibold uppercase pl-3">GitHub</a>
                            <a href="#home" className="text-gray-300 font-semibold uppercase pl-3">Donate</a>
                            <span className="border-r border-gray-500 px-2"></span>
                            <a href="#home" className="text-gray-300 font-semibold uppercase pl-3">Settings</a>
                            <a href="/auth/discord" className="text-gray-300 font-semibold uppercase pl-3">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;