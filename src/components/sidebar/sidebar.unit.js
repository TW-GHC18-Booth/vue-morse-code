import morseAlphabet from '@utils/morseAlphabet';
import Sidebar from './sidebar';

describe('@component/Sidebar', () => {
  it('sets the correct default morse code data', () => {
    expect (typeof Sidebar.data).toBe('function');
    const data = Sidebar.data();
    expect(data.morseAlphabet).toEqual(morseAlphabet.MORSE_TO_ENGLISH);
  })

  it('should render 26 paragraph tags (one for each letter) ', () => {
    const wrapper = mount(Sidebar);
    expect(wrapper.find('.sidebar-container').element.children.length).toEqual(26);
  })
});