import React, { Component, Fragment } from "react"
import Head from "next/head"
import Butter from "buttercms"
import { Card } from "../../components/tailwindui"

const ButterCMSContext = React.createContext();
const butter = Butter(`${process.env.BUTTER_TOKEN}`);

class TeamIndexPage extends Component {
  data = {
    pageData: {}
  };

  static async getInitialProps() {
    try {
      const response = await Promise.all([
        butter.page.retrieve("*", "companies")
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
          <title>Companies</title>
        </Head>
        <ButterCMSContext.Provider
          value={{
            pageData: data.pageData.fields
          }}
        >
          <ButterCMSContext.Consumer>
            {({
              pageData
            }) => {
              return (
                <Fragment>

                  <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                    <div className="relative max-w-7xl mx-auto">
                      <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                          {pageData.title}
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                          {pageData.description}
                        </p>
                      </div>
                      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
                        {pageData?.companies && pageData?.companies.length
                          ? pageData.companies.map((member) => <Card {...member} />)
                          : null
                        }
                      </div>
                    </div>
                  </section>

                </Fragment>
              );
            }}
          </ButterCMSContext.Consumer>
        </ButterCMSContext.Provider>
      </>
    );
  }
}

export default TeamIndexPage;