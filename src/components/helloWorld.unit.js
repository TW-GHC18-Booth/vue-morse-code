import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld';


describe('HelloWorld', () => {
  const wrapper = mount(HelloWorld);

  it('renders a component', () => {
    expect(wrapper.html()).toContain('<h3>Installed CLI Plugins</h3>')
  })
})