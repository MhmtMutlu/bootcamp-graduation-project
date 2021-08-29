import React from 'react';
import ComplaintsList from '../../../components/ComplaintsList/ComplaintsList';
import Header from '../../Home/Header/Header';
import { ComplaintListContainer, ComplaintListWrapper } from './styles';

function ComplaintList() {
  
  return (
    <ComplaintListWrapper>
      <Header />
      <ComplaintListContainer>
        <ComplaintsList />
      </ComplaintListContainer>
    </ComplaintListWrapper>
  )
}

export default ComplaintList;
