import {
  fbShare,
  sendToTelegram,
  sendWAMessage,
  shareToLinkedIn,
  shareToPinterest,
  shareToReddit,
  twitterShare,
} from '../src/index';
import '@testing-library/jest-dom';

describe('Testing functions', () => {
  it('fbshare', () => {
    const originalOpen = window.open;
    const mockOpen = jest.fn();
    window.open = mockOpen;

    const shareUrl = 'https://example.com';
    const expectedUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl,
    )}`;

    fbShare(shareUrl);

    expect(mockOpen).toHaveBeenCalledWith(expectedUrl, '_blank', 'width=600,height=400');

    // Restore the original window.open after the test
    window.open = originalOpen;
  });

  it('telegram', () => {
    const originalOpen = window.open;
    const mockOpen = jest.fn();
    window.open = mockOpen;

    const shareUrl = 'https://example.com';
    const text = 'This is text message';
    const expectedUrl = `https://telegram.me/share/?url=${encodeURIComponent(
      shareUrl,
    )}&text=${text}`;

    sendToTelegram(shareUrl, text);

    expect(mockOpen).toHaveBeenCalledWith(expectedUrl);

    // Restore the original window.open after the test
    window.open = originalOpen;
  });

  it('whatsapp', () => {
    const originalOpen = window.open;
    const mockOpen = jest.fn();
    window.open = mockOpen;

    const message = 'This is text message';
    const expectedUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    sendWAMessage(message);

    expect(mockOpen).toHaveBeenCalledWith(expectedUrl);

    // Restore the original window.open after the test
    window.open = originalOpen;
  });

  it('linkedin', () => {
    const originalOpen = window.open;
    const mockOpen = jest.fn();
    window.open = mockOpen;

    const shareUrl = 'https://google.com';
    const expectedUrl = `https://www.linkedin.com/shareArticle/?url=${encodeURIComponent(
      shareUrl,
    )}&mini=true`;

    shareToLinkedIn(shareUrl);

    expect(mockOpen).toHaveBeenCalledWith(expectedUrl, '_blank', 'width=600,height=400');

    // Restore the original window.open after the test
    window.open = originalOpen;
  });

  it('reddit', () => {
    const originalOpen = window.open;
    const mockOpen = jest.fn();
    window.open = mockOpen;

    const shareUrl = 'https://google.com';
    const sharetitle = 'Google';
    const expectedUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(
      shareUrl,
    )}&title=${sharetitle}`;

    shareToReddit(shareUrl, sharetitle);

    expect(mockOpen).toHaveBeenCalledWith(expectedUrl, '_blank', 'width=600,height=400');

    // Restore the original window.open after the test
    window.open = originalOpen;
  });

  it('pinterest', () => {
    const originalOpen = window.open;
    const mockOpen = jest.fn();
    window.open = mockOpen;

    const shareUrl = 'https://google.com';
    const media =
      'https://w0.peakpx.com/wallpaper/736/818/HD-wallpaper-demon-slayer-anime-sword.jpg';
    const expectedUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
      shareUrl,
    )}
    &media=${encodeURIComponent(media)}`;

    shareToPinterest(shareUrl, media);

    expect(mockOpen).toHaveBeenCalledWith(expectedUrl, '_blank', 'width=600,height=400');

    // Restore the original window.open after the test
    window.open = originalOpen;
  });

  it('twitter', () => {
    const originalOpen = window.open;
    const mockOpen = jest.fn();
    window.open = mockOpen;

    const shareUrl = 'https://google.com';
    const text = 'Google.com';
    const hashtags = 'google, google.com';

    const expectedUrl = `http://twitter.com/share?text=${text}&url=${encodeURIComponent(
      shareUrl,
    )}&hashtags=${hashtags}`;

    twitterShare(shareUrl, text, hashtags);

    expect(mockOpen).toHaveBeenCalledWith(expectedUrl, '_blank', 'width=600,height=400');

    // Restore the original window.open after the test
    window.open = originalOpen;
  });
});
