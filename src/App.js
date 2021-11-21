import React from 'react';
import styled from 'styled-components';
import {useObserver} from 'mobx-react';

import combineStores from './stores/combineStores';

const App = () => {
  const {counterStore} = combineStores();

  const onClickIncrease = () => {
    counterStore.increaseAction(1);
  }

  const onClickDecrease = () => {
    counterStore.decreaseAction(1);
  }

  return useObserver(() => (
    <Container>
      <Text>현재 값: {counterStore.num}</Text>

      <Button onClick={onClickIncrease}>증가</Button>
      <Button onClick={onClickDecrease}>감소</Button>
    </Container>
  ))
}

const Container = styled.div`
  text-align: center;
  padding-top: 20px;
`;

const Text = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 5px;
  background: #18f;
  color: #fff;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: #d1d1d1;
  }
`;
export default App;
