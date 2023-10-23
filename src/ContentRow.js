import React, { useRef, useCallback } from 'react'
import {
  useFocusable,
  FocusContext,
} from '@noriginmedia/norigin-spatial-navigation'
import styled from 'styled-components'
import Asset from './Asset'
import { assets } from './constant'

function ContentRow({ title: rowTitle, onAssetPress, onFocus }) {
  const { ref, focusKey } = useFocusable({
    onFocus,
  })
  const scrollingRef = useRef(null)

  const onAssetFocus = useCallback(
    (props) => {
      console.log(props)
      scrollingRef.current.scrollTo({
        left: props.x,
        behavior: 'smooth',
      })
      onAssetPress(props.node)
    },
    [scrollingRef]
  )

  return (
    <FocusContext.Provider value={focusKey}>
      <ContentRowWrapper ref={ref}>
        <ContentRowTitle>{rowTitle}</ContentRowTitle>
        <ContentRowScrollingWrapper ref={scrollingRef}>
          <ContentRowScrollingContent>
            {assets.map(({ title, color }) => (
              <Asset
                key={title}
                title={title}
                color={color}
                onEnterPress={onAssetPress}
                onFocus={onAssetFocus}
              />
            ))}
          </ContentRowScrollingContent>
        </ContentRowScrollingWrapper>
      </ContentRowWrapper>
    </FocusContext.Provider>
  )
}
export default ContentRow
const ContentRowWrapper = styled.div`
  overflow-x: hidden;
  margin-bottom: 37px;
`

const ContentRowTitle = styled.div`
  color: white;
  margin-bottom: 22px;
  font-size: 27px;
  font-weight: 700;
  font-family: 'Segoe UI';
  padding-left: 60px;
`

const ContentRowScrollingWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  flex-shrink: 1;
  flex-grow: 1;
  padding-left: 60px;
`

const ContentRowScrollingContent = styled.div`
  display: flex;
  flex-direction: row;
`
