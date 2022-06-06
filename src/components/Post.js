import { styled } from '../../stitches.config'

export const PostMain = styled('main', {
  '@bp2': {
    padding: '$navHeightDesktop 0',
    flex: '1 1',
    flexDirection: 'column',
  },
  padding: '$navHeightMobile 0',
  overflow: 'hidden',
  flexDirection: 'column-reverse',
})
