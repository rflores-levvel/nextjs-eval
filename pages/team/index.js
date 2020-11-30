import React, { Component, Fragment } from "react"
import Head from "next/head"
import Butter from "buttercms"
import { Profile } from "../../components/tailwindui"

const ButterCMSContext = React.createContext();
const butter = Butter(`${process.env.BUTTER_TOKEN}`);

class TeamIndexPage extends Component {
  data = {
    pageData: {}
  };

  static async getInitialProps() {
    try {
      const response = await Promise.all([
        butter.page.retrieve("*", "copy-team")
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
          <title>Team Page</title>
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

                  <section>
                    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                      <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                        <div className="space-y-5 sm:space-y-4">
                          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{pageData.title}</h2>
                          <p className="text-xl text-gray-500">{pageData.description}</p>
                        </div>
                        <div className="lg:col-span-2">
                          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
                            {pageData?.members && pageData?.members.length
                              ? pageData.members.map((member) => <Profile {...member} />)
                              : null
                            }
                          </ul>
                        </div>
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