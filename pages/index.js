import React, { Component, Fragment } from "react";
import Head from "next/head";
import Butter from "buttercms";


const ButterCMSContext = React.createContext();
const butter = Butter(`${process.env.BUTTER_TOKEN}`);

class HomePage extends Component {
  data = {
    pageData: {}
  };

  static async getInitialProps() {
    try {
      const response = await Promise.all([
        butter.page.retrieve("*", "master-page")
      ]);

      this.data = {
        pageData: response[0].data.data
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
          <title>Home</title>
        </Head>
        <ButterCMSContext.Provider
          value={{
            pageData: data.pageData
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
                      <div>{pageData.slug}</div>
                      <div>{pageData.fields.page_name}</div>
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

export default HomePage;