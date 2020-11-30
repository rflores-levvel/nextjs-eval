import { Fragment } from 'react'
import dayjs from 'dayjs'

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

class Blog extends React.Component {
    render () {
      return (
        <Fragment>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden" key={this.props.url}>
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={this.props.featured_image} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                    <a href="#" className="hover:underline">
                        Article
                    </a>
                    </p>
                    <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                        {this.props.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                        {this.props.meta_description}
                    </p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="ml-1">
                    <p className="text-sm font-medium text-gray-900">
                        <a href="#" className="hover:underline">
                        {this.props.author.first_name} {this.props.author.last_name}
                        </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={dayjs(this.props.published).format('MMM \'YY')}>
                        {dayjs(this.props.published).format('MMM \'YY')}
                        </time>
                        <span aria-hidden="true">
                        &middot;
                        </span>
                        <span>
                        {dayjs(this.props.published).fromNow()}
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
      )
    }
  }
  
  export default Blog;