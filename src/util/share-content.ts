import { getUrl } from './get-url';

type ShareData = Parameters<Navigator['share']>[0];

function shareContent(onSuccess?: () => void, onError?: () => void) {
  return (shareData: ShareData) => {
    const url = getUrl(shareData?.url);
    const title = shareData?.title || document.title;
    const text = shareData?.text;
    const files = shareData?.files;

    navigator.share({ text, title, url, files }).then(onSuccess).catch(onError);
  };
}

export { shareContent };
