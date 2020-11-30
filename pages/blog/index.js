import React, { Component, Fragment } from "react"
import Head from "next/head"
import Butter from "buttercms"
import { Blog } from "../../components/tailwindui"

const ButterCMSContext = React.createContext();
const butter = Butter(`${process.env.BUTTER_TOKEN}`);

class BlogIndexPage extends Component {
  data = {
    blogIndex: {}
  };

  static async getInitialProps() {
    try {
      const response = await Promise.all([
        butter.post.list(),
      ]);

      this.data = {
        blogIndex: response[0].data.data
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
          <title>Blog</title>
        </Head>
        <ButterCMSContext.Provider
          value={{
            blogIndex: data.blogIndex
          }}
        >
          <ButterCMSContext.Consumer>
            {({
              blogIndex
            }) => {
              return (
                <Fragment>

                  <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                    <div className="absolute inset-0">
                      <div className="h-1/3 sm:h-2/3"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto">
                      <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                          From the blog
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                          &nbsp;
                        </p>
                      </div>
                      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {blogIndex
                          ? blogIndex.map((summary) => <Blog {...summary} />)
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

export default BlogIndexPage;