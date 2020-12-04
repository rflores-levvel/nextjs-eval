import React, { Component, Fragment } from "react";
import Head from "next/head";
import Butter from "buttercms";


const ButterCMSContext = React.createContext();
const butter = Butter(`${process.env.BUTTER_TOKEN}`);

class ReviewPage extends Component {
    data = {
        pageData: {},
        featureData: {}
    };

    static async getInitialProps() {
        try {
            const response = await Promise.all([
                butter.page.retrieve("*", "master-page")
            ]);

            this.data = {
                pageData: response[0].data.data.fields.components[0],
                featureData: response[0].data.data.fields.components[1]
            };
        } catch (error) {
            console.error(error);
        }

        return {
            data: this.data
        };
    }

    render() {
        const { data } = this.props;
        return (
            <>
                <Head>
                    <title>Review</title>
                </Head>
                <ButterCMSContext.Provider
                    value={{
                        pageData: data.pageData,
                        featureData: data.featureData
                    }}
                >
                    <ButterCMSContext.Consumer>
                        {({
                              pageData, featureData
                          }) => {
                            return (
                                <Fragment>
                                    <div className="relative">
                                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                            {/*<div>{pageData.slug}</div>*/}
                                            {/*<div>{pageData.fields.page_name}</div>*/}
                                            {/*<div>{JSON.stringify(pageData)}</div>*/}
                                            {/*<div className={'featured-data'}>{JSON.stringify(featureData)}</div>*/}
                                            <main className="lg:relative">
                                                <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                                                    <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                                                        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                                                            <span className="block primary-color xl:inline">{pageData.fields.headline}</span><br/>
                                                            <span className="block  xl:inline">{pageData.fields.sub_headline}</span>
                                                        </h1>
                                                        <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl" dangerouslySetInnerHTML={{ __html: pageData.fields.description}}/>
                                                        {/*</p>*/}
                                                        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                                                            <div className="rounded-md shadow">
                                                                <a href={pageData.fields.actions[0].path} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-color md:py-4 md:text-lg md:px-10">
                                                                    {pageData.fields.actions[0].label}
                                                                </a>
                                                            </div>
                                                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                                                <a href={pageData.fields.actions[1].path} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
                                                                    {pageData.fields.actions[1].label}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                                                    <img className="absolute inset-0 w-full h-full object-cover" src={pageData.fields.background_image} alt="" />
                                                </div>
                                            </main>
                                        </div>

                                    </div>

                                </Fragment>
                            );
                        }}
                    </ButterCMSContext.Consumer>
                </ButterCMSContext.Provider>
            </>
        );
    }
}

export default ReviewPage;