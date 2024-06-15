import ReactGA from 'react-ga4';

export const trackPageView = (page) => {
    ReactGA.send({ hitType: "pageview", page });
};

export const trackEvent = (category, action, label = '') => {
    ReactGA.event({
        category: category,
        action: action,
        label: label,
    });
};