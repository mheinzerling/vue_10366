import {describe, expect, it} from 'vitest'

import {mount} from '@vue/test-utils'
import Example2 from '../Example2.vue'

describe('Example2', () => {
  it('renders properly', () => {
    const wrapper = mount(Example2)
    expect(wrapper.text()).toContain('Lorem')
  })
})
