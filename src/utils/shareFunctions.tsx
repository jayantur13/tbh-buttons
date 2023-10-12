/**
 * Shares the provided URL on Facebook.
 * @param {string} shareUrl - The URL to be shared on Facebook.
 */
const fbShare = (shareUrl: string) => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

/**
 * Shares the provided URL on Twitter.
 * @param {string} shareUrl - The URL to be shared on Twitter.
 * @param {string} text - Text to include in the tweet.
 * @param {string} hashtags - Hashtags for the tweet.
 */
const twitterShare = (shareUrl: string, text: string, hashtags: string) => {
  const url = `http://twitter.com/share?text=${text}&url=${encodeURIComponent(
    shareUrl,
  )}&hashtags=${hashtags}`;
  window.open(url, '_blank', 'width=600,height=400');
};

/**
 * Shares the provided URL on LinkedIn.
 * @param {string} shareUrl - The URL to be shared on LinkedIn.
 */
const shareToLinkedIn = (shareUrl: string) => {
  // Open the share dialog
  const url = `https://www.linkedin.com/shareArticle/?url=${encodeURIComponent(
    shareUrl,
  )}&mini=true`;
  window.open(url, '_blank', 'width=600,height=400');
};

/**
 * Shares the provided URL and media on Pinterest.
 * @param {string} shareUrl - The URL to be shared on Pinterest.
 * @param {string} media - The media URL to be shared along with the link.
 */
const shareToPinterest = (shareUrl: string, media: string) => {
  const url = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}
    &media=${encodeURIComponent(media)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

/**
 * Shares the provided URL and title as text on Reddit.
 * @param {string} shareUrl - The URL to be shared on Reddit.
 * @param {string} sharetitle - The title to be shared along with the link.
 */
const shareToReddit = (shareUrl: string, sharetitle: string) => {
  const url = `https://www.reddit.com/submit?url=${encodeURIComponent(
    shareUrl,
  )}&title=${sharetitle}`;
  window.open(url, '_blank', 'width=600,height=400');
};

/**
 * Opens a WhatsApp message window with the provided message.
 * @param {string} message - The text message to be sent on WhatsApp.
 */
const sendWAMessage = (message: string) => {
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`);
};

/**
 * Shares the provided URL and text on Telegram.
 * @param {string} shareUrl - The URL to be shared on Telegram.
 * @param {string} text - The text to accompany the shared URL.
 */
const sendToTelegram = (shareUrl: string, text: string) => {
  const url = `https://telegram.me/share/?url=${encodeURIComponent(shareUrl)}&text=${text}`;
  window.open(url);
};

export {
  fbShare,
  twitterShare,
  shareToLinkedIn,
  shareToPinterest,
  shareToReddit,
  sendToTelegram,
  sendWAMessage,
};
