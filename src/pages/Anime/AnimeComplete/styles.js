import styled from 'styled-components'
import { white } from '@carbon/colors'

export const AnimeItem = styled.li`
  display: flex;
  flex-shrink: 2;
  margin-top: .5rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid ${white};
`

export const AnimeName = styled.h4`
  font-weight: bold;
  text-align:left;
`

export const AnimeDescription = styled.p`
  display: flex;
  flex-basis: auto;
  flex-shrink:2;
  font-weight: bold;
  padding-top:60px;
  width:auto;
  height: 40px;
  text-align:bottom;
 
  
`
export const DataBase = styled.button`
display: flex;
flex-shrink : 2;
flex-basis: auto;
}
`
