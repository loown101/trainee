import React, { Component } from 'react';
import { Toolbar } from '../Toolbar/Toolbar';
import { imgArr } from '../../images';
import { ProjectList } from '../ProjectList/ProjectList';

export class Portfolio extends Component {
  state = { selected: 'All', arr: imgArr };

  filter = (e) => {
    const select = e.target.textContent

    if (select === 'All') {
      this.setState({ selected: 'All', arr: imgArr })
    } else if (select === 'Websites') {
      this.setState({ selected: select, arr: imgArr.filter(item => item.category === select) })
    } else if (select === 'Flayers') {
      this.setState({ selected: select, arr: imgArr.filter(item => item.category === select) })
    } else if (select === 'Business Cards') {
      this.setState({ selected: select, arr: imgArr.filter(item => item.category === select) })
    } else {
      this.setState({ selected: 'All', arr: imgArr.filter(item => item.category === select) })
    }

    return this.state
  }


  render() {
    return (
      <>
        <div className='toolbar'>
          <Toolbar
            filters={["All", "Websites", "Flayers", "Business Cards"]}
            selected={this.state.selected}
            onSelectFilter={this.filter} />
        </div>
        <div className='imageContainer'>
          <ProjectList project={this.state.arr} />
        </div>
      </>
    )
  }
}