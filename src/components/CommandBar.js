import { styled } from '../../stitches.config'
import { Box } from 'components/Box'
import * as React from 'react'
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from 'kbar'

export default function CommandBar(props) {
  const actions = [
    {
      id: 'copy',
      name: 'Copy URL',
      shortcut: ['u'],
      keywords: 'copy-url',
      section: 'General',
      perform: () => navigator.clipboard.writeText(window.location.href),
      icon: <Icon className="ri-file-copy-line" />,
    },
    {
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'send-email',
      section: 'General',
      perform: () => window.open('mailto:gustavojobs.dev@gmail.com', '_blank'),
      icon: <Icon className="ri-mail-line" />,
    },
    {
      id: 'resume',
      name: 'Resume',
      shortcut: ['r'],
      keywords: 'my-resume',
      section: 'Go To',
      perform: () => window.open('/static/document/resume-gustavo.pdf', '_blank'),
      icon: <Icon className="ri-file-text-line" />,
    },
    {
      id: 'github',
      name: 'Github',
      shortcut: ['f', 'g'],
      keywords: 'go-github',
      section: 'Follow',
      perform: () => window.open('https://github.com/GustavoJobstraibizer', '_blank'),
      icon: <Icon className="ri-github-line" />,
    },
    {
      id: 'gitlab',
      name: 'Gitlab',
      shortcut: ['f', 'gl'],
      keywords: 'go-gitlab',
      section: 'Follow',
      perform: () => window.open('https://gitlab.com/gustavo_dev', '_blank'),
      icon: <Icon className="ri-gitlab-line" />,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['f', 'l'],
      keywords: 'go-linkedin',
      section: 'Follow',
      perform: () =>
        window.open(
          'https://www.linkedin.com/in/ghjobstraibizer/?locale=en_US',
          '_blank'
        ),
      icon: <Icon className="ri-linkedin-box-line" />,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      shortcut: ['f', 'i'],
      keywords: 'go-instagram',
      section: 'Follow',
      perform: () => window.open('https://www.instagram.com/gu_jobstraibizer', '_blank'),
      icon: <Icon className="ri-instagram-line" />,
    },
  ]

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <Positioner>
          <Animator>
            <Search placeholder="Type a command or search…" />
            <RenderResults />
          </Animator>
        </Positioner>
      </KBarPortal>

      {props.children}
    </KBarProvider>
  )
}

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <GroupName>{item}</GroupName>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

const ResultItem = React.forwardRef(({ action, active }, ref) => {
  return (
    <Box ref={ref} css={getResultStyle(active)}>
      <Action>
        {action.icon && action.icon}
        <ActionRow>
          <span>{action.name}</span>
        </ActionRow>
      </Action>
      {action.shortcut?.length ? (
        <Shortcut aria-hidden>
          {action.shortcut.map(shortcut => (
            <Kbd key={shortcut}>{shortcut}</Kbd>
          ))}
        </Shortcut>
      ) : null}
    </Box>
  )
})

ResultItem.displayName = 'ResultItem'

const Positioner = styled(KBarPositioner, {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 1.6rem 1.6rem',
  background: 'rgba(0, 0, 0, .8)',
  boxSizing: 'border-box',
  '::-webkit-scrollbar': {
    width: '.6rem',
  },
  '::-webkit-scrollbar-track': {
    background: '$background'
  },
  '::-webkit-scrollbar-thumb': {
    background: '$purple',
    borderRadius: '$borderRadius'
  }
})

const Search = styled(KBarSearch, {
  padding: '1.2rem 1.6rem',
  fontSize: '1.6rem',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: '$command',
  color: '$white',
})

const GroupName = styled('div', {
  padding: '.8rem 1.6rem',
  fontSize: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: '$command',
})

const Icon = styled('i', {
  fontSize: '2rem',
  position: 'relative',
  top: '-2px',
})

const Kbd = styled('kbd', {
  background: 'rgba(255, 255, 255, .1)',
  color: '$secondary',
  padding: '.4rem .8rem',
  textTransform: 'uppercase',
})

const Shortcut = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px',
})

const Action = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
})

const ActionRow = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const Animator = styled(KBarAnimator, {
  backgroundColor: '#1a1c1e',
  maxWidth: '60rem',
  width: '100%',
  color: '$textColor',
  borderRadius: '.8rem',
  overflow: 'hidden',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: '$command',
    WebkitBackdropFilter: 'saturate(300%) blur(25px)',
    backdropFilter: 'saturate(300%) blur(25px)',
  },
})

const getResultStyle = active => {
  return {
    padding: '1.2rem 1.6rem',
    background: active ? 'rgba(255, 255, 255, 0.1)' : '$command',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    cursor: 'pointer',
    color: active ? '$purple' : '$secondary',
  }
}