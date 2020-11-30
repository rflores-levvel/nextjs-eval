import React, { Component, Fragment } from "react";
//import { Hero, Card, Tile } from '../components/tailwindui'

class BlogDetailPage extends Component {
  

  render() {
    return (
      <Fragment>
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-max lg:max-w-7xl mx-auto">
                
                <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                    <div className="text-base max-w-prose lg:max-w-none">
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Team Detail</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative md:bg-white md:p-6">
                        <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                            <p>Ultrices ultricies a in odio consequat egestas rutrum. Ut vitae aliquam in ipsum. Duis nullam placerat cursus risus ultrices nisi, vitae tellus in. Qui non fugiat aut minus aut rerum. Perspiciatis iusto mollitia iste minima soluta id.</p>
                            <p>Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue <a href="#">maecenas</a> risus nulla ultrices congue nunc tortor. Eu leo risus porta integer suspendisse sed sit ligula elit.</p>
                            <ol>
                            <li>Integer varius imperdiet sed interdum felis cras in nec nunc.</li>
                            <li>Quam malesuada odio ut sit egestas. Elementum at porta vitae.</li>
                            </ol>
                            <p>Amet, eu nulla id molestie quis tortor. Auctor erat justo, sed pellentesque scelerisque interdum blandit lectus. Nec viverra amet ac facilisis vestibulum. Vestibulum purus nibh ac ultricies congue.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default BlogDetailPage;