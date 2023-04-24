import React, { Component } from 'react';

export class Toolbar extends Component {
  render() {
    const { filters, selected, onSelectFilter } = this.props

    console.log(filters)

    return (
      <>
        {filters?.map((item, index) => {
          return <button key={index} onClick={onSelectFilter} className={item === selected ? 'btn active_btn' : 'btn inactive_btn'}>{item}</button>
        })}
      </>
    )
  }
}
