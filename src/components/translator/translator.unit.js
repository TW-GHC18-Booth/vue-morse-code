import Vue from 'vue';
import Translator from './translator';

describe('@component/Translator', () => {
  
  it('renders an input field and button', () => {
    const wrapper = mount(Translator);
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('button').html()).toEqual('<button> Translate to English </button>');
  })

  it('shows error message when button clicked on empty input', () => {
    const wrapper = mount(Translator);
    
    expect(wrapper.find('.warning').isVisible()).toBe(false);

    wrapper.find('button').trigger('click');
  
    expect(wrapper.find('.warning').isVisible()).toBe(true);
  })

  it('shows "HI" in translator box', () => {
    const wrapper = mount(Translator);
    
    wrapper.vm.inputString = '.... ..';
    wrapper.find('button').trigger('click');
    
    expect(wrapper.vm.translatedString).toEqual("HI");
    expect(wrapper.find('#translated-string').html()).toEqual('<p id="translated-string"> HI </p>');
  })
});