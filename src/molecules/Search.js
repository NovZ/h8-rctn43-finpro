import React, { useReducer } from 'react';
import TextInput from '../atoms/TextInput';
import Button from '@material-ui/core/Button';

const initialState = '';
const reducer = (state, action) => {
  console.log(state,action)
  return action
};

const Search  = ({handleSearch}) => {
  const [keyword, changeKeyword] = useReducer(reducer, initialState);

  const doSearch = (e) => {
    e.preventDefault()
    handleSearch(keyword)
  }

    return (
      <form>
        <TextInput value={keyword} onChangeText={changeKeyword} onPressEnter={doSearch} />
        <Button variant="contained" color="secondary" size="small" onClick={doSearch}>Search</Button>
      </form>
    )
}

export default Search;