import styled from 'styled-components'
import { white } from '@carbon/colors'

export const AnimeItem = styled.li`
.box{
  display: flex;
  margin-top: .5rem;
  padding-bottom: 20px;
  border-style:solid;
  

}
border-left: 1px solid ${white};
border-right: 1px solid ${white};
border-bottom: 1px solid ${white};
`

export const AnimeName = styled.h5`
  font-weight: bold;
  text-align:left;
  display: flex;
  
`

export const AnimeDescription = styled.p`
  .box{
  display: flex;
  font-weight: bold;
  padding-top:60px;
  width:auto;
  height: 40px;
  text-align:bottom;
  word-wrap: break-word;
  }
  
`




