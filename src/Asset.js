import React from 'react'
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import styled from 'styled-components'
const AssetWrapper = styled.div`
  margin-right: 22px;
  display: flex;
  flex-direction: column;
`

const AssetBox = styled.div`
  width: 225px;
  height: 127px;
  background-color: ${({ color }) => color};
  border-color: white;
  border-style: solid;
  border-width: ${({ focused }) => (focused ? '6px' : 0)};
  box-sizing: border-box;
  border-radius: 7px;
`

const AssetTitle = styled.div`
  color: white;
  margin-top: 10px;
  font-family: 'Segoe UI';
  font-size: 24px;
  font-weight: 400;
`

function Asset({ title, color, onEnterPress, onFocus }) {
  const { ref, focused } = useFocusable({
    onEnterPress,
    onFocus,
    extraProps: {
      title,
      color,
    },
  })

  return (
    <AssetWrapper ref={ref}>
      <AssetBox color={color} focused={focused} />
      <AssetTitle>{title}</AssetTitle>
    </AssetWrapper>
  )
}
export default Asset
