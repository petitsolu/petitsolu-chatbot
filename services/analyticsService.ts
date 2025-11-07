// This allows TypeScript to recognize the gtag function from Google Analytics
// that we've added to the window object in index.html.
declare global {
    interface Window {
      gtag: (...args: any[]) => void;
    }
}
  
/**
 * Sends a custom event to Google Analytics.
 * This function checks if the `gtag` function is available on the window object
 * before attempting to send an event. This prevents errors if Google Analytics
 * fails to load or is blocked by an ad blocker or user consent settings.
 *
 * @param eventName The name of the event to track (e.g., 'click_suggestion').
 * @param eventParams Optional parameters providing more context about the event.
 */
export const trackEvent = (
    eventName: string,
    eventParams?: { [key: string]: string | string[] | number | undefined }
): void => {
    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, {
            ...eventParams,
            'event_category': 'Chatbot', // Categorize all events for easier reporting
        });
    } else {
        // In a development environment, it can be useful to know if tracking is not working.
        if (process.env.NODE_ENV === 'development') {
            console.log(`GA Event (not sent): ${eventName}`, eventParams);
        }
    }
};
