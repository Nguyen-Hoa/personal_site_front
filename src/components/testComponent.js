import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react'

import CVSearch from './CV/CVSearch'
import curriculum_vitae from './../assets/cv'

const initialState = { isLoading: false, results: [], value: '' }
const source = curriculum_vitae;
const resultRenderer = ({ position }) => <Label content={position} />
const SearchEngine = new CVSearch();

export default class SearchExampleStandard extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      let search_results = [];
      search_results = SearchEngine.search(value, curriculum_vitae);

      this.setState({
        isLoading: false,
        results: search_results,
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            resultRenderer={resultRenderer}
            value={value}
            {...this.props}
          />
        </Grid.Column>

        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.state, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(source, null, 2)}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}