import {describe, expect, it} from 'vitest'

import {mount} from '@vue/test-utils'
import Example1 from '../Example1.vue'

describe('Example1', () => {
  it('renders properly', () => {
    const wrapper = mount(Example1)
    expect(wrapper.text()).toContain('Lorem')
  })
})
