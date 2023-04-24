import React, { Component } from 'react';

export class ProjectList extends Component {
  render() {
    const { project } = this.props

    return (
      <>
        {project?.map((item, index) => {
          return <img key={index} src={item.img} alt="Картинка" className='img' />
        })}
      </>
    )
  }
}