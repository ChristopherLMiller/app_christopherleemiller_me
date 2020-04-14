import { ImageURL } from './imageURL';

test('It returns URL string with all defaults', () => {
    expect(ImageURL()).toBe(`https://res.cloudinary.com/christopherleemiller/image/upload/c_scale,w_300,q_auto,f_auto/v1554111995/clm_me/assets/default`)
});

test('It returns image URL with defaults except image', () => {
    expect(ImageURL('img_test')).toBe('https://res.cloudinary.com/christopherleemiller/image/upload/c_scale,w_300,q_auto,f_auto/v1554111995/clm_me/img_test')
});