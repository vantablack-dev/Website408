import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories:[
                {
                    key: 'all',
                    name: 'Всі товари'
                },
                {
                    key: 'hyper',
                    name: 'HyperX'
                },
                {
                    key: 'steel',
                    name: 'Steelseries'
                },
                {
                    key: 'razer',
                    name: 'Razer'
                },
                {
                    key: 'moto',
                    name: 'Motospeed'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el =>(
            <div key={el.key} onClick={()=> this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories