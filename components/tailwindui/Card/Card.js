import { Fragment } from 'react'
class Card extends React.Component {
    render () {
      return (
        <Fragment>
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="flex-1 flex flex-col p-8">
                    <img className="h-24 mx-auto" src={this.props.logo} alt="" />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">{this.props.name}</h3>
                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm">{this.props.title}</dd>
                    </dl>
                </div>
            </li>
        </Fragment>
      )
    }
  }
  
  export default Card;