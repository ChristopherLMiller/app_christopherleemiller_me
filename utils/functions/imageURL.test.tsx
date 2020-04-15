import { ImageURL } from './imageURL';

test('Returns image URL string with all defaults', () => {
    expect(ImageURL()).toBe(`https://res.cloudinary.com/christopherleemiller/image/upload/v1554111995/clm_me/assets/default`)
});

test('Returns image URL with defaults except image', () => {
    expect(ImageURL('clm_me/img_test')).toBe(`https://res.cloudinary.com/christopherleemiller/image/upload/v1554111995/clm_me/img_test`)
});

test('Returns default image URL with width and height specified as options', () => {
    expect(ImageURL('default', { w: 300, h: 500})).toBe(`https://res.cloudinary.com/christopherleemiller/image/upload/v1554111995/clm_me/assets/default`)
});

test('Returns image URL with width and height specified as options', () => {
    expect(ImageURL('clm_me/img_test', { w: 300, h: 500})).toBe(`https://res.cloudinary.com/christopherleemiller/image/upload/w_300,h_500/v1554111995/clm_me/img_test`)
});