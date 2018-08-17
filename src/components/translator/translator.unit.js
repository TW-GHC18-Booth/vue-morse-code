import Translator from './translator';

describe('@component/Translator', () => {
  const wrapper = mount(Translator);
  it('should render an input field and button', () => {
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('button').html()).toEqual('<button> Translate to English </button>');
  })
});