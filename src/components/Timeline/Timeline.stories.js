import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Timeline from './Timeline'

const data = [
  {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
  {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
  {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
  {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
  {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
]

const dataWithoutTime = data.map(item => ({
  title: item.title,
  description: item.description
}))

const lineStyle = {
  borderColor: 'green'
}

const circleStyle = {
  backgroundColor: 'green'
}

storiesOf('Atom / Timeline', module)
  .add('With 5 events', () =>
    <Timeline data={data} />
  )
  .add('With 5 events (with custom renderTime method)', () =>
    <Timeline data={dataWithoutTime} renderTime={() => {}} />
  )
  .add('With 5 events (with custom renderTime method) and custom line and circle styles', () =>
    <Timeline data={dataWithoutTime} renderTime={() => {}} lineStyle={lineStyle} circleStyle={circleStyle} />
  )
