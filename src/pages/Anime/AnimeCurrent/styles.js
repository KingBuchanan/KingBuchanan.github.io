import styled from 'styled-components'
import { white } from '@carbon/colors'

export const AnimeItem = styled.li`
.box{
  
  margin-top: .5rem;
  padding-bottom: 2rem;
  border-style:solid;
}
border-bottom: 1px solid ${white};
`

export const AnimeName = styled.h4`
  font-weight: bold;
  text-align:left;
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




