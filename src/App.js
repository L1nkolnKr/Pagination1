import axios from "axios";
import { useState, useEffect } from "react";
import {Container, Pagination, TextField, Stack, Link} from '@mui/material'

const BASE_URL = 'http://hn.algolia.com/api/v1/search?'

function App() {
  const[posts, setPosts] = useState([]);
  const[queru, seQuery] = useState('react');
  const[page, setPage] = useState(1);
  const[pageQty, setPageQty] = useState(0);

  useEffect(() =>{
    axios.get(BASE_URL + `query=${query}&page=${page - 1}`).then(
      ({data}) => {
        setPosts(data.hits)
        setPageQty(data.nbPages)
      }
    )
  }, [query, page])
  return (
    <Container>
      <TextField
      fullWidth
      label="query"
      value={query}
      onChangeCapture={(event) => setQuery(event.target.value)}
      />
      <Stack spacing={2}>
        <Pagination/>
      </Stack>
    </Container>
  );
}

export default App;

export default App;
