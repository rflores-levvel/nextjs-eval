import React, { Component, Fragment } from "react";
import Link from 'next/link'
//import { Hero, Card, Tile } from '../components/tailwindui'

class JobsIndexPage extends Component {
  

  render() {
    return (
        <Fragment>
            <div className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-max lg:max-w-7xl mx-auto">
                    
                    <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                        <div className="text-base max-w-prose lg:max-w-none">
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">Job Index</p>
                        </div>

                        <Link href="/jobs/slug">Job Details</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
  }
}

export default JobsIndexPage;